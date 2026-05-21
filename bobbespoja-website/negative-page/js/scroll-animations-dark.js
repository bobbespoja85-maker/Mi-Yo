/* ============================================
   BOBBESPOJA - SCROLL ANIMATIONS DARK JS
   Animaciones al hacer scroll - versión oscura
   ============================================ */

(function() {
    const animatedElements = document.querySelectorAll(
        '.reflection-card, .thought-item, .vent-box, .message-container, .section-header-dark'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.classList.contains('thought-item')) {
                    const parent = entry.target.parentElement;
                    const siblings = Array.from(parent.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.15}s`;
                }

                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach((el, index) => {
        if (el.classList.contains('section-header-dark')) {
            el.classList.add('fade-up');
        } else if (el.classList.contains('reflection-card')) {
            el.classList.add('blur-in');
        } else if (el.classList.contains('thought-item')) {
            el.classList.add('fade-up');
        } else if (el.classList.contains('vent-box')) {
            el.classList.add('scale-in');
        } else {
            el.classList.add('fade-up');
        }

        observer.observe(el);
    });

    // Parallax para void-rings
    const voidRings = document.querySelector('.void-rings');
    if (voidRings) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            voidRings.style.transform = `translateY(${scrollY * 0.3}px)`;
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(5, 5, 8, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.7)';
        } else {
            navbar.style.background = 'rgba(5, 5, 8, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
})();
