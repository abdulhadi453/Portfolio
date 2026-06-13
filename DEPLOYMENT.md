# Modern Portfolio - Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your portfolio is live

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

## Environment Variables (if needed)

If you add features that need API keys later:

1. Create `.env.local` file:
```env
NEXT_PUBLIC_YOUR_KEY=your_value
```

2. Add to Vercel:
   - Go to Project Settings
   - Environment Variables
   - Add your variables

## Custom Domain

1. In Vercel Dashboard:
   - Go to your project
   - Settings → Domains
   - Add your domain
   - Update your DNS records

## Performance Optimization

Already included:
- ✅ Next.js automatic code splitting
- ✅ Image optimization ready
- ✅ CSS optimization with Tailwind
- ✅ Font optimization

## Build Commands

```bash
# Development
npm run dev

# Production build (test locally)
npm run build
npm run start

# Lint check
npm run lint
```

## Troubleshooting

**Build fails on Vercel:**
- Check Node version (should be 18+)
- Run `npm run build` locally first
- Check for TypeScript errors

**Images not loading:**
- Ensure images are in `/public` folder
- Use relative paths: `/images/project.png`

**Slow performance:**
- Optimize images (use WebP format)
- Check bundle size: `npm run build`
- Consider lazy loading for images

## Post-Deployment Checklist

- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check SEO with Google Search Console
- [ ] Test page speed with Lighthouse
- [ ] Update social media preview images
- [ ] Set up analytics (Google Analytics/Plausible)

## Free Hosting Alternatives

- **Vercel** (Recommended) - 100GB bandwidth/month
- **Netlify** - 100GB bandwidth/month
- **Cloudflare Pages** - Unlimited bandwidth
- **GitHub Pages** - Free for public repos

Your portfolio is ready to deploy! 🚀
