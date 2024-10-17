# Morningstar Developments Repository Structure

Version: 0.0.3

```bash
morningstar-developments/
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
├── tailwind.config.ts
├── tsconfig.json
├── _posts/
│   ├── hello-world.md
│   ├── preview.md
│   └── the-hard-problem-of-consciousness.md
├── docs/
│   └── repository_structure_v0.0.3.md (this file)
├── public/
│   ├── assets/
│   │   └── blog/
│   │       ├── authors/
│   │       │   ├── jj.jpeg
│   │       │   ├── joe.jpeg
│   │       │   └── tim.jpeg
│   │       ├── dynamic-routing/
│   │       │   └── cover.jpg
│   │       ├── hello-world/
│   │       │   └── cover.jpg
│   │       └── preview/
│   │           └── cover.jpg
│   └── favicon/
│       ├── android-chrome-192x192.png
│       ├── android-chrome-512x512.png
│       ├── apple-touch-icon.png
│       ├── browserconfig.xml
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── favicon.ico
│       ├── mstile-150x150.png
│       ├── safari-pinned-tab.svg
│       └── site.webmanifest
└── src/
    ├── app/
    │   ├── _components/
    │   │   ├── alert.tsx
    │   │   ├── avatar.tsx
    │   │   ├── container.tsx
    │   │   ├── cover-image.tsx
    │   │   ├── date-formatter.tsx
    │   │   ├── footer.tsx
    │   │   ├── header.tsx
    │   │   ├── hero-post.tsx
    │   │   ├── intro.tsx
    │   │   ├── markdown-styles.module.css
    │   │   ├── more-stories.tsx
    │   │   ├── post-body.tsx
    │   │   ├── post-header.tsx
    │   │   ├── post-preview.tsx
    │   │   ├── post-title.tsx
    │   │   ├── section-separator.tsx
    │   │   ├── switch.module.css
    │   │   ├── theme-provider.tsx
    │   │   └── theme-switcher.tsx
    │   ├── fonts/
    │   │   ├── GeistMonoVF.woff
    │   │   └── GeistVF.woff
    │   ├── interfaces/
    │   │   ├── author.ts
    │   │   └── post.ts
    │   ├── posts/
    │   │   └── [slug]/
    │   │       └── page.tsx
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   └── footer.tsx
    ├── interfaces/
    │   ├── author.ts
    │   └── post.ts
    ├── lib/
    │   ├── api.ts
    │   ├── constants.ts
    │   ├── markdownToHtml.ts
    │   └── utils.ts
    └── styles/
        └── index.css
```

This document provides an overview of the repository structure for the Morningstar Developments project. The structure reflects a Next.js application with TypeScript support, utilizing various modern web development tools and practices.

Key components of the repository:

1. Root configuration files: Various configuration files for ESLint, Next.js, PostCSS, Tailwind CSS, and TypeScript.
2. _posts: Contains Markdown files for blog posts.
3. docs: Documentation folder (including this file).
4. public: Static assets including images and favicons.
5. src: Source code for the application.
   - app: Next.js 13+ app directory structure.
   - components: Reusable React components.
   - interfaces: TypeScript interfaces for data structures.
   - lib: Utility functions and API handlers.
   - styles: CSS styles for the application.

This structure supports a modern, component-based web application with server-side rendering capabilities, static site generation, and a blog feature.
