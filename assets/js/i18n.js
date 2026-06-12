(() => {
  let langData = null;
  let currentLang = localStorage.getItem('lang') || 'zh';

  function getNestedValue(obj, key) {
    if (!obj) return undefined;
    return key.split('.').reduce((acc, part) => acc?.[part], obj);
  }

  function getRootPath() {
    const scripts = document.getElementsByTagName('script');
    for (const script of scripts) {
      const src = script.getAttribute('src');
      if (src && src.includes('assets/js/i18n.js')) {
        return src.replace('assets/js/i18n.js', '');
      }
    }
    return '';
  }

  const rootPath = getRootPath();

  function t(key) {
    return getNestedValue(langData, key) || key;
  }

  function applyTranslation(el, key, value) {
    if (!value || value === key) return;

    if (el instanceof HTMLImageElement) {
      el.setAttribute('alt', value);
      return;
    }

    el.innerHTML = value;
  }

  function updatePageLang() {
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      applyTranslation(el, key, t(key));
    });

    const toggleBtn = document.querySelector('.lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = currentLang === 'en' ? '中文' : 'English';
    }
  }

  async function loadLang(lang) {
    const url = `${rootPath}lang/${lang}.json?t=${new Date().getTime()}`;

    try {
      console.log(`[i18n] Fetching: ${url}`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      langData = await res.json();
      console.log(`[i18n] Loaded: ${lang}`);

      updatePageLang();
      window.dispatchEvent(new Event('i18nLoaded'));
    } catch (err) {
      console.error('[i18n] Load failed:', err);
      console.warn(`无法加载语言文件: ${url}。请确认文件位于正确的 lang 目录下。`);
    }
  }

  window.i18n = {
    get: t,
    changeLang: (lang) => {
      if (currentLang === lang) return;
      currentLang = lang;
      localStorage.setItem('lang', lang);
      loadLang(lang);
    },
    currentLang: () => currentLang,
  };

  loadLang(currentLang);
})();
