// Minimal, intentional JavaScript for Capital Finance Club website

// Handle navigation active states based on current page
function updateNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');

        const href = link.getAttribute('href');

        // Check if link points to current page
        if (href === currentPage ||
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === 'programs.html' && href === 'programs.html')) {
            link.classList.add('active');
        }
    });
}

// Run on page load
updateNavigation();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Extremely subtle fade-in on scroll for content sections
// Note: Progressive enhancement class 'js' is added via inline script in <head>
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all content sections (defensive check for page compatibility)
const contentSections = document.querySelectorAll('.content-section');
if (contentSections.length > 0) {
    contentSections.forEach(section => {
        observer.observe(section);
    });
}

// FAQ Accordion Functionality
function initFAQAccordion() {
    const accordionButtons = document.querySelectorAll('.faq-accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Toggle the current accordion
            button.setAttribute('aria-expanded', !isExpanded);
        });

        // Keyboard support (Enter and Space)
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
}

// Initialize FAQ accordion if on FAQ page
if (document.querySelector('.faq-accordion')) {
    initFAQAccordion();
}
