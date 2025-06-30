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
- **Deployment**: Upload files to web server or use GitHub Pages

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
- Form submission with loading states
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

## Form Handling

The contact form currently uses a placeholder submission (setTimeout simulation). For production:
- Replace the simulated submission in `initForm()` with actual API endpoint
- Add server-side validation and email sending functionality
- Consider adding form validation and error handling

## Performance Considerations

- **Video Background**: Compressed MP4 with autoplay and loop
- **Image Optimization**: PNG images could be converted to WebP for better compression
- **CSS**: Efficient use of CSS custom properties and minimal duplicate styles
- **JavaScript**: Vanilla JS with efficient event handling and Intersection Observer

## Browser Compatibility

- Modern browsers with CSS Grid and Flexbox support
- Requires backdrop-filter support for glassmorphism effects
- Uses ES6+ JavaScript features (arrow functions, const/let, template literals)