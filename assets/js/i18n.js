let langData = {};
let currentLang = localStorage.getItem('lang') || 'en';

// 关键修复：用根目录绝对路径加载语言文件，适配所有层级子页面
async function loadLang(lang) {
  try {
    const res = await fetch(`/lang/${lang}.json`, {
      cache: 'no-cache' // 禁用缓存，确保获取最新文件
    });
    if (!res.ok) throw new Error(`加载语言文件失败（${lang}.json），状态码: ${res.status}`);
    langData = await res.json();
    console.log(`成功加载${lang}语言文件:`, langData);
    updatePageLang();
    window.dispatchEvent(new Event('i18nLoaded')); // 触发页面更新事件
  } catch (err) {
    console.error('多语言加载错误:', err);
    alert('语言切换失败，请检查文件路径或刷新页面');
  }
}

// 更新页面所有带data-i18n属性的文本
function updatePageLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = key.split('.').reduce((obj, k) => obj?.[k], langData);
    
    if (value) {
      // 支持带HTML标签的翻译文本（如换行<br>）
      value.includes('<') ? el.innerHTML = value : el.textContent = value;
      console.log(`更新元素[${key}]:`, value);
    } else {
      console.warn(`未找到${key}对应的翻译文本`);
    }
  });
  // 更新语言切换按钮显示文本
  const toggleBtn = document.querySelector('.lang-toggle');
  if (toggleBtn) toggleBtn.textContent = currentLang === 'en' ? '中文' : 'English';
}

// 初始化加载默认语言
loadLang(currentLang);

// 暴露给外部的公共方法（供main.js调用）
window.i18n = {
  get: (key) => key.split('.').reduce((obj, k) => obj?.[k], langData),
  changeLang: (lang) => {
    if (currentLang === lang) return; // 避免重复切换同一语言
    currentLang = lang;
    localStorage.setItem('lang', lang); // 本地存储记住语言偏好
    loadLang(lang);
  },
  currentLang: () => currentLang
};

// 暴露全局变量，供main.js补充逻辑使用
window.langData = langData;
window.loadLang = loadLang;
window.updatePageLang = updatePageLang;