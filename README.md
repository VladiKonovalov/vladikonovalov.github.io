# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features dark/light mode, smooth scrolling navigation, lazy loading, and optimized for GitHub Pages deployment.

## Features

- 🎨 **Dark/Light Mode** - Toggle between themes with persistent preference
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Lazy loading for images and sections
- 🎯 **SEO Optimized** - Meta tags, OpenGraph, and Twitter Card support
- 🎭 **Smooth Animations** - Subtle transitions and hover effects
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🚀 **GitHub Pages Ready** - Pre-configured for easy deployment

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **gh-pages** - GitHub Pages deployment

## Project Structure

```
Portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillCategory.jsx
│   │   └── ExperienceItem.jsx
│   ├── sections/         # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/            # Custom React hooks
│   │   └── useTheme.js
│   ├── data/             # JSON data files
│   │   ├── projects.json
│   │   └── profile.json
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Updating Your Profile

Edit `src/data/profile.json` to update your personal information:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "summary": "Your brief summary",
  "email": "your.email@example.com",
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  },
  "about": "Your detailed about text",
  "skills": {
    "Frontend": ["React", "Vue", "TypeScript"],
    "Backend": ["Node.js", "Python"]
  },
  "experience": [
    {
      "company": "Company Name",
      "role": "Job Title",
      "period": "2020 - Present",
      "description": "Job description"
    }
  ]
}
```

### Adding Projects

Edit `src/data/projects.json` to add or modify projects:

```json
[
  {
    "title": "Project Name",
    "description": "Project description",
    "liveUrl": "https://project-url.com",
    "repoUrl": "https://github.com/username/repo",
    "image": "/images/project-image.jpg",
    "technologies": ["React", "Tailwind CSS"]
  }
]
```

**Note:** Place project images in the `public/images/` directory and reference them as `/images/filename.jpg`.

### Updating SEO Meta Tags

Edit `index.html` to update SEO meta tags:

```html
<meta name="description" content="Your portfolio description" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your portfolio description" />
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Deployment to GitHub Pages

### Initial Setup

1. **Base path is configured** in `vite.config.js` for root deployment (`base: '/'`)

2. **Update SEO meta tags** in `index.html` with your actual URLs

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

### GitHub Repository Settings

1. Go to your repository on GitHub (`vladikonovalov.github.io`)
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select the `gh-pages` branch
4. Click **Save**

Your site will be available at `https://vladikonovalov.github.io/`

### Updating Your Site

After making changes:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. Rebuild and redeploy:
   ```bash
   npm run build
   npm run deploy
   ```

## Customization Guide

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Adding Sections

1. Create a new component in `src/sections/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Modifying Styles

- Global styles: `src/index.css`
- Component styles: Use Tailwind classes directly in components
- Custom utilities: Add to `tailwind.config.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/Portfolio/issues).

## Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)
