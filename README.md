# Bluetick Academy Website

A modern, performance-optimized Next.js website for Bluetick Academy's Enterprise AI Engineering Program. Built with React 19, Next.js 15, and Tailwind CSS, featuring advanced animations, responsive design, and optimized performance.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15.2.2, React 19, and TypeScript
- **Performance Optimized**: Component memoization, lazy loading, and code splitting
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Rich Animations**: Framer Motion animations with optimized rendering
- **Form Integration**: Multi-type forms with Zoho CRM integration
- **SEO Optimized**: Hidden SEO headings and meta tags for better search ranking
- **Static Export**: Configured for static site generation

## 📁 Project Structure

```
bluetick-website/
├── src/
│   ├── app/
│   │   └── (default)/
│   │       └── home/
│   │           └── HomeClient.jsx       # Main home page component
│   ├── components/
│   │   ├── ai_section/                  # AI Stack section
│   │   ├── ai_hero_section/             # AI Hero section
│   │   ├── ai_tools/                    # AI Tools dashboard
│   │   ├── apply_section/               # Application section
│   │   ├── course_section/              # Course curriculum
│   │   ├── team_section/                # Team profiles
│   │   ├── tech_section/                # Tech landscape
│   │   ├── transformation_section/      # Success stories
│   │   ├── upcoming_batch/              # Batch schedule
│   │   ├── header/                      # Navigation header
│   │   ├── footer/                      # Site footer
│   │   ├── form/                        # Learning advisor forms
│   │   ├── accardian/                   # FAQ accordion
│   │   ├── map/                         # Global presence map
│   │   ├── model/                       # Modal component
│   │   ├── orbitanimation/              # Animated orbit component
│   │   └── ui/                          # UI primitives
│   ├── data/
│   │   ├── homeData.js                  # Static home page data
│   │   └── courseData.ts                # Course modules data
│   ├── utils/
│   │   └── helpers.js                   # Utility functions (debounce, throttle)
│   ├── constant.jsx                     # FAQ and accordion content
│   └── styles/                          # Global styles
├── public/
│   └── img/                             # Static images and assets
├── next.config.mjs                      # Next.js configuration
├── package.json                         # Dependencies
└── tailwind.config.js                   # Tailwind CSS configuration
```

## 🛠️ Tech Stack

### Core
- **Next.js 15.2.2** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

### Key Dependencies
- **framer-motion** (12.5.0) - Animation library
- **react-fast-marquee** (1.6.5) - Marquee component
- **react-toastify** (11.0.5) - Toast notifications
- **emailjs-com** (3.2.0) - Email service integration
- **lucide-react** (0.563.0) - Icon library
- **@reduxjs/toolkit** (2.6.1) - State management
- **swiper** (11.2.5) - Touch slider

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **tw-animate-css** - Tailwind animations

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd bluetick-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📦 Build & Deployment

The project is configured for static export:

```bash
# Build for production
npm run build

# Output will be in the 'out' directory
```

### Deployment Options
- **Vercel** - Recommended (zero-config)
- **Netlify** - Static hosting
- **AWS S3 + CloudFront** - Custom CDN setup
- **GitHub Pages** - Free hosting

## 🎨 Key Components

### HomeClient
Main page component featuring:
- Hero banner with responsive images
- Company logo marquee
- AI Stack section
- Course curriculum
- Team profiles
- Success transformation stories
- Global presence map
- FAQ accordion

### Forms
Three form types:
- **Default Form**: Course registration with learning mode selection
- **Hire Form**: Recruitment enquiries
- **Franchisee Form**: Franchise opportunities

All forms integrate with Zoho CRM via AWS Lambda API.

### Animations
- Framer Motion scroll-triggered animations
- Orbit animation with rotating company logos
- Smooth transitions and hover effects

## ⚡ Performance Optimizations

### Implemented Optimizations
1. **Code Splitting**
   - Dynamic imports for heavy components (Header, Footer, Modal, etc.)
   - Lazy loading for below-fold content

2. **React Memoization**
   - `React.memo()` on AISection, CourseSection, TeamPage, OrbitAnimation
   - `useMemo()` for expensive calculations
   - `useCallback()` for event handlers

3. **Data Extraction**
   - Static data moved to `/src/data/homeData.js`
   - Reduced bundle size and improved maintainability

4. **Event Optimization**
   - Debounced resize handlers (150ms delay)
   - Throttled scroll events
   - Proper cleanup in useEffect hooks

5. **Image Optimization**
   - Next.js Image component with proper sizing
   - WebP format for banner images
   - Lazy loading for off-screen images

### Performance Metrics
- **First Contentful Paint**: Optimized with priority loading
- **Largest Contentful Paint**: Reduced with image optimization
- **Cumulative Layout Shift**: Minimized with proper sizing
- **Time to Interactive**: Improved with code splitting

## 🔧 Configuration

### Next.js Config (`next.config.mjs`)
```javascript
{
  output: 'export',           // Static export
  images: {
    unoptimized: true        // For static export compatibility
  },
  trailingSlash: true        // SEO-friendly URLs
}
```

### Environment Variables
Create a `.env.local` file for sensitive data:
```
# Add any environment variables here
```

## 📱 Responsive Breakpoints

```css
/* Tailwind breakpoints used */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large */
2xl: 1536px  /* 2X extra large */

/* Custom breakpoints */
min-[1440px] /* Container max-width */
min-[1050px] /* Header navigation */
```

## 🎯 Key Features Explained

### Form System
- Multi-step validation
- Real-time error display
- Captcha verification (default form)
- Success/error toast notifications
- AWS Lambda integration for Zoho CRM

### Course Section
- Interactive module selection
- Horizontal scroll on mobile
- Side-by-side view on desktop
- 112-hour curriculum roadmap
- Expandable module details

### Team Profiles
- Grid layout (2-4 columns)
- Profile cards with hover effects
- Experience and role display
- Responsive design

### Map Integration
- Global presence visualization
- 30+ countries representation
- Interactive points (MapWithPoints component)

## 🐛 Known Issues & Solutions

### Issue: Images not loading in production
**Solution**: Ensure all images are in the `public` directory and use absolute paths starting with `/`

### Issue: Hydration errors
**Solution**: Components with window/document access use `typeof window !== "undefined"` checks

### Issue: Dynamic imports showing flicker
**Solution**: Add loading states or SSR: false in dynamic imports

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Bluetick Academy.

## 📞 Support

For support and inquiries:
- **Website**: [Bluetick Academy](https://bluetickacademy.com)
- **Phone**: +91-9606 9955 25
- **WhatsApp**: +91-9606 9955 25
- **Email**: Contact through the website form

## 🙏 Acknowledgments

- Built by the Bluetick Academy development team
- Icons from Lucide React and React Icons
- UI components inspired by shadcn/ui
- Animations powered by Framer Motion

---

**Version**: 0.1.0
**Last Updated**: 2026-02-09
**Maintained by**: Bluetick Academy Development Team
