# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static multilingual (Greek/English) website for Frontz Technologies, an AI consulting company. The site showcases AI services, case studies, and company information with modern glassmorphism design and smooth animations.

## Architecture

- **Frontend**: Pure HTML/CSS/JavaScript (no frameworks)
- **Styling**: CSS with glassmorphism design using CSS custom properties
- **Languages**: Bilingual support (Greek/English) with dynamic language switching
- **Assets**: Video background, PNG images for case studies
- **Structure**: Single-page application with modal contact form
- **Form Backend**: Web3Forms API integration for contact form submissions
- **Deployment**: Cloudflare Pages with automatic deployment from GitHub

## Key Files

- `index.html` - Main HTML structure with semantic sections and bilingual content
- `index.css` - Complete styling with glassmorphism effects, responsive design, and animations
- `index.js` - All JavaScript functionality including language switching, modal management, and scroll effects
- `llms.txt` - Company information and services documentation
- `images/` - Contains background video and case study images

## Development Commands

Since this is a static website, no build process is required:

- **Local Development**: Open `index.html` directly in browser or use a local server
- **Testing**: Manual testing in browser (no automated tests configured)
- **Deployment**: Automatic deployment via Cloudflare Pages from `frontz-tech` branch
- **Git Commands**: 
  - `git add .` - Stage changes
  - `git commit -m "message"` - Commit changes
  - `git push origin frontz-tech` - Deploy to production

## Core Functionality

### Language System
- Dual language support (Greek/English) using `data-en` and `data-el` attributes
- Dynamic content switching via JavaScript without page reload
- Translation state managed in `currentLanguage` variable

### UI Components
- **Glassmorphism Design**: Extensive use of backdrop-filter and rgba backgrounds
- **Modal System**: Contact form modal with overlay and keyboard controls
- **Smooth Scrolling**: Navigation links with smooth scroll behavior
- **Scroll Animations**: Intersection Observer for fade-in effects
- **Parallax Effects**: Animated background shapes with scroll-based transforms

### Interactive Elements
- Language toggle button (top-right)
- Contact modal triggered by CTA buttons
- Smooth navigation scrolling
- Real form submission with Web3Forms API integration
- Loading states and success/error feedback
- Navbar transparency changes on scroll

## Design System

### CSS Variables
- Glass effects: `--glass-bg`, `--glass-border`, `--glass-shadow`
- Colors: Black/white/gray scale with alpha transparency
- Typography: Inter font family with weight variations
- Spacing: Consistent padding and margin using custom properties

### Responsive Breakpoints
- Desktop: Default layout
- Tablet: 768px and below (simplified navigation)
- Mobile: 480px and below (single column layouts)

## Content Management

- **Bilingual Content**: All user-facing text has both Greek and English versions
- **SEO Optimization**: Comprehensive meta tags, structured data (JSON-LD), and Open Graph tags
- **Accessibility**: Semantic HTML structure and proper form labels

## Contact Form Integration

The contact form uses **Web3Forms API** for real email notifications:

### Configuration
- **API Key**: `0e01bbc2-3165-47e2-910d-e5b5f4c295c2` (configured in HTML)
- **Endpoint**: `https://api.web3forms.com/submit`
- **Email Subject**: "New Contact Form Submission from Frontz Technologies Website"
- **Sender Name**: "Frontz Technologies Contact Form"

### Features
- Real-time form submission with proper error handling
- Bilingual success/error messages (Greek/English)
- Spam protection via honeypot field (`botcheck`)
- Loading states and user feedback
- Automatic email notifications to registered email address

### Form Fields
- **Name**: Required text input
- **Email**: Required email input with validation
- **Message**: Required textarea
- **Hidden Fields**: access_key, subject, from_name, botcheck (spam protection)

### Security
- Web3Forms API key is domain-restricted (safe for client-side use)
- Honeypot field prevents basic spam submissions
- Client-side and server-side validation

## Performance Considerations

- **Video Background**: Compressed MP4 with autoplay and loop
- **Image Optimization**: PNG images could be converted to WebP for better compression
- **CSS**: Efficient use of CSS custom properties and minimal duplicate styles
- **JavaScript**: Vanilla JS with efficient event handling and Intersection Observer

## Browser Compatibility

- Modern browsers with CSS Grid and Flexbox support
- Requires backdrop-filter support for glassmorphism effects
- Uses ES6+ JavaScript features (arrow functions, const/let, template literals)
- Fetch API for form submissions (modern browser support)

## Deployment Information

### Git Configuration
- **Repository**: https://github.com/JohnFrontzos/JohnFrontzos.github.io.git
- **Branch**: `frontz-tech`
- **Git User**: John Frontzos <john@frontz.tech>

### Cloudflare Pages
- **Auto-deployment**: Enabled from `frontz-tech` branch
- **Build Command**: None (static site)
- **Output Directory**: Root directory
- **Deploy Time**: ~1-2 minutes after push

### Domain
- **Production URL**: https://frontz.tech
- **Staging**: Automatic preview deployments for non-production branches

## Testing Contact Form

After deployment, test the contact form by:
1. Visiting the live site
2. Clicking "Contact Us" or "Let's Talk" buttons
3. Filling out the form with test data
4. Verifying email notification receipt
5. Checking success message display

Email notifications should arrive within seconds of form submission.