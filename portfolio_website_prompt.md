# 🚀 Portfolio Website — Full Build Prompt


## 🎯 Project Overview

Build a **stunning, Gen Z-aesthetic personal portfolio website** for `Luv Sharma`, a `Full Stack Developer and Freelance Creator`. The site must showcase personal projects, reflect a bold and modern visual identity, and include a direct link to a services booking page where visitors can hire and pay for services.

**Primary Goals:**
- Impress potential clients and collaborators at first glance
- Showcase projects with rich visual presentation
- Convert visitors into paying clients via a services CTA
- Feel alive — animations, motion, and micro-interactions throughout

---

## 🎨 Design Language & Aesthetic

### Vibe
- **Gen Z / Dark Luxury** — Think: dark backgrounds, glowing neons, glassmorphism cards, fluid gradients, bold typography
- Inspired by: [Linear.app](https://linear.app), [Lusion.co](https://lusion.co), [Awwwards.com](https://awwwards.com) top-rated sites
- Motion-first: the site should feel *alive* on load, scroll, and hover
- NOT corporate, NOT Bootstrap-default, NOT beige/cream minimalism

### Color Palette
| Token | Color | Usage |
|---|---|---|
| `--bg-primary` | `#0A0A0F` | Main background |
| `--bg-secondary` | `#111118` | Cards, sections |
| `--accent-1` | `#7B5EA7` | Primary purple glow |
| `--accent-2` | `#00D4FF` | Cyan highlight |
| `--accent-3` | `#FF6B6B` | Coral CTA pop |
| `--text-primary` | `#F0F0F5` | Headlines |
| `--text-muted` | `#8888AA` | Body, subtitles |

### Typography
- **Display / Hero:** `Clash Display` or `Cabinet Grotesk` (from [Fontshare](https://www.fontshare.com)) — Bold, wide, character-heavy
- **Body:** `Inter` or `DM Sans` — Clean and legible
- **Accent / Labels:** `Space Mono` or `JetBrains Mono` — For code snippets, tags, timestamps

### Signature Design Element
A **custom animated cursor** with a trailing glow effect that changes color based on what section is hovered. Combined with smooth **scroll-linked section transitions** where text and images slide in with staggered delays.

---

## ✨ Animation & Motion Reference

### Primary Animation Library
**Use [Framer Motion](https://www.framer.com/motion/) for all React-based animations.**

### Additional Tools
| Tool | Purpose |
|---|---|
| [GSAP (GreenSock)](https://gsap.com) | Complex scroll-triggered animations, timeline sequences |
| [Lenis](https://lenis.darkroom.engineering) | Smooth scroll experience |
| [Spline](https://spline.design) | Optional: 3D hero element or interactive background |
| [Theatre.js](https://www.theatrejs.com) | Fine-tuned animation choreography (advanced) |
| [react-spring](https://www.react-spring.dev) | Physics-based micro-interactions |

### Animation Behaviors Required
1. **Page Load Sequence:** Staggered text reveal on hero (letter-by-letter or word-by-word)
2. **Scroll Reveals:** Elements fade + slide up as they enter the viewport (use `IntersectionObserver` or GSAP ScrollTrigger)
3. **Cursor:** Custom cursor with magnetic effect on buttons/links
4. **Card Hover:** Project cards tilt in 3D on hover (use `react-tilt` or CSS `perspective`)
5. **Noise Texture Overlay:** Subtle CSS grain/noise over hero for depth
6. **Gradient Orbs:** Slow-moving ambient gradient blobs in hero background
7. **Navbar:** Glassmorphism navbar that blurs background on scroll
8. **Button Hover:** Shimmering/glowing effect on CTA buttons
9. **Section Transitions:** Smooth color/background shifts between sections

### Reference Websites for Motion Inspiration
- [lusion.co](https://lusion.co) — Fluid, immersive scroll
- [linear.app](https://linear.app) — Clean, purposeful motion
- [stripe.com](https://stripe.com) — Scroll-triggered storytelling
- [joshwcomeau.com](https://joshwcomeau.com) — Developer portfolio done right
- [bruno-simon.com](https://bruno-simon.com) — Creative, interactive portfolio

---

## 🗂️ Site Architecture & Pages

### Sitemap
```
/                → Home (Hero + About + Projects Preview + Services CTA + Contact)
/projects        → Full Projects Grid
/projects/[slug] → Individual Project Case Study
/services        → Services Overview (links out to booking page)
/contact         → Contact Form
```

### Single-Page Scroll Option (Alternative)
If preferred as a single-page app, use smooth anchor scroll with sections:
`#hero → #about → #projects → #services → #contact`

---

## 📄 Section-by-Section Breakdown

### 1. Hero Section
- Full viewport height (`100vh`)
- Animated headline: `"Hi, I'm [NAME]"` with typewriter or split-text effect
- Subheadline: `"[YOUR ROLE] — building things people love"`
- Two CTAs: `"View My Work"` (scrolls to projects) and `"Hire Me"` (links to booking page)
- Background: Animated gradient orbs or Spline 3D scene
- Scroll indicator arrow with bounce animation

### 2. About Section
- Short bio (2–3 sentences, punchy and personal)
- Skills displayed as animated tag chips (not a boring list)
- Optional: Animated skill bar or rotating tech stack logos
- A candid photo of yourself with subtle hover effect

### 3. Projects Section
- Grid layout: 2 columns desktop, 1 column mobile
- Each project card includes:
  - Project thumbnail (image or video loop)
  - Project name
  - Tech stack tags
  - Short one-line description
  - "View Case Study" link
- Hover state: card lifts with 3D tilt and glow border
- Filter bar to filter by category (Web, Design, Mobile, etc.)

### 4. Individual Project Case Study Page (`/projects/[slug]`)
- Hero image or video of project
- Overview, Problem, Solution, Tech Stack, Outcome sections
- Live demo link + GitHub link (if applicable)
- Next/Previous project navigation

### 5. Services Section
- Headline: `"Need help with your project?"`
- List 3–4 services you offer (e.g., Web Development, UI/UX Design, Consulting)
- Each service in a glassmorphism card with icon, title, short description
- One prominent CTA button: `"Book a Session →"` — links to `[YOUR BOOKING PAGE URL]`
  - This can be a Calendly, Toptal, Fiverr, or custom booking link
- Mention pricing range or "Starting from ₹X" to set expectations

### 6. Contact Section
- Simple contact form: Name, Email, Message, Send
- Social links: GitHub, LinkedIn, Twitter/X, Instagram
- Email address displayed with copy-to-clipboard functionality
- "Currently available for freelance work" status indicator (green dot pulse)

### 7. Footer
- Your name + tagline
- Quick nav links
- `"Designed & Built by [YOUR NAME] · [YEAR]"`

---

## 🛠️ Tech Stack

### Frontend
| Layer | Technology | Why |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SSR, SEO, fast page loads, routing |
| Language | **TypeScript** | Type safety, better DX |
| Styling | **Tailwind CSS** + **CSS Modules** for complex parts | Utility-first, responsive by default |
| Animation | **Framer Motion** + **GSAP** | Industry standard for smooth motion |
| Smooth Scroll | **Lenis** | Buttery scroll feel |
| 3D (optional) | **Spline** or **Three.js** | Hero interactive element |
| Icons | **Lucide React** or **Phosphor Icons** | Clean, consistent icons |
| Fonts | **Fontshare** (Clash Display) + **Google Fonts** (Inter) | Distinctive + free |
| State | **Zustand** (if needed) | Lightweight state management |

### Backend / CMS
| Layer | Technology | Why |
|---|---|---|
| CMS | **Sanity.io** or **Notion API** | Easily update projects without touching code |
| Contact Form | **Resend** or **EmailJS** | Send contact form emails |
| Hosting | **Vercel** | Best for Next.js, free tier, auto-deploy |
| Analytics | **Vercel Analytics** or **Plausible** | Privacy-friendly, easy setup |

### Project Data Structure (in Sanity or JSON)
```json
{
  "id": "project-slug",
  "title": "Project Name",
  "category": "Web Development",
  "thumbnail": "image-url",
  "shortDescription": "One line summary",
  "techStack": ["Next.js", "Tailwind", "Supabase"],
  "liveUrl": "https://...",
  "githubUrl": "https://...",
  "caseStudy": {
    "overview": "...",
    "problem": "...",
    "solution": "...",
    "outcome": "..."
  }
}
```

---

## 🔗 Services Booking Integration

- The `"Hire Me"` and `"Book a Session"` buttons should link to: `[YOUR BOOKING/SERVICES PAGE URL]`
  - Examples: Calendly, Toptal, your own Razorpay/Stripe checkout, Fiverr Pro, Contra
- On the `/services` page, briefly describe what you offer and at what price point
- Include a trust signal: number of clients served, years of experience, or a testimonial quote

---

## 📱 Responsive Design Requirements

- **Mobile First** — design for 375px wide screens, scale up
- Hamburger menu on mobile (animated open/close)
- Project grid collapses to single column on mobile
- All animations should respect `prefers-reduced-motion` media query
- Touch-friendly tap targets (minimum 44×44px)
- Test on: iPhone SE, iPhone 14, iPad, 1440px desktop, 1920px widescreen

---

## ⚡ Performance & SEO

- Lighthouse score target: **90+ on all metrics**
- Use `next/image` for all images (auto WebP, lazy loading)
- Use `next/font` for zero layout shift on fonts
- Meta tags for all pages: title, description, OG image
- `sitemap.xml` and `robots.txt` auto-generated
- Open Graph image for social sharing previews
- Semantic HTML: proper `<h1>–<h6>`, `<main>`, `<article>`, `<section>` usage

---

## 🚢 Deployment

1. **Host on [Vercel](https://vercel.com)** — connect GitHub repo, auto-deploys on push
2. **Custom Domain** — connect `[yourdomain.com]` via Vercel DNS settings
3. **Environment Variables** in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_BOOKING_URL`

---

## 📦 File & Folder Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, global styles
│   ├── page.tsx            # Home page
│   ├── projects/
│   │   ├── page.tsx        # Projects grid
│   │   └── [slug]/page.tsx # Case study
│   ├── services/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                 # Reusable UI (Button, Card, Tag)
│   ├── sections/           # Page sections (Hero, About, Projects, etc.)
│   ├── layout/             # Navbar, Footer
│   └── animations/         # Reusable motion wrappers
├── lib/
│   ├── sanity.ts           # CMS client
│   └── utils.ts
├── public/
│   ├── images/
│   └── fonts/
├── styles/
│   └── globals.css
└── sanity/                 # Sanity studio (if using Sanity CMS)
```

---

## ✅ Checklist Before Launch

- [ ] All placeholder text replaced with real content
- [ ] Booking link (`[YOUR BOOKING URL]`) is correct and working
- [ ] Contact form sends emails correctly
- [ ] All project images optimized (WebP, under 200KB each)
- [ ] Mobile tested on real devices
- [ ] Lighthouse score 90+
- [ ] OG image set for social sharing
- [ ] Custom domain connected
- [ ] Analytics installed
- [ ] `prefers-reduced-motion` respected

---

*Built with intention. Delivered with obsession.*
