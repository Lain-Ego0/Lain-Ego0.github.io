// 定义全局变量
let langData = {};
let currentLang = localStorage.getItem('lang') || 'zh'; // 默认中文，可根据需求改

// 1. 暴露全局对象 (立即执行，防止 main.js 调用时未定义)
window.i18n = {
  get: (key) => {
    if (!langData) return key;
    return key.split('.').reduce((obj, k) => obj?.[k], langData) || key; // 找不到key时返回key本身
  },
  changeLang: (lang) => {
    if (currentLang === lang) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    loadLang(lang);
  },
  currentLang: () => currentLang
};

// 2. 加载语言文件 (核心逻辑)
async function loadLang(lang) {
  try {
    // 【修复】使用相对路径 ./lang/ 避免 404 错误
    const res = await fetch(`./lang/${lang}.json?t=${new Date().getTime()}`); 
    
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    langData = await res.json();
    console.log(`[i18n] Loaded: ${lang}`);
    
    // 更新页面静态文本
    updatePageLang();
    
    // 派发事件，通知 main.js 重绘动态内容
    window.dispatchEvent(new Event('i18nLoaded'));
    
  } catch (err) {
    console.error('[i18n] Load failed:', err);
    alert('语言文件加载失败，请检查 ./lang/ 目录下是否存在对应的 json 文件');
  }
}

// 3. 更新带有 data-i18n 属性的静态元素
function updatePageLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = window.i18n.get(key);
    
    if (value && value !== key) {
      // 支持 HTML 标签 (如 <br>)
      el.innerHTML = value; 
    }
  });

  // 更新切换按钮的文字
  const toggleBtn = document.querySelector('.lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === 'en' ? '中文' : 'English';
  }
}

// 初始化加载
loadLang(currentLang);