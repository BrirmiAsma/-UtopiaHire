# UtopiaHire - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Visit: **http://localhost:3000**

---

## 📍 Navigation Map

### Public Pages
- **Landing Page**: `/`
  - Hero section with "Sign In" button
  - "Why Choose UtopiaHire?" features
  - Footer with company info

- **About Us**: `/about`
  - Mission, values, and impact
  - Company information

- **Feedback**: `/feedback`
  - Feedback form with categories
  - Success confirmation

### Dashboard Pages (After Sign In)
- **Dashboard Home**: `/dashboard`
  - Welcome hero
  - 5 module cards

- **Interview Simulation**: `/dashboard/interview`
  - AI-powered interview practice
  - Real-time feedback

- **Job Matching**: `/dashboard/job-matching`
  - Job preferences form
  - Regional opportunities

- **Profile Enhancement**: `/dashboard/enhancement`
  - Profile upload and analysis
  - AI-driven suggestions

- **CV Analyzer**: `/dashboard/cv-analyzer`
  - CV upload and scoring
  - Detailed recommendations

- **Career Insights**: `/dashboard/behavior`
  - Market trends
  - Success patterns

---

## 🎨 Design System Quick Reference

### Colors
```css
/* Primary */
--sahara-gold: #D4A574
--atlas-teal: #2C7A7B
--savanna-green: #38A169

/* Secondary */
--desert-sunset: #ED8936
--nile-blue: #3182CE
--acacia-purple: #805AD5

/* Neutral */
--ivory: #FFFAF0
--charcoal: #2D3748
--soft-gray: #E2E8F0
```

### Components
```tsx
// Button
import Button from '@/components/ui/Button';
<Button variant="primary" size="lg">Click Me</Button>

// Card
import Card from '@/components/ui/Card';
<Card hover>Content</Card>

// Animated Section
import AnimatedSection from '@/components/landing/AnimatedSection';
<AnimatedSection delay={200}>Content</AnimatedSection>
```

### Icons
```tsx
import { IconName } from 'lucide-react';
<IconName className="w-6 h-6 text-[#2C7A7B]" />
```

---

## 📱 Testing Responsive Design

### Desktop
- Full sidebar visible
- 3-column grid layouts
- Expanded hero sections

### Tablet (Use browser DevTools)
- Collapsible sidebar
- 2-column grids
- Medium breakpoint: 768px

### Mobile (Use browser DevTools)
- Hamburger menu
- Stacked layouts
- Small breakpoint: 640px

---

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 📂 Key Files to Modify

### Add New Page
1. Create file: `app/your-page/page.tsx`
2. Add to navigation if needed

### Add New Component
1. Create file: `components/category/YourComponent.tsx`
2. Import where needed

### Modify Colors
1. Edit: `app/globals.css`
2. Update CSS variables in `:root`

### Add New Module
1. Create page: `app/dashboard/your-module/page.tsx`
2. Add to sidebar: `components/layout/Sidebar.tsx`
3. Add card: `app/dashboard/page.tsx`

---

## 🎯 Next Integration Steps

### 1. Authentication
- Replace Sign In link with auth provider
- Add protected route middleware
- Implement session management

### 2. File Upload
- Add file upload endpoints
- Connect to CV Analyzer and Enhancement modules
- Implement file validation

### 3. AI Integration
- Connect interview simulation API
- Link job matching algorithm
- Add CV analysis backend

### 4. Database
- Set up user profiles
- Store analysis results
- Track user progress

---

## 🆘 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

---

## 📞 Support

For questions about the implementation:
1. Check `UI_IMPLEMENTATION_SUMMARY.md`
2. Review component files for documentation
3. Check `types/index.ts` for type definitions

---

## ✨ Features Overview

✅ Modern, clean UI
✅ Mobile-first responsive
✅ Accessibility compliant (WCAG AA)
✅ Smooth animations
✅ Africa & MENA inspired design
✅ TypeScript for type safety
✅ Modular component architecture
✅ Production-ready build

---

**Ready to build fair & inclusive employment! 🌍**
