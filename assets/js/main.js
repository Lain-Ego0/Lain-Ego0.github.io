(() => {
  const PROJECT_TAG_LIBRARY = {
    ROBOTICS: 'Robotics',
    EMBEDDED: 'Embedded Systems',
    REINFORCEMENT_LEARNING: 'Reinforcement Learning',
    SIM2REAL: 'Sim2Real',
    DEPLOYMENT: 'Deployment',
    FREERTOS: 'FreeRTOS',
    MOTION_CONTROL: 'Motion Control',
    MOTOR_CONTROL: 'Motor Control',
    SLAM: 'SLAM',
    LIDAR: 'LiDAR',
    MECHANICAL_DESIGN: 'Mechanical Design',
    UNDERWATER_ROBOTICS: 'Underwater Robotics',
    VECTOR_PROPULSION: 'Vector Propulsion',
    WATERPROOF_ENGINEERING: 'Waterproof Engineering',
    AGRICULTURAL_ROBOTICS: 'Agricultural Robotics',
    MULTI_ROBOT_COLLABORATION: 'Multi-Robot Collaboration',
    WIKI: 'Wiki',
    KNOWLEDGE_BASE: 'Knowledge Base',
    OPEN_SOURCE: 'Open Source',
  };

  const PROJECTS = [
    {
      img: 'assets/images/opendog-cover.png',
      titleKey: 'projects.item1.title',
      descKey: 'projects.item1.desc',
      tags: [
        PROJECT_TAG_LIBRARY.ROBOTICS,
        PROJECT_TAG_LIBRARY.REINFORCEMENT_LEARNING,
        PROJECT_TAG_LIBRARY.SIM2REAL,
        PROJECT_TAG_LIBRARY.DEPLOYMENT,
      ],
      link: 'pages/projects/project1.html',
    },
    {
      img: 'assets/images/robocon-cover.png',
      titleKey: 'projects.item2.title',
      descKey: 'projects.item2.desc',
      tags: [
        PROJECT_TAG_LIBRARY.ROBOTICS,
        PROJECT_TAG_LIBRARY.MOTION_CONTROL,
        PROJECT_TAG_LIBRARY.SLAM,
        PROJECT_TAG_LIBRARY.LIDAR,
        PROJECT_TAG_LIBRARY.MECHANICAL_DESIGN,
      ],
      link: 'pages/projects/project2.html',
    },
    {
      img: 'assets/images/lobster-cover.png',
      titleKey: 'projects.item3.title',
      descKey: 'projects.item3.desc',
      tags: [
        PROJECT_TAG_LIBRARY.UNDERWATER_ROBOTICS,
        PROJECT_TAG_LIBRARY.EMBEDDED,
        PROJECT_TAG_LIBRARY.VECTOR_PROPULSION,
        PROJECT_TAG_LIBRARY.WATERPROOF_ENGINEERING,
      ],
      link: 'pages/projects/project3.html',
    },
    {
      img: 'assets/images/agri-cover.png',
      titleKey: 'projects.item4.title',
      descKey: 'projects.item4.desc',
      tags: [
        PROJECT_TAG_LIBRARY.AGRICULTURAL_ROBOTICS,
        PROJECT_TAG_LIBRARY.FREERTOS,
        PROJECT_TAG_LIBRARY.MOTOR_CONTROL,
        PROJECT_TAG_LIBRARY.MULTI_ROBOT_COLLABORATION,
      ],
      link: 'pages/projects/project4.html',
    },
    {
      img: 'assets/images/locowiki-cover.png',
      titleKey: 'projects.item5.title',
      descKey: 'projects.item5.desc',
      tags: [
        PROJECT_TAG_LIBRARY.WIKI,
        PROJECT_TAG_LIBRARY.KNOWLEDGE_BASE,
        PROJECT_TAG_LIBRARY.ROBOTICS,
        PROJECT_TAG_LIBRARY.OPEN_SOURCE,
      ],
      link: 'pages/projects/project5.html',
    },
  ];

  const OPEN_SOURCE_ITEMS = [
    { key: 'opensource.item9', linkCode: 'https://github.com/Lain-Ego0/LocoWiki', linkDoc: null },
    { key: 'opensource.item1', linkCode: 'https://github.com/Lain-Ego0/BRS-Parallel-Robot', linkDoc: null },
    { key: 'opensource.item2', linkCode: 'https://github.com/Lain-Ego0/SliverWolf-ArmRobotDog', linkDoc: null },
    { key: 'opensource.item3', linkCode: 'https://github.com/Lain-Ego0/BionicLobster-ROV', linkDoc: null },
    { key: 'opensource.item4', linkCode: 'https://github.com/Lain-Ego0/ROBOCON2024-R1', linkDoc: null },
    { key: 'opensource.item5', linkCode: 'https://github.com/Lain-Ego0/ROBOCON2024-3508DOG', linkDoc: null },
    { key: 'opensource.item6', linkCode: 'https://github.com/Lain-Ego0/HTDW4438_HIMloco', linkDoc: null },
    { key: 'opensource.item7', linkCode: 'https://github.com/Lain-Ego0/HTDW4438-OpenDog', linkDoc: null },
    { key: 'opensource.item8', linkCode: 'https://github.com/Lain-Ego0/ROBOCON2024-PPS', linkDoc: null },
  ];

  const TIMELINE_EVENTS = [
     'timeline.event10',
    'timeline.event9',
    'timeline.event8',
    'timeline.event7',
    'timeline.event6',
    'timeline.event5',
    'timeline.event4',
    'timeline.event3',
    'timeline.event2',
    'timeline.event1',
  ];

  const TECH_STACK = [
    {
      category: 'skills.hardware',
      items: [
        { name: 'Fusion 360', icon: 'fas fa-cube' },
        { name: 'SolidWorks', icon: 'fas fa-drafting-compass' },
        { name: 'LCEDA', icon: 'fas fa-pencil-ruler' },
        { name: 'KiCad', icon: 'fas fa-layer-group' },
      ],
    },
    {
      category: 'skills.embedded',
      items: [
        { name: 'MCU', icon: 'fas fa-microchip' },
        { name: 'SBC', icon: 'fas fa-server' },
        { name: 'RTOS', icon: 'fas fa-cogs' },
        { name: 'Keil MDK', icon: 'fas fa-screwdriver-wrench' },
        { name: 'STM32CubeMX', icon: 'fas fa-cubes' },
        { name: 'C/C++', icon: 'fas fa-code' },
        { name: 'Rust', icon: 'fab fa-rust' },
      ],
    },
    {
      category: 'skills.robotics',
      items: [
        { name: 'ROS/ROS2', icon: 'fas fa-robot' },
        { name: 'MuJoCo', icon: 'fas fa-cube' },
        { name: 'Isaac Gym', icon: 'fas fa-dumbbell' },
        { name: 'Isaac Sim', icon: 'fas fa-vr-cardboard' },
        { name: 'Webots', icon: 'fas fa-globe' },
      ],
    },
    {
      category: 'skills.software',
      items: [
        { name: 'Linux', icon: 'fab fa-linux' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'CMake', icon: 'fas fa-gears' },
        { name: 'conda', icon: 'fas fa-box-open' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'GitLab CI', icon: 'fab fa-gitlab' },
      ],
    },
  ];

  const CONTACT_LINKS = [
    { icon: 'fab fa-bilibili', key: 'contact.bilibili', link: 'https://space.bilibili.com/385516781/upload/video' },
    { icon: 'fab fa-github', key: 'contact.github', link: 'https://github.com/Lain-Ego0' },
    { icon: 'fab fa-twitter', key: 'contact.twitter', link: 'https://x.com/Lain_Ego0' },
    { icon: 'fab fa-zhihu', key: 'contact.zhihu', link: 'https://www.zhihu.com/people/hua-99-50-21' },
  ];

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function clear(el) {
    if (!el) return;
    el.innerHTML = '';
  }

  function t(key) {
    return window.i18n?.get ? window.i18n.get(key) : key;
  }

  function renderSpanTags(tags, className) {
    if (!Array.isArray(tags)) return '';
    return tags.map((tag) => `<span class="${className}">${tag}</span>`).join('');
  }

  function renderProjectTags(tags) {
    if (!Array.isArray(tags)) return '';
    return `<div class="project-tags">${renderSpanTags(tags, 'project-tag')}</div>`;
  }

  function initThemeToggle() {
    const toggleBtn = qs('.theme-toggle');
    const htmlEl = document.documentElement;
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      console.log(`[Theme] Switched to ${newTheme}`);
    });
  }

  function initLangToggle() {
    const toggleBtn = qs('.lang-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      const current = window.i18n.currentLang();
      const next = current === 'en' ? 'zh' : 'en';
      console.log(`[Lang] Switching to ${next}...`);
      window.i18n.changeLang(next);
    });
  }

  function initProjects() {
    const grid = qs('.projects-grid');
    if (!grid) return;
    clear(grid);

    PROJECTS.forEach((project) => {
      const tagsHtml = renderProjectTags(project.tags);

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <img src="${project.img}" alt="${t('projects.imgAlt')}" class="project-thumbnail">
        </div>
        <div class="project-info">
          <h3>${t(project.titleKey)}</h3>
          <p>${t(project.descKey)}</p>
          ${tagsHtml}
          <a href="${project.link}" class="project-link">${t('projects.viewDetail')}</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function initOpenSource() {
    const grid = qs('.opensource-grid');
    if (!grid) return;
    clear(grid);

    OPEN_SOURCE_ITEMS.forEach((item) => {
      const tags = t(`${item.key}.tags`) || [];
      const tagsHtml = renderSpanTags(tags, 'os-tag');

      let buttonsHtml = '';
      if (item.linkCode) {
        buttonsHtml += `<a href="${item.linkCode}" target="_blank" rel="noopener noreferrer" class="os-btn"><i class="fab fa-github"></i> ${t('opensource.btnCode')}</a>`;
      }
      if (item.linkDoc) {
        buttonsHtml += `<a href="${item.linkDoc}" target="_blank" rel="noopener noreferrer" class="os-btn"><i class="fas fa-book"></i> ${t('opensource.btnDoc')}</a>`;
      }

      const card = document.createElement('div');
      card.className = 'os-card';
      card.innerHTML = `
        <div class="os-header">
          <div class="os-title">${t(`${item.key}.title`)}</div>
          <i class="fas fa-code-branch" style="color:var(--primary); opacity:0.5;"></i>
        </div>
        <p class="os-desc">${t(`${item.key}.desc`)}</p>
        <div class="os-tags">${tagsHtml}</div>
        <div class="os-actions">${buttonsHtml}</div>
      `;
      grid.appendChild(card);
    });
  }

  function initTimeline() {
    const container = qs('.timeline-container');
    if (!container) return;
    clear(container);

    TIMELINE_EVENTS.forEach((key) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <span class="timeline-date">${t(`${key}.date`)}</span>
        <div class="timeline-content">
          <h3>${t(`${key}.title`)}</h3>
          <p>${t(`${key}.desc`)}</p>
        </div>
      `;
      container.appendChild(item);
    });
  }

  function initTechStack() {
    const container = qs('.skills-wrapper');
    if (!container) return;
    clear(container);

    TECH_STACK.forEach((group) => {
      const itemsHtml = group.items
        .map((s) => `<div class="skill-badge"><i class="${s.icon}"></i> ${s.name}</div>`)
        .join('');

      const col = document.createElement('div');
      col.className = 'skill-category';
      col.innerHTML = `<h3>${t(group.category)}</h3><div class="skill-list">${itemsHtml}</div>`;
      container.appendChild(col);
    });
  }

  function initContactLinks() {
    const container = qs('.intro-contact-links');
    if (!container) return;
    clear(container);

    CONTACT_LINKS.forEach((contact) => {
      const label = t(contact.key);
      const item = document.createElement('a');
      item.className = 'intro-contact-link';
      item.href = contact.link;
      item.target = '_blank';
      item.rel = 'noopener noreferrer';
      item.title = label;
      item.setAttribute('aria-label', label);
      item.innerHTML = `<i class="${contact.icon}"></i>`;
      container.appendChild(item);
    });
  }

  function initSmoothScroll() {
    qsa('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        let target;
        try {
          target = qs(href);
        } catch {
          return;
        }

        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  function initRevealMotion() {
    const targets = [
      ...qsa('.project-detail-card'),
      ...qsa('.projects-grid .card'),
      ...qsa('.opensource-grid .os-card'),
      ...qsa('.timeline-container .timeline-item'),
      ...qsa('.skills-wrapper .skill-category'),
    ];

    if (!targets.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    targets.forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${(index % 6) * 60}ms`);
    });

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initLangToggle();
    initSmoothScroll();
  });

  window.addEventListener('i18nLoaded', () => {
    console.log('[main] i18n loaded, rendering content...');
    initProjects();
    initOpenSource();
    initTimeline();
    initTechStack();
    initContactLinks();
    initRevealMotion();
  });
})();
