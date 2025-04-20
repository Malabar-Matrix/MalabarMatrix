---
title: "Building a Personal Blog with Astro"
summary: "A step-by-step guide to creating a personal blog using the Astro framework."
date: "Apr 20 2025"
draft: false
tags:
- Tutorial
- Astro
- Blog
---

In this blog, we'll walk through the process of setting up a personal blog using the **Astro** framework. We’ll focus on the basic setup, structure, and some useful configurations that you can use to get your blog up and running.

### Project File Structure

Here’s an overview of the basic directory structure of the project:

```js
/
├── public/ // Files publicly available to the browser
│   ├── fonts/ // Custom fonts for the blog
│   │   └── custom-font.woff  // Default font for body text
│   ├── js/ // Javascript files that will be imported into <head>
│   │   └── main.js // General page functionality
│   │   └── theme.js // Toggle dark/light theme
│   └── images/ // Image assets for the blog
│   │   └── header.jpg // Banner image for the homepage
│   └── favicon.ico // The icon for the browser tab
├── src/ // The source code for the website
│   ├── components/ // Reusable components like header and footer
│   ├── content/ // Contains static markdown files for content
│   │   └── blog/ // Folder containing all blog posts
│   │   └── about.md // About page markdown
│   │   └── contact.md // Contact page markdown
│   ├── layouts/ // Reusable layout templates
│   └── pages/ // Pages for the website
│   │   └── index.astro // Homepage layout
│   │   └── blog.astro // Blog page layout
│   ├── styles/ // Tailwind and custom CSS
│   ├── lib/ // Helper functions for common tasks
│   ├── consts.ts // Configuration constants (e.g., site title, metadata)
│   └── types.ts // TypeScript types for the application
└── .gitignore // Git ignore file for ignoring build files and node_modules
└── eslintrc.cjs // ESLint configuration for code linting
└── astro.config.mjs // Configuration for the Astro build system
└── tailwind.config.mjs // Configuration for Tailwind CSS
└── tsconfig.json // TypeScript configuration for the project
└── package.json // Project dependencies and scripts
```