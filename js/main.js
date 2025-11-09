// 等待i18n加载完成
window.addEventListener('DOMContentLoaded', () => {
  initProjects();
  initDocuments();
  initContactLinks();
  initLangToggle();
  initSmoothScroll();
});

// 动态生成项目卡片
function initProjects() {
  const projects = [
    {
      id: 1,
      img: "assets/images/Portfolio-01.png",
      titleKey: "projects.item1.title",
      descKey: "projects.item1.desc",
      link: "project1.html"
    },
    {
      id: 2,
      img: "assets/images/Portfolio-02.png",
      titleKey: "projects.item2.title",
      descKey: "projects.item2.desc",
      link: "project2.html"
    },
    {
      id: 3,
      img: "assets/images/Portfolio-03.png",
      titleKey: "projects.item3.title",
      descKey: "projects.item3.desc",
      link: "project3.html"
    }
  ];

  const grid = document.querySelector('.projects-grid');
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card card';
    card.innerHTML = `
      <img src="${project.img}" alt="${window.i18n.get('projects.imgAlt')}" class="project-img">
      <div class="project-info">
        <h3>${window.i18n.get(project.titleKey)}</h3>
        <p>${window.i18n.get(project.descKey)}</p>
        <a href="${project.link}" class="project-link">${window.i18n.get('projects.viewDetail')}</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// 动态生成文档链接
function initDocuments() {
  const docs = [
    { key: "docs.document1", link: "document1.html", icon: "fas fa-edit" },
    { key: "docs.document2", link: "document2.html", icon: "fas fa-list" },
    { key: "docs.document3", link: "document3.html", icon: "fas fa-pencil-alt" }
  ];

  const container = document.querySelector('.publish-links');
  docs.forEach(doc => {
    const link = document.createElement('a');
    link.href = doc.link;
    link.target = "_blank";
    link.className = 'publish-link';
    link.innerHTML = `<i class="${doc.icon}"></i> ${window.i18n.get(doc.key)}`;
    container.appendChild(link);
  });
}

// 动态生成联系链接
function initContactLinks() {
  const contacts = [
    {
      icon: "fab fa-bilibili",
      key: "contact.bilibili",
      link: "https://space.bilibili.com/385516781/upload/video"
    },
    {
      icon: "fab fa-github",
      key: "contact.github",
      link: "https://github.com/Lain-Ego0"
    },
    {
      icon: "fab fa-twitter",
      key: "contact.twitter",
      link: "https://x.com/Lain_Ego0"
    },
    {
      icon: "fab fa-zhihu",
      key: "contact.zhihu",
      link: "https://www.zhihu.com/people/hua-99-50-21"
    }
  ];

  const container = document.querySelector('.contact-links');
  contacts.forEach(contact => {
    const item = document.createElement('div');
    item.className = 'contact-item';
    item.innerHTML = `
      <a href="${contact.link}" target="_blank">
        <i class="${contact.icon}"></i>
        <p>${window.i18n.get(contact.key)}</p>
      </a>
    `;
    container.appendChild(item);
  });
}

// 初始化语言切换
function initLangToggle() {
  const toggle = document.querySelector('.lang-toggle');
  toggle.addEventListener('click', () => {
    const newLang = window.i18n.currentLang() === 'en' ? 'zh' : 'en';
    window.i18n.changeLang(newLang);
  });
}

// 平滑滚动
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}