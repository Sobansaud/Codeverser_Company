# CodeVerser - AI-Powered SaaS & Software Solutions

A modern, fully responsive company website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Dark/Light Mode**: Built-in theme toggle with persistent preferences
- **SEO Optimized**: Complete meta tags, Open Graph, Schema markup, and sitemap
- **Accessible**: ARIA labels, semantic HTML, keyboard navigation support
- **Performance**: Optimized images, animations, and Core Web Vitals
- **Working Contact Form**: Integrated with Web3Forms for reliable email delivery

## 📄 Pages

1. **Home** (`/`) - Hero section, features, services overview, testimonials, CTAs
2. **About** (`/about`) - Mission, vision, leadership team, core values
3. **Services** (`/services`) - Detailed descriptions of all 6 services with technologies
4. **Portfolio** (`/portfolio`) - 6 sample projects with results and tech stacks
5. **Contact** (`/contact`) - Working contact form with validation and success/error states
6. **Privacy Policy** (`/privacy`) - Comprehensive privacy policy
7. **Terms of Service** (`/terms`) - Terms and conditions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Form Handling**: Web3Forms API
- **Animations**: Custom CSS animations
- **Theme**: Custom theme provider for dark/light mode

## 📦 Installation

```bash
# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🔧 Configuration

### Contact Form Setup

The contact form is pre-configured with Web3Forms:
- **Access Key**: `c9b5d366-4b07-4f1d-bde9-71649d33714c`
- **Receiver Email**: `codeverse627@gmail.com`

The form includes:
- Client-side validation
- Success/error states
- Loading indicators
- Accessibility features

### Google Analytics

Update the GA tracking ID in `src/app/layout.tsx`:
```typescript
gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your actual ID
```

## 🎨 Customization

### Colors & Theme

Update theme colors in `src/app/globals.css`:
```css
:root {
  --primary: oklch(0.205 0 0);
  --background: oklch(1 0 0);
  /* ... other colors */
}
```

### Content

- **Company Info**: Update in `src/components/footer.tsx` and contact page
- **Services**: Modify `src/app/services/page.tsx`
- **Projects**: Edit `src/app/portfolio/page.tsx`
- **Team Members**: Update `src/app/about/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Railway
- Render

Build command: `npm run build`
Output directory: `.next`

## 📱 Features Breakdown

### Global Components

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Links, contact info, social media
- **Theme Toggle**: Persistent dark/light mode
- **Button**: Reusable button component with variants
- **Card**: Flexible card component for content

### Animations

- Fade-in effects
- Fade-in-up transitions
- Hover effects on cards and buttons
- Smooth color transitions

### Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode compatible
- Screen reader friendly
- Focus indicators

### SEO Features

- Meta tags on all pages
- Open Graph tags for social sharing
- Twitter Card support
- Schema.org markup for Local Business
- Dynamic sitemap generation
- Robots.txt configuration
- Descriptive alt text for images

## 📊 Performance

- Optimized images with Next.js Image component
- Code splitting with App Router
- Fast page loads with SSR
- Minimal JavaScript bundle
- CSS optimization with Tailwind

## 🔒 Security

- No sensitive data in client-side code
- Form validation (client and server)
- Secure API integration
- Environment variables for sensitive keys

## 🧪 Testing

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Build test
npm run build
```

## 📝 License

This project is proprietary to CodeVerser.

## 🤝 Support

For support, email codeverse627@gmail.com or call +1 (555) 123-4567.

## 🎯 Next Steps

1. Replace placeholder images with actual company photos
2. Add real project case studies to portfolio
3. Update Google Analytics tracking ID
4. Add real team member information
5. Customize color scheme to match brand
6. Add more pages as needed (Blog, Careers, etc.)
7. Set up monitoring and error tracking
8. Configure CDN for static assets

---

Built with ❤️ by CodeVerser