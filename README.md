# Snow Lynx Software LLC - Static Website

A professional static website for Snow Lynx Software LLC, a software consulting company specializing in web development, cloud solutions, AI integration, and system architecture.

## 🌟 Features

- **Responsive Design**: Mobile-first approach using Bootstrap 5
- **Modern UI**: Material Design principles with clean, professional aesthetics
- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Performance Focused**: CDN-based resources, optimized images, and minimal JavaScript
- **Accessible**: ARIA labels, proper heading structure, and keyboard navigation
- **Static & Fast**: No build process required - ready to deploy anywhere

## 📁 Project Structure

```
snowlynx-site/
├── index.html              # Homepage
├── about.html              # About page
├── portfolio.html          # Portfolio/projects showcase
├── blog.html               # Blog listing page
├── contact.html            # Contact page
├── favicon.svg             # Website favicon
├── css/
│   └── style.css           # Custom styles
├── js/
│   └── main.js             # Custom JavaScript
└── blog/
    ├── modern-typescript-patterns.html
    ├── cloud-architecture-best-practices.html
    ├── ai-integration-strategies.html
    └── database-selection-guide.html
```

## 🚀 Getting Started

### Option 1: GitHub Pages (Recommended)

1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. For local server (optional):

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

### Option 3: Netlify/Vercel

1. Connect your GitHub repository
2. Set build command to: (none required)
3. Set publish directory to: `/` (root)
4. Deploy automatically on push

## 🛠 Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom styles with CSS Grid and Flexbox
- **Bootstrap 5.3.2**: Responsive framework and components
- **Font Awesome 6.5.1**: Icon library
- **Google Fonts**: Open Sans and Montserrat typography
- **Vanilla JavaScript**: Interactive features and animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## 🎨 Design System

### Colors

- **Primary Blue**: #1976d2
- **Accent Blue**: #42a5f5
- **Success Green**: #4caf50
- **Background**: #fafafa
- **Text Dark**: #212121

### Typography

- **Headers**: Montserrat (600-700 weight)
- **Body**: Open Sans (400-600 weight)
- **Code**: Fira Code (for blog code snippets)

### Components

- Cards with subtle shadows and hover effects
- Material Design buttons and forms
- Responsive navigation with smooth transitions
- Animated elements with intersection observer

## 📝 Content Management

### Adding Blog Posts

1. Create a new HTML file in the `/blog/` directory
2. Copy the structure from existing blog posts
3. Update meta tags, title, and content
4. Add the post to the blog listing page (`blog.html`)
5. Update the featured posts on the homepage if needed

### Updating Portfolio

1. Edit `portfolio.html`
2. Add new project cards following the existing pattern
3. Include project images (use Unsplash for placeholders)
4. Add modal content for project details

### Contact Information

- Update email address in `contact.html`
- Modify social media links in all footer sections
- Update business information as needed

## 🔧 Customization

### Changing Colors

Edit the CSS custom properties in `css/style.css`:

```css
:root {
  --primary-color: #1976d2;
  --primary-light: #42a5f5;
  --success-color: #4caf50;
  /* ... other colors */
}
```

### Adding Analytics

Uncomment and configure your preferred analytics solution:

- Google Analytics
- Umami (recommended for privacy)
- Plausible
- Custom tracking

### Modifying Navigation

Update the navigation in all HTML files to add/remove pages:

```html
<ul class="navbar-nav ms-auto">
  <li class="nav-item">
    <a class="nav-link" href="new-page.html">New Page</a>
  </li>
</ul>
```

## 📈 SEO Checklist

- ✅ Unique page titles and meta descriptions
- ✅ Structured data (JSON-LD)
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Image alt attributes
- ✅ Internal linking strategy
- ✅ XML sitemap (add if needed)
- ✅ Robots.txt (add if needed)

## 🔒 Security

- No server-side code or databases
- All external resources loaded via CDN with integrity checks
- No sensitive information exposed in source code
- HTTPS recommended for production deployment

## 📦 Dependencies

All dependencies are loaded via CDN:

- Bootstrap 5.3.2 (CSS + JS)
- Font Awesome 6.5.1 (CSS)
- Google Fonts (CSS)

No npm/build process required!

## 🐛 Known Issues

- Blog code syntax highlighting requires Prism.js (already included)
- Social media links are placeholders - update with real profiles
- Contact form functionality would require backend integration
- Images are placeholder URLs - replace with actual company images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers and devices
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or issues with this website template:

- Email: support@snowlynxsoftware.com
- GitHub Issues: Create an issue in this repository

---

**Snow Lynx Software LLC** - Delivering innovative and secure software solutions that scale.
