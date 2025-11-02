# AI Coding Agent Instructions for Snow Lynx Software Static Website

Welcome to the Snow Lynx Software static website project! This document provides essential guidelines for AI coding agents to be productive in this codebase. Follow these instructions to maintain consistency, quality, and alignment with the project's goals.

---

## 📂 Project Overview

This is a **static website** for Snow Lynx Software LLC, showcasing the company's services, portfolio, and blog. The site is built with **HTML**, **CSS**, and **JavaScript**, with no server-side code or build process. It is optimized for performance, accessibility, and SEO.

### Key Features:

- Responsive design using **Bootstrap 5**
- Semantic HTML for accessibility
- CDN-based resources for fast loading
- Blog and portfolio sections for dynamic content

---

## 🛠 Developer Workflows

### Local Development

- Open `index.html` directly in a browser for quick previews.
- For a local server, use one of the following commands:
  ```bash
  python -m http.server 8000
  ```

### Deployment

- Deployed via **GitHub Pages**.

---

## 📏 Project Conventions

### File Structure

- **HTML Files**: Each page (e.g., `about.html`, `portfolio.html`) is standalone and includes its own meta tags.
- **CSS**: All styles are in `css/style.css`. Use CSS variables for theming.
- **JavaScript**: Place all scripts in `js/main.js`. Keep it minimal and performant.
- **Blog Posts**: Located in the `blog/` directory. Each post is a separate HTML file.

### Naming Conventions

- Use lowercase, hyphen-separated filenames (e.g., `ai-integration-strategies.html`).
- Follow semantic HTML practices for structure and accessibility.

### Styling

- Use **CSS variables** for colors and spacing (defined in `:root` in `css/style.css`).
- Follow **Material Design principles** for UI components.

---

## 🔑 Key Patterns

### Adding Blog Posts

1. Create a new HTML file in the `blog/` directory.
2. Copy the structure from an existing post.
3. Update meta tags, title, and content.
4. Add the post to `blog.html`.

### Updating Portfolio

1. Edit `portfolio.html`.
2. Add new project cards using the existing pattern.
3. Include images and modal content for details.

### Navigation Updates

- Modify the `<nav>` section in all HTML files to add/remove links.

---

## 🔗 Integration Points

### External Dependencies

- **Bootstrap 5.3.2**: For responsive design and components.
- **Font Awesome 6.5.1**: For icons.
- **Google Fonts**: For typography.
- **Prism.js**: For blog code syntax highlighting.

### Analytics

- Uncomment and configure analytics scripts in `index.html` (e.g., Google Analytics, Plausible).

---

## 🚩 Common Pitfalls

- Ensure all external resources are loaded via CDN with integrity checks.
- Replace placeholder images and social media links with real content.
- Blog posts must be manually added to `blog.html`.
- Contact form requires backend integration for functionality.

---

## 📞 Support

For questions or issues, contact:

- Email: support@snowlynxsoftware.com
- GitHub Issues: Create an issue in this repository

---

By following these guidelines, you can contribute effectively to the Snow Lynx Software static website project. Thank you for your collaboration!
