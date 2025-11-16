# UtopiaHire - Component Hierarchy

## 🏗️ Application Structure

```
Root Layout (app/layout.tsx)
├── Metadata (SEO optimized)
├── Font Loading (Geist Sans & Mono)
└── Global Styles (globals.css)
    │
    ├─── PUBLIC PAGES
    │    │
    │    ├── Landing Page (app/page.tsx)
    │    │   ├── HamburgerMenu
    │    │   ├── Hero
    │    │   │   ├── Gradient Background
    │    │   │   ├── Badge (Ethical AI)
    │    │   │   ├── Slogan
    │    │   │   ├── Description
    │    │   │   ├── Sign In Button
    │    │   │   └── Stats Cards (3)
    │    │   │
    │    │   ├── AnimatedSection (Why Choose)
    │    │   │   └── Feature Cards (4)
    │    │   │       ├── Fair & Transparent
    │    │   │       ├── Privacy-First
    │    │   │       ├── Inclusive
    │    │   │       └── Ethical AI
    │    │   │
    │    │   └── Footer
    │    │
    │    ├── About Page (app/about/page.tsx)
    │    │   ├── HamburgerMenu
    │    │   ├── Back Button
    │    │   ├── Page Header
    │    │   └── AnimatedSection
    │    │       ├── Mission Card
    │    │       ├── What We Do Card
    │    │       ├── Values Card
    │    │       └── Impact Card
    │    │
    │    └── Feedback Page (app/feedback/page.tsx)
    │        ├── HamburgerMenu
    │        ├── Back Button
    │        ├── Page Header
    │        └── Form Card
    │            ├── Name Input
    │            ├── Email Input
    │            ├── Category Select
    │            ├── Message Textarea
    │            ├── Submit Button
    │            └── Success State
    │
    └─── DASHBOARD PAGES
         │
         ├── Dashboard Layout (components/layout/DashboardLayout.tsx)
         │   ├── Sidebar (Fixed Left)
         │   │   ├── Logo & Brand
         │   │   ├── Navigation Menu
         │   │   │   ├── Interview Link
         │   │   │   ├── Job Matching Link
         │   │   │   ├── Enhancement Link
         │   │   │   ├── CV Analyzer Link
         │   │   │   └── Behavior Link
         │   │   ├── Sign Out Button
         │   │   └── Footer Info
         │   │
         │   └── Main Content Area
         │       │
         │       ├── Dashboard Home (app/dashboard/page.tsx)
         │       │   ├── WelcomeHero
         │       │   │   ├── Gradient Background
         │       │   │   ├── Badge
         │       │   │   ├── Welcome Message
         │       │   │   └── Stats (2)
         │       │   │
         │       │   ├── Section Header
         │       │   ├── Module Cards Grid (5)
         │       │   │   └── ModuleCard (×5)
         │       │   │       ├── Icon
         │       │   │       ├── Title
         │       │   │       ├── Description
         │       │   │       └── CTA Link
         │       │   │
         │       │   └── Getting Started Tips Card
         │       │
         │       ├── Interview Module (app/dashboard/interview/page.tsx)
         │       │   ├── Module Header
         │       │   ├── Stats Cards (3)
         │       │   └── Content Grid
         │       │       ├── Start New Interview Card
         │       │       └── Features Card
         │       │
         │       ├── Job Matching Module (app/dashboard/job-matching/page.tsx)
         │       │   ├── Module Header
         │       │   ├── Stats Cards (3)
         │       │   ├── Preferences Form Card
         │       │   │   ├── Job Title Input
         │       │   │   ├── Location Input
         │       │   │   └── Find Jobs Button
         │       │   │
         │       │   └── How It Works Card
         │       │
         │       ├── Enhancement Module (app/dashboard/enhancement/page.tsx)
         │       │   ├── Module Header
         │       │   ├── Stats Cards (3)
         │       │   ├── Upload Card
         │       │   │   ├── Upload Zone
         │       │   │   └── Analyze Button
         │       │   │
         │       │   └── Content Grid
         │       │       ├── Enhancement Areas Card
         │       │       └── AI Features Card
         │       │
         │       ├── CV Analyzer Module (app/dashboard/cv-analyzer/page.tsx)
         │       │   ├── Module Header
         │       │   ├── Stats Cards (3)
         │       │   ├── Upload Card
         │       │   │   ├── Upload Zone
         │       │   │   └── Analyze Button
         │       │   │
         │       │   └── Content Grid
         │       │       ├── What We Analyze Card
         │       │       └── Analysis Benefits Card
         │       │
         │       └── Career Insights Module (app/dashboard/behavior/page.tsx)
         │           ├── Module Header
         │           ├── Stats Cards (3)
         │           ├── Regional Trends Card
         │           │   ├── Growing Industries
         │           │   └── Demanded Skills
         │           │
         │           └── Content Grid
         │               ├── Success Patterns Card
         │               └── Your Progress Card
```

---

## 🧩 Reusable Components

### UI Components (`components/ui/`)
```
Button
├── Props: variant, size, children, ...HTMLButtonAttributes
├── Variants: primary, secondary, outline, ghost
└── Sizes: sm, md, lg

Card
├── Props: hover, children, ...HTMLDivAttributes
└── Features: Shadow, border, hover effect
```

### Layout Components (`components/layout/`)
```
HamburgerMenu
├── Mobile Menu Toggle
├── Overlay with Backdrop Blur
├── Slide-in Animation
├── Navigation Links (3)
│   ├── Home
│   ├── About Us
│   └── Feedback
└── Footer Info

Sidebar (Dashboard)
├── Desktop: Fixed Left (280px)
├── Mobile: Drawer with Toggle
├── Logo & Brand
├── Module Navigation (5)
│   ├── Active State Highlighting
│   └── Icon + Label
├── Sign Out
└── Footer Badge

DashboardLayout
├── Sidebar (Fixed)
└── Main Content (ml-80 on desktop)
```

### Landing Components (`components/landing/`)
```
Hero
├── Gradient Background
├── Pattern Overlay
├── Badge
├── Heading
├── Description
├── CTA Button
└── Stats Cards

AnimatedSection
├── Intersection Observer
├── Fade In Animation
└── Delay Support
```

### Dashboard Components (`components/dashboard/`)
```
WelcomeHero
├── Gradient Background
├── Pattern Overlay
├── Welcome Message
└── Stats Display

ModuleCard
├── Icon with Gradient
├── Title
├── Description
└── CTA Link with Arrow
```

---

## 🎨 Style System

### Tailwind Classes Structure
```
Layout
├── Spacing: p-{n}, m-{n}, gap-{n}
├── Sizing: w-{n}, h-{n}, max-w-{size}
├── Display: flex, grid, block, hidden
└── Position: fixed, absolute, relative

Colors (Custom)
├── Background: bg-[#HEX]
├── Text: text-[#HEX]
├── Border: border-[#HEX]
└── Gradients: from-[#HEX] to-[#HEX]

Animations
├── animate-fadeIn
├── animate-slideUp
├── animate-slideInLeft
├── animate-slideInRight
└── delay-{100|200|300|400}

Responsive
├── Mobile: Default
├── Tablet: sm:, md:
└── Desktop: lg:, xl:
```

---

## 🔄 Data Flow

```
User Interaction
    ↓
Component Event Handler
    ↓
State Update (useState)
    ↓
Re-render Component
    ↓
Update UI

Navigation Flow:
Landing → Sign In → Dashboard → Modules
    ↓
Hamburger Menu → About/Feedback → Back to Home
```

---

## 📦 Dependencies Tree

```
Next.js 15.5.6
├── React 19.1.0
├── React DOM 19.1.0
└── TypeScript 5.x

Styling
├── Tailwind CSS 4.x
└── PostCSS 4.x

Icons
└── Lucide React

Dev Tools
├── ESLint 9.x
├── Next ESLint Config
└── TypeScript Types
```

---

## 🎯 Component Responsibilities

### Presentational Components
- `Button` - Display styled button
- `Card` - Display content container
- `Hero` - Display hero section
- `ModuleCard` - Display module info

### Container Components
- `DashboardLayout` - Manage layout structure
- `AnimatedSection` - Manage scroll animations

### Interactive Components
- `HamburgerMenu` - Manage menu state & navigation
- `Sidebar` - Manage active routes & navigation
- `Feedback` form - Manage form state & submission

---

## 🔑 Key Patterns Used

1. **Composition Pattern**
   - Cards wrap content
   - Layouts wrap pages
   - Sections wrap features

2. **Prop Drilling Alternative**
   - Next.js routing for navigation
   - Local state for UI interactions

3. **Separation of Concerns**
   - UI components in `/components/ui`
   - Layout components in `/components/layout`
   - Page-specific in `/components/[page]`

4. **Type Safety**
   - All props typed with TypeScript
   - Shared types in `/types/index.ts`
   - Utility functions typed

---

## 🚀 Performance Optimizations

✅ Static generation (SSG) for all pages
✅ Component-level code splitting
✅ Optimized imports (tree-shaking)
✅ CSS purging (Tailwind)
✅ Next.js automatic optimizations
✅ Minimal JavaScript bundle

---

**Component hierarchy designed for scalability and maintainability! 🏗️**
