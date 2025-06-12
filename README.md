# Technum Opus Website

A modern, responsive React website built with cutting-edge technologies and best practices.

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Your app will be available at http://localhost:8080

## 🛠️ Technology Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **TailwindCSS** for styling
- **Radix UI** components for accessibility
- **Framer Motion** for animations
- **Lucide React** for icons

### Development Tools

- **TypeScript** for type safety
- **ESLint & Prettier** for code quality
- **Vitest** for testing

## 📁 Project Structure

```
technum-opus/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (buttons, inputs, etc.)
│   │   └── ...           # Feature-specific components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and configurations
│   └── ...
├── public/               # Static assets
├── tailwind.config.ts    # TailwindCSS configuration
├── vite.config.ts        # Vite configuration
└── package.json
```

## 🚀 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run typecheck` - Type checking
- `npm run format.fix` - Fix code formatting

## 🎨 Design System

The project uses a comprehensive design system with:

- **Custom Color Palette**: Based on Accenture's brand colors
- **Typography Scale**: Responsive typography with proper hierarchy
- **Component Library**: Pre-built accessible components
- **Animation System**: Smooth, performant animations

### Key Design Features

- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark Mode Support**: Built-in theme switching
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized animations and lazy loading

## 📱 Features

### User Interface

- **Modern Navigation**: Responsive navigation with dropdown menus
- **Hero Section**: Eye-catching landing area with animations
- **Service Pages**: Detailed service offerings
- **Company Information**: About, Leadership, and Values pages
- **Partner Showcase**: Technology and industry partner pages
- **Contact Forms**: Functional contact and newsletter signup
- **Search Functionality**: Site-wide search with keyboard shortcuts

### Technical Features

- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular, reusable components
- **State Management**: React hooks and context for state
- **Performance**: Code splitting and optimization
- **SEO Ready**: Proper meta tags and semantic HTML

## 🎯 Demo Features

Since this is a frontend-only project, certain features operate in demo mode:

- **Newsletter Subscription**: Shows success messages but doesn't store data
- **Contact Forms**: Display confirmation but don't send emails
- **Search**: Works with pre-defined content

## 🚀 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. **Clone and install:**

   ```bash
   git clone <your-repo>
   cd technum-opus
   npm install
   ```

2. **Start development:**

   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

### Code Quality

The project includes comprehensive tooling for code quality:

```bash
# Type checking
npm run typecheck

# Formatting
npm run format.fix

# Testing
npm run test
```

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
```

Creates an optimized build in the `dist/` directory.

### Deployment Options

This is a static React application that can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

### Environment Variables

Create a `.env` file for environment-specific settings:

```bash
# Development mode flag
VITE_DEV_MODE=true

# Other custom environment variables
VITE_SITE_URL=https://technumopus.com
```

## 📦 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Create production build
- `npm run test` - Run test suite
- `npm run typecheck` - Validate TypeScript types
- `npm run format.fix` - Auto-fix code formatting

## 🔧 Customization

### Styling

- Modify `tailwind.config.ts` for design system changes
- Update CSS custom properties in `src/index.css`
- Component styles use TailwindCSS classes

### Content

- Page content is in `src/pages/` directory
- Update navigation in `src/components/Navigation.tsx`
- Modify footer content in `src/components/Footer.tsx`

## 🐛 Troubleshooting

### Common Issues

1. **Build errors**: Run `npm run typecheck` to catch TypeScript issues
2. **Styling issues**: Check TailwindCSS classes and configuration
3. **Performance**: Use React DevTools Profiler to identify bottlenecks

### Development Tips

- Use the TypeScript compiler for real-time error checking
- Leverage the component library for consistent UI
- Follow the established patterns for new components

## 📄 License

This project is proprietary software for Technum Opus.

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Ensure TypeScript types are properly defined
3. Test components thoroughly before submitting
4. Update documentation as needed

---

Built with ❤️ using React, TypeScript, and modern web technologies.
