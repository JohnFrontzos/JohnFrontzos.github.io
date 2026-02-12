// --- State ---
let currentLanguage = 'en';

// --- DOM ---
const modal = document.getElementById('contact-modal');
const contactForm = document.getElementById('contact-form');
const navbar = document.getElementById('navbar');

// --- Language Toggle ---
function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');

    langToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'el' : 'en';
        langText.textContent = currentLanguage === 'en' ? 'EN' : 'ΕΛ';
        updateLanguage();
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-el]');
    elements.forEach(el => {
        const text = el.getAttribute(currentLanguage === 'en' ? 'data-en' : 'data-el');
        // Use innerHTML for elements that contain HTML tags
        if (text.includes('<br>') || text.includes('<a ')) {
            el.innerHTML = text;
        } else {
            el.textContent = text;
        }
    });
}

// --- Modal ---
function initModal() {
    const triggers = document.querySelectorAll('.btn-primary, .nav-cta');
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    triggers.forEach(btn => {
        // Skip form submit button
        if (btn.closest('form')) return;
        btn.addEventListener('click', (e) => {
            // Skip anchor links
            if (btn.tagName === 'A') return;
            e.preventDefault();
            openModal();
        });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// --- Form ---
function initForm() {
    const submitBtn = contactForm.querySelector('.btn-primary');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        try {
            const formData = new FormData(contactForm);
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            if (result.success) {
                showMessage(
                    currentLanguage === 'en'
                        ? 'Message sent! We\'ll get back to you within 24 hours.'
                        : 'Το μήνυμα στάλθηκε! Θα απαντήσουμε εντός 24 ωρών.',
                    'success'
                );
                contactForm.reset();
                setTimeout(closeModal, 2000);
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Form error:', error);
            showMessage(
                currentLanguage === 'en'
                    ? 'Something went wrong. Please try again.'
                    : 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.',
                'error'
            );
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

function showMessage(message, type) {
    let el = document.getElementById('form-message');
    if (!el) {
        el = document.createElement('div');
        el.id = 'form-message';
        el.style.cssText = `
            padding: 12px 16px;
            margin-top: 8px;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 500;
            text-align: center;
        `;
        contactForm.appendChild(el);
    }

    el.style.background = type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)';
    el.style.color = type === 'success' ? '#22c55e' : '#ef4444';
    el.style.border = type === 'success' ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)';
    el.textContent = message;
    el.style.display = 'block';

    setTimeout(() => { el.style.display = 'none'; }, 5000);
}

// --- Smooth Scroll ---
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// --- Navbar Scroll ---
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}

// --- Scroll Animations ---
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
        '.service-card, .work-card, .why-card, .story-body, .section-header'
    ).forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initModal();
    initForm();
    initSmoothScroll();
    initNavbarScroll();
    initScrollAnimations();
    updateLanguage();
});
