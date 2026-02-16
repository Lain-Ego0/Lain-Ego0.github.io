# Lain-Ego's Homepage
这是一个轻量化、响应式的个人主页网站，支持暗黑/亮色主题切换、多语言切换，包含项目展示、开源贡献、时间线、技术栈、联系方式等核心模块。

## 目录
- [源码构成](#源码构成)
- [环境要求](#环境要求)
- [使用指南](#使用指南)
- [目录结构详解](#目录结构详解)
- [核心功能说明](#核心功能说明)
- [自定义配置](#自定义配置)

## 源码构成
本项目为纯前端静态网站，无后端依赖，核心由 HTML 结构、CSS 样式、JavaScript 交互三部分组成，模块职责清晰：

### 1. 核心 HTML（index.html）
整个网站的骨架，包含：
- 页面元信息（编码、视口、标题）
- 主题初始化脚本（读取本地存储/系统偏好设置，设置亮色/暗黑主题）
- 导航栏（Logo、导航链接、语言切换、主题切换按钮）
- 核心板块（个人简介、项目、开源贡献、时间线、技术栈、联系方式）
- 页脚
- 外部/内部脚本/样式引入

### 2. CSS 样式（assets/css/style.css）
- 响应式布局（适配移动端/桌面端）
- 主题样式（light/dark 两套主题变量）
- 组件样式（导航栏、头像、各板块、按钮、网格布局等）
- 动效样式（头像光晕、渐变文字、背景装饰等）

### 3. JavaScript 交互
#### (1) 国际化（assets/js/i18n.js）
- 实现多语言切换（如示例中的中文/英文）
- 基于 `data-i18n` 属性匹配语言文案，替换页面文本

#### (2) 核心交互（assets/js/main.js）
- 主题切换（切换 `data-theme` 属性，同步 localStorage）
- 动态渲染内容（项目列表、开源贡献、时间线、技能、联系方式等）
- 导航交互、响应式适配等辅助逻辑

### 4. 静态资源
- `assets/images/`：头像（Avatar.jpg）等图片资源
- 第三方依赖：Font Awesome 图标库（CDN 引入）

## 环境要求
无需复杂环境，满足以下任一条件即可运行：
- 现代浏览器（Chrome/Firefox/Safari/Edge 最新版）
- 静态文件服务器（如 Nginx、Live Server 插件、Python SimpleHTTPServer）
- GitHub Pages/Gitee Pages 等静态页面托管平台

## 使用指南
### 1. 源码拉取
```bash
# 克隆仓库
git clone https://github.com/Lain-Ego0/Lain-Ego0.github.io.git
cd Lain-Ego0.github.io
```

### 2. 本地运行
#### 方式1：直接打开（简单测试）
双击 `index.html` 文件，通过浏览器直接打开（部分交互可能因跨域/本地路径问题受限）。

#### 方式2：静态服务器运行（推荐）
```bash
# 方法1：使用 Python 3 启动简易服务器
python -m http.server 8080

# 方法2：使用 Node.js http-server（需先安装：npm install -g http-server）
http-server -p 8080

# 方法3：VS Code 安装 Live Server 插件，右键 index.html → "Open with Live Server"
```
访问地址：`http://localhost:8080`

### 3. 部署上线
#### 方式1：GitHub Pages（推荐）
1. 将代码推送到 GitHub 仓库（仓库名：`[用户名].github.io`）；
2. 进入仓库 → Settings → Pages → 选择 `main` 分支 → 保存；
3. 等待几分钟后，访问 `https://[用户名].github.io` 即可。

#### 方式2：自定义服务器（Nginx）
1. 将源码上传到服务器；
2. 配置 Nginx 指向源码目录：
```nginx
server {
    listen 80;
    server_name your-domain.com; # 替换为你的域名
    root /path/to/Lain-Ego0.github.io; # 替换为源码路径
    index index.html;

    # 支持 SPA 路由（如需）
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
3. 重启 Nginx：`nginx -s reload`。

## 目录结构详解
```
Lain-Ego0.github.io/
├── index.html               # 核心HTML页面（网站入口）
├── assets/                  # 静态资源目录
│   ├── css/                 # 样式目录
│   │   └── style.css        # 全局样式（含主题、布局、组件样式）
│   ├── js/                  # 脚本目录
│   │   ├── i18n.js          # 多语言切换逻辑
│   │   └── main.js          # 核心交互（主题切换、内容渲染等）
│   └── images/              # 图片目录
│       └── Avatar.jpg       # 个人头像
└── README.md                # 项目说明
```

## 核心功能说明
### 1. 主题切换
- 初始化：读取 localStorage 中的主题偏好，无则匹配系统深色/亮色模式；
- 切换逻辑：点击导航栏「月亮/太阳」图标，切换 `data-theme` 为 `dark/light`，并同步到 localStorage。

### 2. 多语言切换
- 点击导航栏「中文/English」按钮，通过 `i18n.js` 替换所有带 `data-i18n` 属性的元素文本；
- 需在 `i18n.js` 中配置对应语言的文案映射。

### 3. 核心板块
- 「Intro」：个人简介（头像、标题、描述）；
- 「Projects」：项目展示（动态渲染，需在 `main.js` 中配置项目数据）；
- 「Open Source」：开源贡献（动态渲染）；
- 「Timeline」：时间线（经历/里程碑）；
- 「Skills」：技术栈展示；
- 「Contact」：联系方式（社交链接等）。

## 自定义配置
### 1. 修改个人信息
- 头像：替换 `assets/images/Avatar.jpg`；
- 页面标题/简介：修改 `index.html` 中 `title`、`intro.title`、`intro.desc` 等 `data-i18n` 对应的文案（需同步修改 `i18n.js` 中的语言包）；
- 页脚版权：修改 `index.html` 中 footer 的 `data-i18n` 文案。

### 2. 新增/修改板块内容
- 项目/开源/时间线/技能/联系方式：在 `main.js` 中找到对应的数据数组，修改/新增条目即可。

### 3. 自定义主题
- 修改 `assets/css/style.css` 中的 `:root`（light 主题）和 `[data-theme="dark"]`（dark 主题）下的 CSS 变量（如颜色、字体、间距等）。

### 4. 新增语言
- 在 `i18n.js` 中新增语言包对象（如 `fr` 法语）；
- 在语言切换按钮中新增对应选项，并绑定切换逻辑。
---