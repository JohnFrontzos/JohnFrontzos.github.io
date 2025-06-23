// Language translations
const translations = {
    en: {
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-case-studies': 'Case Studies',
        'nav-why-choose-us': 'Why Choose Us',
        'nav-contact': 'Contact Us',
        'hero-title': 'Accelerate your business with AI',
        'hero-subtitle': 'Transform your operations with cutting-edge AI solutions tailored to your unique needs.',
        'hero-cta': "Let's Talk",
        'about-title': 'About Us',
        'services-title': 'What We Do',
        'case-studies-title': 'Case Studies',
        'why-choose-us-title': 'Why Choose Us',
        'advantages-title': 'Our Advantages',
        'modal-title': "Let's Talk",
        'modal-subtitle': 'Ready to transform your business with AI? Get in touch with us today.',
        'form-name': 'Your Name',
        'form-email': 'Email Address',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',
        'footer-text': '© 2024 Frontz Technologies. All rights reserved.'
    },
    el: {
        'nav-about': 'Σχετικά με εμάς',
        'nav-services': 'Υπηρεσίες',
        'nav-case-studies': 'Μελέτες Περίπτωσης',
        'nav-why-choose-us': 'Γιατί να μας επιλέξετε',
        'nav-contact': 'Επικοινωνήστε μαζί μας',
        'hero-title': 'Επιταχύνετε την επιχείρησή σας με AI',
        'hero-subtitle': 'Μεταμορφώστε τις λειτουργίες σας με προηγμένες λύσεις AI προσαρμοσμένες στις μοναδικές σας ανάγκες.',
        'hero-cta': 'Ας Μιλήσουμε',
        'about-title': 'Σχετικά με εμάς',
        'services-title': 'Τι Κάνουμε',
        'case-studies-title': 'Μελέτες Περίπτωσης',
        'why-choose-us-title': 'Γιατί να μας επιλέξετε',
        'advantages-title': 'Τα Πλεονεκτήματά μας',
        'modal-title': 'Ας Μιλήσουμε',
        'modal-subtitle': 'Έτοιμοι να μεταμορφώσετε την επιχείρησή σας με AI; Επικοινωνήστε μαζί μας σήμερα.',
        'form-name': 'Το Όνομά σας',
        'form-email': 'Διεύθυνση Email',
        'form-message': 'Το Μήνυμά σας',
        'form-submit': 'Αποστολή Μηνύματος',
        'footer-text': '© 2024 Frontz Technologies. Όλα τα δικαιώματα διατηρούνται.'
    }
};

// Global variables
let currentLanguage = 'en';
const modal = document.getElementById('contact-modal');
const contactForm = document.getElementById('contact-form');

// Language toggle functionality
function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');
    
    langToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'el' : 'en';
        langText.textContent = currentLanguage === 'en' ? 'EN' : 'ΕΛ';
        updateLanguage();
    });
}

// Update all text elements with current language
function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-el]');
    elements.forEach(element => {
        const key = currentLanguage === 'en' ? 'data-en' : 'data-el';
        element.textContent = element.getAttribute(key);
    });
}

// Modal functionality
function initModal() {
    const ctaButtons = document.querySelectorAll('.hero-cta, .nav-cta');
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    // Open modal
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Form submission
function initForm() {
    const submitBtn = contactForm.querySelector('.form-submit');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            alert(currentLanguage === 'en' ? 
                'Thank you for your message! We\'ll get back to you soon.' : 
                'Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε σύντομα μαζί σας.'
            );
            
            // Reset form
            contactForm.reset();
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            
            // Close modal
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 2000);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements that should animate
    const animatedElements = document.querySelectorAll(`
        .service-card,
        .feature-item,
        .case-study-card,
        .advantage-card,
        .about-text,
        .section-header
    `);

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.12)';
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.25)';
            navbar.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.08)';
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.15)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        }
    });
}

// Cursor following effect (bonus feature)
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .service-card, .feature-item, .advantage-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Parallax effect for hero shapes
function initParallaxEffect() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.3;
            shape.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.05}deg)`;
        });
    });
}

// Service card tilt effect
function initTiltEffect() {
    const cards = document.querySelectorAll('.service-card, .advantage-card, .case-study-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initModal();
    initForm();
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarScroll();
    initCursorEffect();
    initParallaxEffect();
    initTiltEffect();
    
    // Set initial language
    updateLanguage();
    
    console.log('Frontz Technologies website loaded successfully!');
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});




