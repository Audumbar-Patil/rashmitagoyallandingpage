# React SPA Event Landing Page

A modern, responsive event landing page built with React, TypeScript, and Tailwind CSS. This is a static single-page application (SPA) converted from a Next.js project.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast loading with Vite bundler
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Mobile-first responsive design
- 🎪 Material Tailwind components
- 🖼️ Optimized images and assets

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── about-card.tsx
│   ├── event-content-card.tsx
│   ├── fixed-plugin.tsx
│   ├── footer.tsx
│   ├── layout.tsx
│   ├── navbar.tsx
│   └── stats-card.tsx
├── sections/           # Page sections
│   ├── about-event.tsx
│   ├── event-content.tsx
│   ├── faq.tsx
│   ├── hero.tsx
│   ├── our-stats.tsx
│   └── sponsored-by.tsx
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Material Tailwind** - React components
- **Heroicons** - Icon library

## Customization

The website is fully customizable through:

- **Colors**: Modify Tailwind classes in components
- **Content**: Update text and images in section components
- **Layout**: Adjust component structure in `App.tsx`
- **Styling**: Customize styles in `index.css` or component files

## License

This project is licensed under the Creative Tim license. See the LICENSE file for details.

## Credits

- Design by [Creative Tim](https://www.creative-tim.com)
- Built with [Material Tailwind](https://www.material-tailwind.com)