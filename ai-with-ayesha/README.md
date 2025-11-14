# AI With Ayesha - Professional Website

![Website Preview](https://img.shields.io/badge/Status-Live-success)
![Built with](https://img.shields.io/badge/Built%20with-React%20%2B%20TypeScript-blue)
![Styling](https://img.shields.io/badge/Styling-Glassmorphism-purple)

## 🌐 Live Website
**https://esbjmb6hmfgl.space.minimax.io**

## 📖 Overview
A professional 7-page website showcasing Ayesha Arif as Pakistan's youngest AI creator and youth tech speaker. Features modern glassmorphism design, responsive layout, and full CMS functionality.

## 🎯 Key Features
- ✨ Modern glassmorphism design aesthetic
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 7 complete pages (Home, About, Projects, Speaking, Media, Blog, Contact)
- 📝 Contact form with Supabase backend
- 📚 Blog CMS with category filtering
- 🔒 Secure RLS policies
- ⚡ Fast loading with optimized build
- ♿ WCAG accessibility compliant

## 🛠 Tech Stack
- **Frontend**: React 18.3, TypeScript, Vite 6.0
- **Styling**: TailwindCSS 3.4, Glassmorphism effects
- **Backend**: Supabase (Database, Edge Functions)
- **Icons**: Lucide React
- **Routing**: React Router v6

## 📂 Project Structure
```
ai-with-ayesha/
├── public/
│   └── images/          # All website images
├── src/
│   ├── components/      # Reusable components
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/          # 7 main pages
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── SpeakingPage.tsx
│   │   ├── MediaPage.tsx
│   │   ├── BlogPage.tsx
│   │   └── ContactPage.tsx
│   ├── lib/
│   │   ├── supabase.ts  # Supabase client
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main app with routing
│   └── index.css        # Global styles
└── supabase/
    └── functions/
        └── contact-form-submit/  # Contact form handler
```

## 🚀 Quick Start

### Development
```bash
cd /workspace/ai-with-ayesha
pnpm install
pnpm run dev
```

### Build
```bash
pnpm run build
```

### Deploy
```bash
# Deploy dist folder to hosting platform
# Current deployment: MiniMax Space
```

## 📱 Pages

### 1. Home (/)
Hero section, highlights grid, featured video, quick actions, CTA

### 2. About (/about)
Journey timeline, vision/mission, recognitions, profile details

### 3. Projects (/projects)
7 AI projects with filtering, descriptions, and tools used

### 4. Speaking (/speaking)
Topics, formats, past engagements, booking CTA

### 5. Media (/media)
Featured interview, video gallery, event photos, press mentions

### 6. Blog (/blog)
CMS-driven blog posts with category filtering

### 7. Contact (/contact)
Contact form, WhatsApp/Instagram/Email links

## 🗄 Database Schema

### `contact_submissions`
Stores contact form submissions
- id, created_at, name, email, organization, purpose, message, status

### `blog_posts`
CMS for blog content
- id, created_at, updated_at, title, slug, excerpt, content, featured_image, category, tags, published, read_time

## 📞 Contact Information
- **WhatsApp**: +92 316 2092866
- **Instagram**: @aiwithayesha
- **YouTube**: @aiwithayesha
- **Email**: ayesha@aiwithayesha.com

## 📚 Documentation
See [DOCUMENTATION.md](./DOCUMENTATION.md) for:
- Complete feature list
- Content management guide
- Database setup
- Security configuration
- Design token reference

## ✅ Testing Status
- ✅ All pages tested and functional
- ✅ Navigation and routing working
- ✅ Contact form validated and working
- ✅ Responsive design verified
- ✅ External links tested
- ✅ Visual design confirmed

## 🎨 Design Credits
- Design Style: Glassmorphism (Modern Depth)
- Color Scheme: Electric Teal + Neutral Gradients
- Typography: Poppins font family
- Icons: Lucide React

## 📄 License
Created for Ayesha Arif - AI With Ayesha

---

**Built by MiniMax Agent** | November 2025
