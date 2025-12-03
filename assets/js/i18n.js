// 定义全局变量
let langData = {};
let currentLang = localStorage.getItem('lang') || 'zh';

// 1. 暴露全局对象
window.i18n = {
  get: (key) => {
    if (!langData) return key;
    return key.split('.').reduce((obj, k) => obj?.[k], langData) || key;
  },
  changeLang: (lang) => {
    if (currentLang === lang) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    loadLang(lang);
  },
  currentLang: () => currentLang
};

// 工具函数：获取根目录前缀
// 通过检查 i18n.js 脚本标签的 src 属性来判断当前页面相对于根目录的深度
function getRootPath() {
  const scripts = document.getElementsByTagName('script');
  for (let script of scripts) {
    const src = script.getAttribute('src');
    if (src && src.includes('assets/js/i18n.js')) {
      // 这里的逻辑是：去掉 'assets/js/i18n.js' 后剩下的就是前缀
      // 例如：src="../../assets/js/i18n.js" -> 前缀是 "../../"
      // 例如：src="assets/js/i18n.js"     -> 前缀是 ""
      return src.replace('assets/js/i18n.js', '');
    }
  }
  return ''; // 默认回退（如果没有找到脚本标签）
}

// 2. 加载语言文件 (核心逻辑 - 已修复路径问题)
async function loadLang(lang) {
  const rootPath = getRootPath();
  // 拼接正确的路径：前缀 + lang/ + 文件名
  const url = `${rootPath}lang/${lang}.json?t=${new Date().getTime()}`;

  try {
    console.log(`[i18n] Fetching: ${url}`); // 方便调试，在控制台看实际请求地址
    const res = await fetch(url);
    
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    langData = await res.json();
    console.log(`[i18n] Loaded: ${lang}`);
    
    updatePageLang();
    window.dispatchEvent(new Event('i18nLoaded'));
    
  } catch (err) {
    console.error('[i18n] Load failed:', err);
    // 只有在真的请求失败时才弹窗，避免打扰用户
    console.warn(`无法加载语言文件: ${url}。请确认文件位于正确的 lang 目录下。`);
  }
}

// 3. 更新静态文本
function updatePageLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = window.i18n.get(key);
    
    if (value && value !== key) {
      el.innerHTML = value; 
    }
  });

  const toggleBtn = document.querySelector('.lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === 'en' ? '中文' : 'English';
  }
}

// 初始化加载
loadLang(currentLang);