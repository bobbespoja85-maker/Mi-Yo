/* ============================================
   BOBBESPOJA - DISCOMFORT CORE GLITCH EFFECTS
   Efectos de glitch inquietantes y lentos
   ============================================ */

(function() {
    const glitchElements = document.querySelectorAll('.glitch-title-dark, .glitch-text');

    function randomGlitch() {
        const element = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        if (element) {
            element.style.animation = 'none';
            element.offsetHeight;
            element.style.animation = '';
        }

        setTimeout(randomGlitch, Math.random() * 8000 + 5000);
    }

    setTimeout(randomGlitch, 5000);

    // Efecto de glitch al hacer hover - más sutil
    const cards = document.querySelectorAll('.reflection-card, .thought-item');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.filter = 'hue-rotate(15deg) brightness(1.1)';
            setTimeout(() => {
                card.style.filter = 'hue-rotate(-15deg) brightness(0.9)';
            }, 80);
            setTimeout(() => {
                card.style.filter = 'none';
            }, 160);
        });
    });

    // Efecto de distorsión en scroll rápido
    let lastScrollY = 0;
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDiff = Math.abs(currentScrollY - lastScrollY);

        if (scrollDiff > 40) {
            document.body.style.filter = 'hue-rotate(15deg) contrast(1.05)';
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                document.body.style.filter = 'none';
            }, 200);
        }

        lastScrollY = currentScrollY;
    });

    // Efecto de glitch en click
    document.addEventListener('click', (e) => {
        createClickGlitch(e.clientX, e.clientY);
    });

    function createClickGlitch(x, y) {
        const glitch = document.createElement('div');
        glitch.style.cssText = `
            position: fixed;
            left: ${x - 60}px;
            top: ${y - 60}px;
            width: 120px;
            height: 120px;
            background: rgba(204, 51, 0, 0.15);
            pointer-events: none;
            z-index: 9999;
            animation: click-glitch-dark 0.5s ease-out forwards;
        `;

        document.body.appendChild(glitch);

        setTimeout(() => glitch.remove(), 500);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes click-glitch-dark {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.3) rotate(180deg); opacity: 0.3; }
            100% { transform: scale(2) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Efecto de parpadeo aleatorio en textos - más lento
    const texts = document.querySelectorAll('.reflection-text, .thought-content p');

    setInterval(() => {
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        if (randomText) {
            randomText.style.opacity = '0.6';
            setTimeout(() => {
                randomText.style.opacity = '1';
            }, 150);
        }
    }, 12000);

    // Efecto de "respiración" en el body - sutil
    setInterval(() => {
        document.body.style.filter = 'brightness(0.98)';
        setTimeout(() => {
            document.body.style.filter = 'brightness(1)';
        }, 100);
    }, 15000);
})();
