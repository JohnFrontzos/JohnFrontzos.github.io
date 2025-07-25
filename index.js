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

        try {
            // Get form data
            const formData = new FormData(contactForm);
            
            // Submit to Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                // Success message
                showMessage(
                    currentLanguage === 'en' ? 
                        'Thank you for your message! We\'ll get back to you soon.' : 
                        'Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε σύντομα μαζί σας.',
                    'success'
                );
                
                // Reset form
                contactForm.reset();
                
                // Close modal after short delay
                setTimeout(() => {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }, 2000);
            } else {
                throw new Error(result.message || 'Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Error message
            showMessage(
                currentLanguage === 'en' ? 
                    'Sorry, there was an error sending your message. Please try again.' : 
                    'Λυπούμαστε, υπήρξε σφάλμα κατά την αποστολή του μηνύματός σας. Παρακαλώ δοκιμάστε ξανά.',
                'error'
            );
        } finally {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

// Show success/error messages
function showMessage(message, type) {
    // Create message element if it doesn't exist
    let messageEl = document.getElementById('form-message');
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.id = 'form-message';
        messageEl.style.cssText = `
            padding: 15px;
            margin: 15px 0;
            border-radius: 8px;
            font-weight: 500;
            text-align: center;
            transition: all 0.3s ease;
        `;
        contactForm.appendChild(messageEl);
    }
    
    // Style based on type
    if (type === 'success') {
        messageEl.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
        messageEl.style.color = '#22c55e';
        messageEl.style.border = '1px solid rgba(34, 197, 94, 0.3)';
    } else {
        messageEl.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        messageEl.style.color = '#ef4444';
        messageEl.style.border = '1px solid rgba(239, 68, 68, 0.3)';
    }
    
    messageEl.textContent = message;
    messageEl.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 5000);
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


// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initModal();
    initForm();
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarScroll();
    initParallaxEffect();
    
    // Set initial language
    updateLanguage();
    
    console.log('Frontz Technologies website loaded successfully!');
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});




