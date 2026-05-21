/* ============================================
   BOBBESPOJA - SCROLL ANIMATIONS JS
   Animaciones al hacer scroll
   ============================================ */

(function() {
    // Seleccionar elementos a animar
    const animatedElements = document.querySelectorAll(
        '.about-card, .hobby-card, .project-showcase, .contact-card, .section-header'
    );

    // Configuración del observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Callback del observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Añadir delay escalonado para cards
                if (entry.target.classList.contains('about-card') || 
                    entry.target.classList.contains('hobby-card')) {
                    const parent = entry.target.parentElement;
                    const siblings = Array.from(parent.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }

                observer.unobserve(entry.target);
            }
        });
    };

    // Crear observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Aplicar clases iniciales y observar
    animatedElements.forEach((el, index) => {
        // Determinar tipo de animación basado en posición
        const rect = el.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        if (el.classList.contains('section-header')) {
            el.classList.add('fade-up');
        } else if (rect.left < viewportWidth / 3) {
            el.classList.add('fade-right');
        } else if (rect.left > viewportWidth * 2 / 3) {
            el.classList.add('fade-left');
        } else {
            el.classList.add('fade-up');
        }

        observer.observe(el);
    });

    // Animación de parallax para shapes
    const shapes = document.querySelectorAll('.shape');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        shapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            shape.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
})();
