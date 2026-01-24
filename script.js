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

// Observe all content sections
document.querySelectorAll('.content-section').forEach(section => {
    observer.observe(section);
});

// Section highlight on scroll (only for index page with sections)
if (document.querySelectorAll('section[id]').length > 1) {
    const navObserverOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -60% 0px'
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${sectionId}` || href === `index.html#${sectionId}`) {
                        // Don't override the page-level active state
                        // Just for visual feedback on scroll
                    }
                });
            }
        });
    }, navObserverOptions);

    document.querySelectorAll('section[id]').forEach(section => {
        navObserver.observe(section);
    });
}
