# Kumar Sankalp Portfolio

## Overview
Modern, professional portfolio website for Kumar Sankalp - Full Stack Developer, featuring a responsive design with smooth animations and interactive sections.

## Current State
- ✅ Frontend: React + Vite running on port 5000
- ✅ Professional hero section with profile photo
- ✅ About, Skills, Projects, Education, and Contact sections
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design with Tailwind CSS
- ✅ Web3Forms integration for contact form
- ✅ Downloadable resume (PDF)
- ✅ All assets properly imported and displayed

## Recent Changes (November 23, 2024)
- Built complete modern portfolio from scratch using user-provided assets
- Imported professional photo, CabNest project logo, and resume PDF
- Created responsive Hero section with profile photo
- Built comprehensive sections: About, Skills, Projects, Education, Contact
- Integrated Web3Forms for contact form functionality
- Added smooth scroll navigation and animations
- Implemented modern gradient design with blue accent color
- Removed all unnecessary documentation files
- Configured for frontend-only deployment (no backend needed)

## Project Architecture

### Frontend (`/src`)
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Port**: 5000 (Replit webview)

### Components
- `Navbar.jsx` - Fixed navigation with smooth scroll
- `Footer.jsx` - Social links and copyright

### Sections
- `Hero.jsx` - Introduction with profile photo and CTA buttons
- `About.jsx` - Personal summary and contact information
- `Skills.jsx` - Technology stack with icons
- `Projects.jsx` - CabNest project with logo and details
- `Education.jsx` - Education history and certifications
- `Contact.jsx` - Contact form with Web3Forms integration

## Key Files
- `src/main.jsx` - React entry point
- `src/App.jsx` - Main application component
- `src/index.css` - Global styles with Tailwind
- `vite.config.mjs` - Vite configuration (port 5000, host 0.0.0.0)
- `public/Kumar-Sankalp-Resume.pdf` - Downloadable resume
- `src/assets/images/profile.jpg` - Profile photo
- `src/assets/images/cabnest-logo.webp` - Project logo

## Running the Application

```bash
npm run dev
```

The frontend will start on port 5000.

## Contact Form Setup

To enable the contact form:
1. Visit https://web3forms.com/
2. Create free account and get access key
3. Update `src/sections/Contact.jsx` with your key
4. Replace `'YOUR_WEB3FORMS_KEY'` with actual key

## Deployment
- **Target**: Vercel (static site)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Type**: Frontend only (no backend required)

## User Information
- **Name**: Kumar Sankalp
- **Email**: kumarsankalp2310@gmail.com
- **Phone**: +91 7303506822
- **Location**: Delhi, India
- **Title**: Full Stack Developer
- **Skills**: Java, Spring Boot, React.js, MySQL, MongoDB, AWS
- **Featured Project**: CabNest - Taxi Booking Application (2024)
