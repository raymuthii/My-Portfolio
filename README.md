# Modern Portfolio Website

A sleek, modern portfolio website with a black background theme, interactive features, and full responsiveness.

## 🌟 Features

### Design
- **Black Background Theme**: Professional dark design with customizable CSS variables
- **Gradient Text Effects**: Eye-catching hero title with gradient styling
- **Smooth Animations**: Subtle transitions and scroll-based animations
- **Glass Morphism**: Modern card designs with translucent effects
- **Responsive Layout**: Mobile-first design that works on all devices

### Sections
- **Hero**: Welcome section with tagline and call-to-action
- **Projects**: Filterable project gallery with modal details
- **About**: Personal introduction and background
- **Skills**: Categorized skill showcase (Frontend, Backend, Tools)
- **Contact**: Interactive contact form
- **Footer**: Social links and copyright

### Interactive Features
- ✅ Responsive mobile navigation with hamburger menu
- ✅ Project filtering by category (All, Web, Mobile, Design)
- ✅ Modal/lightbox for detailed project information
- ✅ Smooth scrolling to sections
- ✅ Active navigation highlighting on scroll
- ✅ Form validation with success/error messaging
- ✅ Keyboard navigation support
- ✅ Lazy-loading images

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raymuthii/My-Portfolio.git
cd My-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
  --bg: #000000;           /* Background color */
  --accent: #ff6b6b;       /* Accent color (buttons, links) */
  --text: #e6e6e6;         /* Primary text color */
  --text-secondary: #b3b3b3; /* Secondary text color */
  --card-bg: #0f0f10;      /* Card background */
}
```

### Content

#### Personal Information
Edit `index.html` to update:
- Name in the logo and navigation
- Hero title and tagline
- About section bio
- Skills lists
- Footer social links

#### Projects
Update the project cards in `index.html` and the project details in `js/app.js`:

```javascript
const projectDetails = {
  'project-1': {
    title: 'Your Project',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    features: ['Feature 1', 'Feature 2'],
    image: 'img/your-project.png'
  }
};
```

#### Images
Replace placeholder images in the `img/` folder:
- `avatar-placeholder.png` - Your profile photo (400x400px recommended)
- `placeholder-project.png` - Project screenshots (800x450px recommended)

### Contact Form
The contact form currently shows a demo message. To integrate with a backend:

1. Update the form handler in `js/app.js`
2. Connect to services like:
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - Your own backend API

Example with Formspree:
```javascript
try {
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  // Show success message
} catch (error) {
  // Show error message
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Single column layout, hamburger menu
- **Tablet**: 768px - 1200px - Adaptive grid layouts
- **Desktop**: > 1200px - Full multi-column layouts

## ♿ Accessibility

This portfolio is built with accessibility in mind:
- Semantic HTML5 elements
- ARIA attributes for interactive components
- Keyboard navigation support
- High contrast ratios for text
- Focus indicators for interactive elements
- Screen reader friendly structure

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive features
- **Webpack** - Module bundling and build process

## 📄 File Structure

```
My-Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styles with theme variables
├── js/
│   └── app.js          # Interactive functionality
├── img/
│   ├── avatar-placeholder.png
│   └── placeholder-project.png
├── package.json        # Dependencies
└── webpack configs     # Build configuration
```

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Select the branch containing your built files

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Import your GitHub repository
2. Vercel auto-detects settings
3. Deploy with one click

## 📝 License

This project is licensed under the MIT License - see the LICENSE.txt file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**
- GitHub: [@raymuthii](https://github.com/raymuthii)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Made with ❤️ and modern web technologies
