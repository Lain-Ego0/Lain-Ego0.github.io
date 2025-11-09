let langData = {};
let currentLang = localStorage.getItem('lang') || 'en';

// 加载语言文件
async function loadLang(lang) {
  try {
    const res = await fetch(`lang/${lang}.json`);
    if (!res.ok) throw new Error('语言文件加载失败');
    langData = await res.json();
    updatePageLang();
  } catch (err) {
    console.error('多语言加载错误:', err);
  }
}

// 更新页面文本
function updatePageLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = key.split('.').reduce((obj, k) => obj?.[k], langData);
    
    if (value) {
      el.innerHTML = value.includes('<') ? value : value;
    }
  });
  // 更新语言切换按钮文本
  document.querySelector('.lang-toggle').textContent = currentLang === 'en' ? '中文' : 'English';
}

// 初始化加载默认语言
loadLang(currentLang);

// 暴露给main.js的方法
window.i18n = {
  get: (key) => key.split('.').reduce((obj, k) => obj?.[k], langData),
  changeLang: (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    loadLang(lang);
  },
  currentLang: () => currentLang
};