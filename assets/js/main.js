// 页面DOM加载完成后，执行一次性初始化（事件绑定、平滑滚动）
window.addEventListener('DOMContentLoaded', () => {
  initLangToggle(); // 语言切换按钮绑定
  initSmoothScroll(); // 平滑滚动初始化
  initSubpageLangUpdate(); // 新增：子页面语言更新初始化
});

// 监听i18n加载完成事件，更新项目/文档/联系链接（支持语言切换）
window.addEventListener('i18nLoaded', () => {
  initProjects();
  initDocuments();
  initContactLinks();
});

// 在initProjects函数中修改图片class
function initProjects() {
  const projects = [
    { 
      id: 1, 
      img: "assets/images/Portfolio-01.png", 
      titleKey: "projects.item1.title", 
      descKey: "projects.item1.desc", 
      link: "pages/projects/project1.html"
    },
    { 
      id: 2, 
      img: "assets/images/Portfolio-02.png", 
      titleKey: "projects.item2.title", 
      descKey: "projects.item2.desc", 
      link: "pages/projects/project2.html"
    },
    { 
      id: 3, 
      img: "assets/images/Portfolio-03.png", 
      titleKey: "projects.item3.title", 
      descKey: "projects.item3.desc", 
      link: "pages/projects/project3.html"
    }
  ];
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card card';
    card.innerHTML = `
      <img src="${project.img}" alt="${window.i18n.get('projects.imgAlt')}" class="project-thumbnail">
      <div class="project-info">
        <h3>${window.i18n.get(project.titleKey)}</h3>
        <p>${window.i18n.get(project.descKey)}</p>
        <a href="${project.link}" class="project-link">${window.i18n.get('projects.viewDetail')}</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// 初始化文档链接（适配子页面路径）
function initDocuments() {
  const docs = [
    { key: "Document01.title", link: "pages/documents/document1.html", icon: "fas fa-edit" },
    { key: "Document02.title", link: "pages/documents/document2.html", icon: "fas fa-list" },
    { key: "Document03.title", link: "pages/documents/document3.html", icon: "fas fa-pencil-alt" }
  ];
  const container = document.querySelector('.publish-links');
  if (!container) return; // 子页面无文档容器，直接返回避免报错
  container.innerHTML = '';
  docs.forEach(doc => {
    const link = document.createElement('a');
    link.href = doc.link;
    link.target = "_blank";
    link.className = 'publish-link';
    link.innerHTML = `<i class="${doc.icon}"></i> ${window.i18n.get(doc.key)}`;
    container.appendChild(link);
  });
}

// 初始化联系链接
function initContactLinks() {
  const contacts = [
    { icon: "fab fa-bilibili", key: "contact.bilibili", link: "https://space.bilibili.com/385516781/upload/video" },
    { icon: "fab fa-github", key: "contact.github", link: "https://github.com/Lain-Ego0" },
    { icon: "fab fa-twitter", key: "contact.twitter", link: "https://x.com/Lain_Ego0" },
    { icon: "fab fa-zhihu", key: "contact.zhihu", link: "https://www.zhihu.com/people/hua-99-50-21" }
  ];
  const container = document.querySelector('.contact-links');
  if (!container) return; // 子页面无联系容器，直接返回避免报错
  container.innerHTML = '';
  contacts.forEach(contact => {
    const item = document.createElement('div');
    item.className = 'contact-item';
    item.innerHTML = `<a href="${contact.link}" target="_blank"><i class="${contact.icon}"></i><p>${window.i18n.get(contact.key)}</p></a>`;
    container.appendChild(item);
  });
}

// 语言切换按钮绑定（仅绑定一次）
function initLangToggle() {
  const toggle = document.querySelector('.lang-toggle');
  if (!toggle) {
    console.error('未找到语言切换按钮（.lang-toggle）');
    return;
  }
  toggle.addEventListener('click', () => {
    const newLang = window.i18n.currentLang() === 'en' ? 'zh' : 'en';
    window.i18n.changeLang(newLang);
  });
}

// 平滑滚动初始化
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// 新增：子页面专属语言更新逻辑（修复首次加载未翻译、切换失效问题）
function initSubpageLangUpdate() {
  // 若语言数据已加载，直接更新页面文本
  if (window.langData.nav) {
    window.updatePageLang();
  } else {
    // 未加载则重新加载当前选中的语言
    window.loadLang(window.i18n.currentLang());
  }
}