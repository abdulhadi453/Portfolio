# Portfolio Customization Guide

## 🎯 Quick Start - Personalize Your Portfolio

### 1. Update Your Personal Information

**Hero Section** (`components/Hero.tsx`):
```typescript
// Line 31: Change your name
<span className="gradient-text animate-glow">Your Name</span>
// Change to:
<span className="gradient-text animate-glow">John Doe</span>

// Line 40-41: Update your bio
Full-Stack Developer crafting modern web experiences with clean code
and creative solutions
```

**Contact Section** (`components/Contact.tsx`):
```typescript
// Lines 7-10: Update social media URLs
const socials = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
];

// Line 56: Update email button
href="mailto:your.email@example.com"
```

**Page Metadata** (`app/layout.tsx`):
```typescript
// Lines 8-11: Update SEO information
export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer",
  description: "Your custom description here",
  keywords: ["your", "keywords", "here"],
  authors: [{ name: "Your Name" }],
```

### 2. Add Your Projects

**Projects Section** (`components/Projects.tsx`):
```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Detailed description of what the project does",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://your-project-live-url.com",
    github: "https://github.com/yourusername/repo",
    span: "col-2-row-2" as const, // Options: "col-2", "row-2", "col-2-row-2", or undefined
  },
  // Add 4-5 projects total
];
```

**Span Options**:
- `"col-2-row-2"` - Large card (2 columns x 2 rows)
- `"col-2"` - Wide card (2 columns x 1 row)
- `"row-2"` - Tall card (1 column x 2 rows)
- `undefined` - Standard card (1 column x 1 row)

### 3. Update Your Skills

**Skills Section** (`components/Skills.tsx`):
```typescript
const skillCategories = [
  {
    title: "Your Category",
    icon: Layout, // Icons: Layout, Server, Database, Wrench, Smartphone, Code2
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    span: "col-2" as const, // Optional: makes card wider
  },
];
```

### 4. Customize Colors (Optional)

**Tailwind Config** (`tailwind.config.ts`):
```typescript
colors: {
  accent: {
    DEFAULT: "#32CD32", // Change to your preferred color
    light: "#39FF14",
    dark: "#228B22",
  },
},
```

### 5. Add Project Images (Optional)

1. Create a `public/projects/` folder
2. Add your project images (recommended: 1200x800px)
3. Update Projects component to include images

### 6. Test Locally

```bash
npm run dev
# Visit http://localhost:3000
```

### 7. Deploy to Vercel

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial portfolio"

# Push to GitHub
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main

# Deploy on Vercel
# 1. Go to vercel.com
# 2. Import your GitHub repository
# 3. Deploy with one click
```

## 🎨 What to Look For in Browser

When you open http://localhost:3000, you should see:

1. **Preloader** (2 seconds):
   - Spinning lime green circle
   - "Loading..." text
   - Fades out smoothly

2. **Custom Cursor**:
   - Move your mouse - you'll see a lime green circle following it
   - Green trail dots appear as you move
   - Normal cursor is hidden

3. **Hero Section**:
   - Large animated text with gradient
   - "Your Name" glows with lime green
   - Two buttons with hover effects
   - Bouncing arrow at bottom

4. **Projects Section**:
   - Asymmetric grid layout
   - E-Commerce Platform is largest (2x2)
   - Portfolio Builder is wide (2x1)
   - Other 3 projects are standard size
   - Hover over cards - they scale up and border changes to lime

5. **Skills Section**:
   - Dark gradient background
   - 6 categories with icons
   - Hover over skill pills - they change color to lime

6. **Contact Section**:
   - 4 social icons in circles
   - Hover effects - icons scale and turn lime
   - Email button with shadow

7. **Scrollbar**:
   - Right side of page has lime green scrollbar

8. **Smooth Scrolling**:
   - Click "View My Work" button - smoothly scrolls to projects
   - Click arrow down - smoothly scrolls
   - Click "Get In Touch" - smoothly scrolls to contact

## 🐛 Troubleshooting

**Custom cursor not showing?**
- Check if you're moving the mouse over the page
- Cursor only appears on desktop, not mobile

**Animations not working?**
- Hard refresh: Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

## 📚 Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Performance Tips

1. Add real project images to `/public/projects/`
2. Optimize images before adding (use webp format)
3. Keep animations smooth - avoid heavy computations
4. Test on mobile devices

Your portfolio is ready! Just customize the content and deploy.
