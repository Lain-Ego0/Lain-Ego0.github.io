(() => {
  const PROJECT_TAG_LIBRARY = {
    ROBOTICS: 'Robotics',
    EMBEDDED: 'Embedded Systems',
    REINFORCEMENT_LEARNING: 'Reinforcement Learning',
    SIM2REAL: 'Sim-to-Real',
    DEPLOYMENT: 'Deployment',
    FREERTOS: 'FreeRTOS',
    MOTION_CONTROL: 'Motion Control',
    MOTOR_CONTROL: 'Motor Control',
    SLAM: 'SLAM',
    LIDAR: 'LiDAR',
    MECHANICAL_DESIGN: 'Mechanical Design',
    UNDERWATER_ROBOTICS: 'Underwater Robotics',
    VECTOR_PROPULSION: 'Vectored Propulsion',
    WATERPROOF_ENGINEERING: 'Waterproof Engineering',
    AGRICULTURAL_ROBOTICS: 'Agricultural Robotics',
    MULTI_ROBOT_COLLABORATION: 'Multi-Robot Collaboration',
    WIKI: 'Wiki',
    KNOWLEDGE_BASE: 'Knowledge Base',
    OPEN_SOURCE: 'Open Source',
    STM32: 'STM32',
    STM32F103: 'STM32F103',
    VOICE_CONTROL: 'Voice Control',
    IMU: 'IMU',
    LD3320: 'LD3320',
    ROBOTIC_ARM: 'Robotic Arm',
    DJI: 'DJI',
    M3508: 'M3508',
    PID: 'PID',
    SENSOR_FUSION: 'Sensor Fusion',
    LEGGED_ROBOT: 'Legged Robot',
    ROBOCON: 'ROBOCON',
    ROBOT_CONTROL: 'Robot Control',
    COMPETITION: 'Competition',
    RS485: 'RS485',
    ABSOLUTE_ENCODER: 'Absolute Encoder',
    POSITIONING: 'Positioning',
    TYPST: 'Typst',
    RESUME: 'Resume',
    TEMPLATE: 'Template',
    PDF: 'PDF',
  };

  const PROJECTS = [
    {
      img: 'assets/images/locowiki-cover.png',
      titleKey: 'projects.item1.title',
      descKey: 'projects.item1.desc',
      tags: [
        PROJECT_TAG_LIBRARY.WIKI,
        PROJECT_TAG_LIBRARY.KNOWLEDGE_BASE,
        PROJECT_TAG_LIBRARY.ROBOTICS,
        PROJECT_TAG_LIBRARY.OPEN_SOURCE,
      ],
      links: [
        { href: 'https://github.com/Lain-Ego0/LocoWiki', labelKey: 'projects.links.code', icon: 'fab fa-github' },
        { href: 'https://locowiki.github.io/', labelKey: 'projects.links.website', icon: 'fas fa-globe' },
        { href: 'https://lain-database.feishu.cn/wiki/HwyJwB70niKbW7khmwlcbCH2nXb', labelKey: 'projects.links.feishu', icon: 'fas fa-book' },
      ],
    },
    {
      img: 'assets/images/opendog-cover.png',
      titleKey: 'projects.item2.title',
      descKey: 'projects.item2.desc',
      tags: [
        PROJECT_TAG_LIBRARY.ROBOTICS,
        PROJECT_TAG_LIBRARY.REINFORCEMENT_LEARNING,
        PROJECT_TAG_LIBRARY.SIM2REAL,
        PROJECT_TAG_LIBRARY.DEPLOYMENT,
      ],
      links: [
        { href: 'https://github.com/Lain-Ego0/HTDW4438-OpenDog', label: 'OpenDog', icon: 'fab fa-github' },
        { href: 'https://github.com/Lain-Ego0/HTDW4438-AMP', label: 'AMP', icon: 'fab fa-github' },
        { href: 'https://github.com/Lain-Ego0/HTDW4438_HIMloco', label: 'HIMloco', icon: 'fab fa-github' },
        { href: 'https://github.com/Lain-Ego0/HTDW4438_Isaacgym', label: 'Isaac Gym', icon: 'fab fa-github' },
      ],
    },
    {
      img: 'assets/images/robocon-cover.png',
      titleKey: 'projects.item3.title',
      descKey: 'projects.item3.desc',
      tags: [
        PROJECT_TAG_LIBRARY.ROBOTICS,
        PROJECT_TAG_LIBRARY.MOTION_CONTROL,
        PROJECT_TAG_LIBRARY.SLAM,
        PROJECT_TAG_LIBRARY.LIDAR,
        PROJECT_TAG_LIBRARY.MECHANICAL_DESIGN,
      ],
      links: [
        { href: 'https://github.com/Lain-Ego0/BRS-Parallel-Robot', labelKey: 'projects.links.code', icon: 'fab fa-github' },
        { href: 'https://lain-database.feishu.cn/wiki/MUtjwx2FzixM65kKYhlcxcxdnqg', labelKey: 'projects.links.docs', icon: 'fas fa-book' },
        { href: 'https://www.bilibili.com/video/BV15wu4zuEmf', labelKey: 'projects.links.demo', icon: 'fab fa-bilibili' },
      ],
    },
    {
      img: 'assets/images/lobster-cover.png',
      titleKey: 'projects.item4.title',
      descKey: 'projects.item4.desc',
      tags: [
        PROJECT_TAG_LIBRARY.UNDERWATER_ROBOTICS,
        PROJECT_TAG_LIBRARY.EMBEDDED,
        PROJECT_TAG_LIBRARY.VECTOR_PROPULSION,
        PROJECT_TAG_LIBRARY.WATERPROOF_ENGINEERING,
      ],
      links: [
        { href: 'https://github.com/Lain-Ego0/BionicLobster-ROV', labelKey: 'projects.links.firmware', icon: 'fab fa-github' },
        { href: 'https://github.com/iowqi/ShrimpROV', labelKey: 'projects.links.mechanical', icon: 'fab fa-github' },
        { href: 'https://github.com/zhizhizzzzzzz/OceanSphere', labelKey: 'projects.links.vision', icon: 'fab fa-github' },
      ],
    },
    {
      img: 'assets/images/agri-cover.png',
      titleKey: 'projects.item5.title',
      descKey: 'projects.item5.desc',
      tags: [
        PROJECT_TAG_LIBRARY.AGRICULTURAL_ROBOTICS,
        PROJECT_TAG_LIBRARY.FREERTOS,
        PROJECT_TAG_LIBRARY.MOTOR_CONTROL,
        PROJECT_TAG_LIBRARY.MULTI_ROBOT_COLLABORATION,
      ],
      links: [
        { href: 'https://github.com/Lain-Ego0/ROBOCON2024-R1', labelKey: 'projects.links.code', icon: 'fab fa-github' },
        { href: 'https://www.bilibili.com/video/BV1VH4y1A7aM/?spm_id_from=333.337.search-card.all.click&vd_source=193a56b6f00b33090010ba20d05cfef7', labelKey: 'projects.links.demo', icon: 'fab fa-bilibili' },
      ],
    },
    {
      img: 'assets/images/3508dog-cover.jpg',
      titleKey: 'projects.item7.title',
      descKey: 'projects.item7.desc',
      tags: [
        PROJECT_TAG_LIBRARY.M3508,
        PROJECT_TAG_LIBRARY.MOTOR_CONTROL,
        PROJECT_TAG_LIBRARY.PID,
        PROJECT_TAG_LIBRARY.SENSOR_FUSION,
        PROJECT_TAG_LIBRARY.LEGGED_ROBOT,
      ],
      links: [
        { href: 'https://github.com/Lain-Ego0/ROBOCON2024-3508DOG', labelKey: 'projects.links.code', icon: 'fab fa-github' },
      ],
    },
    {
      titleKey: 'projects.item9.title',
      descKey: 'projects.item9.desc',
      tags: [
        PROJECT_TAG_LIBRARY.TYPST,
        PROJECT_TAG_LIBRARY.RESUME,
        PROJECT_TAG_LIBRARY.TEMPLATE,
        PROJECT_TAG_LIBRARY.PDF,
      ],
      links: [
        { href: 'https://github.com/Lain-Ego0/Typst-resume', labelKey: 'projects.links.code', icon: 'fab fa-github' },
      ],
    },
    {
      titleKey: 'projects.item6.title',
      descKey: 'projects.item6.desc',
      tags: [
        PROJECT_TAG_LIBRARY.STM32F103,
        PROJECT_TAG_LIBRARY.VOICE_CONTROL,
        PROJECT_TAG_LIBRARY.IMU,
        PROJECT_TAG_LIBRARY.LD3320,
        PROJECT_TAG_LIBRARY.ROBOTIC_ARM,
      ],
      links: [
        { href: 'https://github.com/Lain-Ego0/SliverWolf-ArmRobotDog', labelKey: 'projects.links.code', icon: 'fab fa-github' },
      ],
    },
    {
      titleKey: 'projects.item8.title',
      descKey: 'projects.item8.desc',
      tags: [
        PROJECT_TAG_LIBRARY.STM32F103,
        PROJECT_TAG_LIBRARY.POSITIONING,
        PROJECT_TAG_LIBRARY.RS485,
        PROJECT_TAG_LIBRARY.ABSOLUTE_ENCODER,
        PROJECT_TAG_LIBRARY.IMU,
      ],
      links: [
        { href: 'https://github.com/Lain-Ego0/ROBOCON2024-PPS', labelKey: 'projects.links.code', icon: 'fab fa-github' },
      ],
    },
  ];

  const TIMELINE_EVENTS = [
    'timeline.event11',
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

  function renderProjectActions(links) {
    if (!Array.isArray(links) || links.length === 0) return '';

    const items = links
      .filter((link) => link.href)
      .map((link) => {
        const label = link.labelKey ? t(link.labelKey) : link.label;
        const icon = link.icon || 'fas fa-arrow-up-right-from-square';

        return `
          <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="project-action" aria-label="${label}">
            <i class="${icon}"></i>
            <span>${label}</span>
          </a>
        `;
      })
      .join('');

    return items ? `<div class="project-actions">${items}</div>` : '';
  }

  function initThemeToggle() {
    const toggleBtn = qs('.theme-toggle');
    const htmlEl = document.documentElement;
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('theme') || htmlEl.getAttribute('data-theme') || 'light';
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
      const actionsHtml = renderProjectActions(project.links);
      const hasThumbnail = Boolean(project.img);
      const thumbnailHtml = project.img
        ? `
        <div class="project-thumbnail-wrapper">
          <img src="${project.img}" alt="${t('projects.imgAlt')}" class="project-thumbnail">
        </div>
      `
        : '';
      const metaHtml = hasThumbnail
        ? `${tagsHtml}${actionsHtml}`
        : `<div class="project-meta-row">${tagsHtml}${actionsHtml}</div>`;

      const card = document.createElement('div');
      card.className = hasThumbnail ? 'card project-card' : 'card project-card project-card--text-only';
      card.innerHTML = `
        ${thumbnailHtml}
        <div class="project-info">
          <h3>${t(project.titleKey)}</h3>
          <p>${t(project.descKey)}</p>
          ${metaHtml}
        </div>
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
      ...qsa('.projects-grid .card'),
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
    initTimeline();
    initTechStack();
    initContactLinks();
    initRevealMotion();
  });
})();
