# Personal Homepage / Developer Portfolio Template

[English](README.md) | [中文](README_zh.md)

A pure front-end static single-page template suitable for personal homepages, portfolios, technical profiles, or project navigation pages.
No backend and no build step are required. Download it, replace the copy and images, and it is ready to use.

> The project entries, experiences, links, and images in this repository are demo content. Replace them with your own information before publishing.

## Preview

### Homepage

![Homepage template preview](assets/images/screenshot-home.png)

### Playground

![Playground policy demo preview](assets/images/screenshot-playground.png)

## Table of Contents

- [Preview](#preview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Directory Structure](#directory-structure)
- [Core Features and Files](#core-features-and-files)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Playground](#playground)
- [Checklist](#checklist)
- [FAQ](#faq)

## Features

- **Pure static single page**: built only with HTML, CSS, and vanilla JavaScript. No Node.js, database, or server is required.
- **Data-driven rendering**: projects, articles, timeline entries, tech stack items, and contact links are configured as arrays in `assets/js/main.js` for easy maintenance.
- **Multi-language support**: English and Chinese language packs are included. Text is switched through `lang/*.json` files and `data-i18n` attributes, and more languages can be added.
- **Light / dark theme**: implemented with CSS custom properties, switchable with one click, and remembered through `localStorage`.
- **Responsive layout**: adapts to desktop, tablet, and mobile. The navigation bar reflows on narrow screens.
- **Complete content modules**:
  - Intro / Hero
  - Project cards
  - Articles or documents
  - Timeline / experience
  - Tech stack
  - Contact and social links
  - Footer
- **Scroll reveal animation**: uses `IntersectionObserver` for content fade-in and respects the system "reduce motion" preference.
- **Smooth anchor navigation**: clicking a navigation link scrolls smoothly to the matching section.
- **Icon support**: Font Awesome is loaded from a CDN for social, project, and tech-stack icons.
- **Optional Playground**: a prebuilt robot policy demo page is included as a standalone static subpage. It can simply be deleted if not needed.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Page structure | HTML5 |
| Styling | CSS3, CSS custom properties, Flexbox, Grid, media queries |
| Interaction | Vanilla JavaScript (ES6+), DOM APIs |
| Internationalization | Fetch API, JSON, `data-i18n` attributes |
| State persistence | `localStorage` |
| Animation and performance | `IntersectionObserver`, `prefers-reduced-motion` |
| Icons | Font Awesome CDN |
| Optional subpage | Prebuilt static assets, MuJoCo WASM, ONNX policy files |

## Quick Start

### 1. Get the Code

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Preview Locally

Use any static file server rather than opening `index.html` directly.
The language packs are loaded as JSON through `fetch`, so local `file://` pages may be blocked by browser security policies.

```bash
# Python 3
python3 -m http.server 8080

# or Node.js
npx serve .
```

Then open:

```text
http://localhost:8080
```

### 3. Start Customizing

Recommended order:

1. Replace the avatar and project cover images in `assets/images/`;
2. Edit the copy in `lang/zh.json` and `lang/en.json`;
3. Edit the project, article, timeline, tech-stack, and contact data in `assets/js/main.js`;
4. Adjust the theme variables in `assets/css/style.css` as needed;
5. Update the site title, description, and favicon in `index.html`.

## Directory Structure

```text
.
├── index.html                  # Single-page entry
├── README.md                   # English documentation
├── README_zh.md                # Chinese documentation
├── assets/
│   ├── css/
│   │   └── style.css           # Design tokens, themes, layout, components, responsive rules
│   ├── js/
│   │   ├── i18n.js             # Language loading, switching, and text replacement
│   │   └── main.js             # Theme toggle, content rendering, scroll animation
│   └── images/                 # Avatar, project covers, screenshots, and other images
├── lang/
│   ├── zh.json                 # Chinese language pack
│   └── en.json                 # English language pack
└── playground/                 # Optional: prebuilt robot policy demo
    ├── index.html
    ├── assets/
    ├── policies/
    └── robot/
```

## Core Features and Files

| Feature | Main Files | Description |
| --- | --- | --- |
| Theme toggle | `index.html`, `assets/js/main.js`, `assets/css/style.css` | Reads the saved theme on load; switches between `light` and `dark` and writes the choice to `localStorage`. |
| Language switch | `assets/js/i18n.js`, `lang/*.json` | Loads the current language JSON through Fetch; elements marked with `data-i18n` are replaced by the corresponding text keys. |
| Project list | `assets/js/main.js` | The `PROJECTS` array defines covers, title/description keys, tags, and action links. |
| Articles / documents | `assets/js/main.js` | The `DOCUMENTS` array defines article card content and links. |
| Timeline | `assets/js/main.js` | `TIMELINE_EVENTS` defines event order, while dates, titles, and descriptions live in the language packs. |
| Tech stack | `assets/js/main.js` | `TECH_STACK` groups skills by category and provides icons. |
| Contact links | `assets/js/main.js` | `CONTACT_LINKS` defines email, repository, social, or in-site subpage entries. |
| Scroll reveal | `assets/js/main.js`, `assets/css/style.css` | Cards, timeline items, and skill groups fade in as they enter the viewport. The effect is disabled when the system prefers reduced motion. |
| Responsive behavior | `assets/css/style.css` | Main breakpoints are `768px` and `360px`. |

## Customization Guide

### 1. Site Information

Edit `index.html`:

- `<title>`: browser tab title;
- `<meta name="description">`: search and share summary;
- `<link rel="icon">`: site icon;
- Navigation logo and anchor links;
- Static placeholder copy in each section.

> After the page loads, multilingual copy is replaced by `assets/js/i18n.js`, so the final visible text should be maintained primarily in `lang/*.json`.

### 2. Avatar and Project Images

Put images in `assets/images/`, then:

- When replacing the avatar, keep the avatar path in `index.html` correct;
- To change project images, update the `img` field of each item in the `PROJECTS` array in `assets/js/main.js`;
- Use consistent aspect ratios and compressed files to improve loading performance.

### 3. Multilingual Copy

Language packs are located at:

```text
lang/zh.json
lang/en.json
```

Common copy keys:

```text
nav.*                 Navigation
intro.*               Intro / Hero
projects.itemN.*      Nth project
documents.itemN.*     Nth article or document
timeline.eventN.*     Nth timeline event
skills.*              Tech-stack categories
contact.*             Contact links
footer.*              Footer
```

To add a language:

1. Create a language file under `lang/`, for example `lang/ja.json`;
2. Copy the full language-pack structure and translate the values;
3. Extend the language-switching logic in `assets/js/i18n.js`. The template currently toggles between English and Chinese by default; for a multi-language dropdown, adjust the `.lang-toggle` interaction accordingly.

### 4. Projects, Articles, Timeline, and Tech Stack

Open `assets/js/main.js`. The main data structures are defined at the top:

```js
const PROJECTS = [];
const DOCUMENTS = [];
const TIMELINE_EVENTS = [];
const TECH_STACK = [];
const CONTACT_LINKS = [];
```

Field reference:

| Data | Field | Description |
| --- | --- | --- |
| `PROJECTS` | `img` | Project cover path, optional |
| `PROJECTS` | `titleKey` / `descKey` | Text keys in the language packs |
| `PROJECTS` | `tags` | Project tags |
| `PROJECTS` | `links` | Related links; supports `labelKey` or a fixed `label` |
| `DOCUMENTS` | `titleKey` / `descKey` | Article card text keys |
| `DOCUMENTS` | `links` | Article or document links |
| `TIMELINE_EVENTS` | String array | Controls timeline display order |
| `TECH_STACK` | `category` / `items` | Skill categories and items |
| `CONTACT_LINKS` | `icon` / `key` / `link` | Social icon, text key, and target URL |

When adding content, make sure:

- Every `*Key` in `PROJECTS` and `DOCUMENTS` exists in both English and Chinese language packs;
- Every key in `TIMELINE_EVENTS` has `date`, `title`, and `desc` fields in the language packs;
- External links use `https://`, while in-site pages use relative paths such as `playground/`.

### 5. Theme and Styles

The `:root` and `[data-theme="dark"]` blocks at the top of `assets/css/style.css` define:

- background, text, primary, and border colors;
- shadows, radii, spacing, and transition durations;
- title gradient and decoration colors.

Changing these variables quickly updates the entire color scheme. Component styles, grid layouts, and media queries live in the same file.

### 6. Adding a New Section

To add a new section:

1. Add a `<section>` with an `id` in `index.html`;
2. Add a matching `href="#section-id"` to the navigation bar;
3. Add `data-i18n` attributes to text that needs translation;
4. Add the copy to every `lang/*.json` language pack;
5. Add the corresponding data and render function in `assets/js/main.js`, then call it after the `i18nLoaded` event.

## Deployment

### GitHub Pages

1. Create a repository and push it to GitHub;
2. Open the repository `Settings` → `Pages`;
3. Under `Build and deployment`, choose `Deploy from a branch`;
4. Select the `main` branch and the `/` root directory, then save;
5. After the deployment completes, visit the GitHub Pages URL.

### Netlify / Vercel / Cloudflare Pages

These platforms work well as static-site hosts:

- Build command: leave empty;
- Output / Publish directory: project root `/`;
- No dependencies need to be installed.

### Nginx Example

```nginx
server {
    listen 80;
    server_name example.com;

    root /path/to/your-site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Reload Nginx after changing the configuration:

```bash
nginx -s reload
```

Because the page uses relative asset paths, the template can also be deployed in a subdirectory.

## Playground

`playground/` is a standalone prebuilt static page that can serve as an "online demo" or "policy playground" entry. Its main capabilities include:

- loading robot models and ONNX policies;
- running MuJoCo WASM simulation in the browser;
- sending motion commands through virtual joysticks or the keyboard;
- viewing telemetry such as joint actions, contact state, and body position;
- creating, importing, and exporting scenes with the built-in terrain editor.

Usage:

- Deploy the entire `playground/` directory to a static server;
- Keep the `playground/` link in `CONTACT_LINKS` in `assets/js/main.js`;
- If the page is not needed, delete the `playground/` directory and remove the corresponding item from `CONTACT_LINKS` and the `contact.playground` copy from both language packs.

> Playground is a prebuilt static artifact. Changing its UI usually requires rebuilding the original source project. Replace the demo links and branding in it with your own project information.

## Checklist

Before publishing, confirm the following:

- [ ] Replace the site title, description, and favicon;
- [ ] Replace the avatar and project covers;
- [ ] Update the demo copy in both language packs;
- [ ] Update the project data in `PROJECTS`;
- [ ] Update the article data in `DOCUMENTS`;
- [ ] Update the timeline order in `TIMELINE_EVENTS` and the language packs;
- [ ] Update the skill categories and icons in `TECH_STACK`;
- [ ] Update the email, repository, and social links in `CONTACT_LINKS`;
- [ ] Adjust the CSS variables in `:root` and the dark theme;
- [ ] Check mobile navigation and card layouts;
- [ ] Decide whether to keep `playground/`;
- [ ] Deploy to GitHub Pages or another static hosting platform.

## FAQ

### The language does not switch when I open `index.html` directly

Use a local static server. `fetch` needs an HTTP environment to load `lang/*.json`.

### I changed `lang/*.json` but the page did not update

Check:

- Whether the JSON is valid;
- Whether the language keys match the `data-i18n` attributes or `*Key` values in `main.js`;
- Whether the browser cached the old file; force-refresh if needed.

### Theme selection does not persist

The theme relies on `localStorage`. Check whether local storage is disabled or the browser is in private mode.

### Images do not appear

Make sure the images are in `assets/images/`, the path casing matches, and the paths in `main.js` / `index.html` are correct.

### Playground fails to load

Check:

- The page is served over HTTP/HTTPS, not `file://`;
- The `playground/`, `assets/`, `policies/`, and `robot/` directories are complete;
- The server returns `.wasm`, `.onnx`, and other static files correctly.

### Can I use it commercially?

This is a general-purpose front-end project. Commercial use depends on the licenses of the images, fonts, icons, models, and third-party assets you use. Verify them yourself and replace any assets that do not have appropriate permission.

---

If this template is useful, extend it as needed. Replace all personal content through `lang/*.json`, `assets/js/main.js`, and `assets/images/`.
