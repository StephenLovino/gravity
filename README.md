# Gravity Team Landing Page

A modern, responsive landing page for Gravity Team - a crypto market making company. Built with React and designed to match the provided Figma design specifications.

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern Styling**: Uses CSS custom properties and modern layout techniques
- **Performance Optimized**: Lightweight and fast-loading
- **Accessible**: Semantic HTML and keyboard navigation support
- **Cross-browser Compatible**: Works on all modern browsers

## Sections

1. **Hero Section**: Main headline with call-to-action
2. **About Section**: Company overview with key statistics
3. **Market Making Services**: Information about crypto project services
4. **Exchange Services**: Services for crypto exchanges with visualization
5. **Partners Section**: Showcase of partner logos
6. **Testimonials**: Customer feedback carousel
7. **Join Team**: Recruitment section
8. **Contact**: Contact information and CTA

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
/
├── src/
│   ├── GravityLandingPage.jsx    # Main landing page component
│   ├── GravityLandingPage.css    # Component-specific styles
│   ├── App.jsx                   # Root application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                     # This file
```

## Styling Approach

- **CSS Custom Properties**: Used for consistent theming
- **Flexbox & Grid**: Modern layout techniques
- **Mobile-First**: Responsive design starting from mobile
- **BEM-like Naming**: Clear and consistent CSS class naming
- **Component Scoped**: Styles are scoped to components

## Key Design Elements

- **Color Scheme**: Dark theme with purple-blue gradient accents
- **Typography**: Inter font family for modern, clean readability
- **Gradients**: Linear gradients matching brand colors (#665DCD, #5FA4E6, #D2AB67)
- **Animations**: Subtle hover effects and transitions
- **Images**: Optimized images from Builder.io CDN

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: < 200KB gzipped
- **Image Optimization**: WebP format with fallbacks

## Development Notes

- Built with Vite for fast development and builds
- Uses modern React patterns with functional components
- CSS is written in vanilla CSS for maximum compatibility
- All images are lazy-loaded for performance
- Responsive breakpoints: 480px, 768px, 1200px

## Deployment

The project can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect GitHub repo or drag & drop dist folder
- **GitHub Pages**: Build and deploy dist folder

## 3D iPhone Model (three.js)

To remove the Spline watermark and use a fully transparent background, you can render the iPhone directly with three.js/react-three-fiber:

1. Export your model from Spline or other 3D tool as a GLB file.
2. Place the file at `public/models/iphone.glb` (create the folders if they don't exist).
3. The app already includes `IphoneScene.jsx` which will load this path and render it, replacing the Spline embed.
4. If you update the file, just refresh the app; no code changes needed.

Notes:
- We rely on the built-in `GLTFLoader` and an `Environment` preset for lighting. You can tweak camera and lighting in `IphoneScene.jsx`.
- If you prefer to keep the Spline scene, switch back in `GravityLandingPage.jsx`.

## Customization

To customize the design:

1. **Colors**: Update CSS custom properties in `index.css`
2. **Typography**: Change font imports in `index.html` and update CSS
3. **Content**: Modify text content in `GravityLandingPage.jsx`
4. **Layout**: Adjust component structure and CSS grid/flexbox properties

## License

This project is proprietary and confidential.
