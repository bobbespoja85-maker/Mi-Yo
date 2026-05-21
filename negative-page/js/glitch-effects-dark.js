/* ============================================
   BOBBESPOJA - GLITCH EFFECTS DARK JS
   Efectos de glitch oscuros
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

        setTimeout(randomGlitch, Math.random() * 6000 + 4000);
    }

    setTimeout(randomGlitch, 4000);

    // Efecto de glitch al hacer hover
    const cards = document.querySelectorAll('.reflection-card, .thought-item');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.filter = 'hue-rotate(30deg) brightness(1.2)';
            setTimeout(() => {
                card.style.filter = 'hue-rotate(-30deg) brightness(0.8)';
            }, 50);
            setTimeout(() => {
                card.style.filter = 'none';
            }, 100);
        });
    });

    // Efecto de distorsión en scroll rápido
    let lastScrollY = 0;
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDiff = Math.abs(currentScrollY - lastScrollY);

        if (scrollDiff > 50) {
            document.body.style.filter = 'hue-rotate(20deg) contrast(1.1)';
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                document.body.style.filter = 'none';
            }, 150);
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
            left: ${x - 50}px;
            top: ${y - 50}px;
            width: 100px;
            height: 100px;
            background: rgba(139, 0, 0, 0.2);
            pointer-events: none;
            z-index: 9999;
            animation: click-glitch-dark 0.4s ease-out forwards;
        `;

        document.body.appendChild(glitch);

        setTimeout(() => glitch.remove(), 400);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes click-glitch-dark {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.5) rotate(180deg); opacity: 0.4; }
            100% { transform: scale(2) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Efecto de parpadeo aleatorio en textos
    const texts = document.querySelectorAll('.reflection-text, .thought-content p');

    setInterval(() => {
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        if (randomText) {
            randomText.style.opacity = '0.5';
            setTimeout(() => {
                randomText.style.opacity = '1';
            }, 100);
        }
    }, 8000);
})();
