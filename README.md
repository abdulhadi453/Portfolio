# Modern Portfolio - Next.js 14 (Redesigned)

A **cinematic bento-grid inspired developer portfolio** with a premium futuristic design. Features a floating navbar, split-layout hero section, and animated backgrounds - built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ What's New in This Redesign

### 🎯 Major Updates

- **Bento Grid Navbar** - Floating navigation with icon tiles at the top
- **Redesigned Hero Section** - Split layout with animated status line
- **Animated Background** - Floating particles and pulsing gradient orbs
- **New About Section** - Professional highlights with hover effects
- **New Education Section** - Timeline layout with certifications
- **Updated Color Scheme** - New lime accent (#A3FF12) throughout

## 🎨 Features

### Navigation
- **Bento Grid Navbar** - 5 sections with smooth scroll navigation
- Active state indicators with lime glow
- Hover animations (scale + lift effects)
- Glass morphism design

### Hero Section (Redesigned)
- **Split Layout**: Text content left, illustration right
- **Status Line**: "Abdul Hadi - Available for Work" with pulsing green dot
- Animated gradient text with glow effect
- Two CTA buttons with hover animations
- Floating image placeholder (ready for your photo)

### Animated Background
- Floating lime particles
- Pulsing gradient orbs
- Subtle grid pattern overlay
- Continuous smooth motion

### Sections
- **About** - 4 highlight cards showcasing your strengths
- **Projects** - 5 projects in bento grid with varying sizes
- **Skills** - 6 skill categories with icons and tags
- **Education** - Timeline layout with certifications showcase
- **Contact** - Social links and email CTA
- **Footer** - Copyright information

### Animations & Effects
- **Custom Cursor** - Lime green circle with trailing effect
- **Glass Morphism** - Frosted glass effect on cards
- **Preloader** - Minimal loading animation
- **Hover Effects** - Scale, color changes, and glow effects
- **Scroll Animations** - Elements animate on viewport entry
- **Smooth Scrolling** - CSS scroll-behavior throughout

### Design System
- **Primary Color**: Lime Green (#A3FF12)
- **Background**: Pure Black / Deep Charcoal
- **Text**: White + Soft Gray
- **Custom Scrollbar**: Lime colored
- **Selection Color**: Lime background with black text

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### 1. Personal Information

**Hero Section** (`components/Hero.tsx`):
- Line 44: Change "Abdul Hadi - Available for Work"
- Line 58: Update your name in the gradient text
- Line 66: Update your role title
- Line 75: Modify your tagline/bio

**Footer** (`components/Footer.tsx`):
- Line 6: Update copyright name

**Meta Tags** (`app/layout.tsx`):
- Lines 8-11: Update SEO metadata

### 2. Add Your Photo to Hero Section

Replace the placeholder in `components/Hero.tsx`:

1. Add your image to `/public` folder (e.g., `hero-image.png`)
2. Uncomment lines 143-149 in `Hero.tsx`
3. Update the `src` path to your image

```tsx
<Image
  src="/hero-image.png"
  alt="Abdul Hadi"
  fill
  className="object-cover"
  priority
/>
```

### 3. About Section

Edit `components/About.tsx`:
- Lines 8-31: Update the 4 highlight cards
- Line 70: Modify your bio text

### 4. Projects

Edit `components/Projects.tsx`:
- Lines 6-44: Update with your real projects
- Change titles, descriptions, tech stacks, and links
- Adjust `span` property for card sizes:
  - `"col-2-row-2"` - Large (2×2)
  - `"col-2"` - Wide (2×1)
  - `"row-2"` - Tall (1×2)
  - `undefined` - Standard (1×1)

### 5. Skills

Edit `components/Skills.tsx`:
- Lines 6-39: Update your tech stack
- Add/remove skill categories
- Modify skills within each category

### 6. Education

Edit `components/Education.tsx`:
- Lines 6-23: Update your degrees and education
- Lines 25-30: Update your certifications

### 7. Contact

Edit `components/Contact.tsx`:
- Lines 7-10: Update your social media URLs
- Line 56: Update your email address

### 8. Navbar Sections

If you add/remove sections, update `components/BentoNavbar.tsx`:
- Lines 5-11: Modify navigation items and their href targets

## 🎨 Color Customization

To change the accent color, edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    DEFAULT: "#A3FF12", // Main accent color
    light: "#B8FF3D",   // Lighter variant
    dark: "#8BE600",    // Darker variant
  },
},
```

Also update in `app/globals.css`:
- Line 5: Cursor border color
- Line 16: Cursor trail color
- Lines 28, 32: Scrollbar colors
- Lines 40, 45: Selection colors

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with navbar
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Redesigned hero (split layout)
│   ├── BentoNavbar.tsx     # New bento grid navigation
│   ├── AnimatedBackground.tsx  # New animated background
│   ├── About.tsx           # New about section
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills grid
│   ├── Education.tsx       # New education section
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer
│   ├── BentoGrid.tsx       # Reusable grid components
│   ├── CustomCursor.tsx    # Custom cursor effect
│   └── Preloader.tsx       # Loading animation
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
    ├── favicon.svg
    ├── manifest.json
    ├── robots.txt
    └── projects/           # Add project images here
```

## 🚀 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to Vercel:**

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy with one click

## 🎯 Browser Features to Test

1. **Bento Navbar** - Click icons to navigate, watch active state
2. **Custom Cursor** - Move mouse to see lime circle and trail
3. **Hero Animation** - Watch status dot pulse and text animate
4. **Scroll Animations** - Scroll to see sections animate in
5. **Hover Effects** - Hover over cards, buttons, and links
6. **Animated Background** - Watch particles float and orbs pulse

## 📄 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📚 Documentation

- [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) - Detailed customization instructions
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide for Vercel and other platforms

## 🤝 Support

For issues or questions, create an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Framer Motion
