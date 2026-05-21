/* ============================================
   BOBBESPOJA - GLITCH EFFECTS JS
   Efectos de glitch interactivos
   ============================================ */

(function() {
    // Glitch aleatorio en elementos con clase glitch
    const glitchElements = document.querySelectorAll('.glitch-title, .glitch-text');

    function randomGlitch() {
        const element = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        if (element) {
            element.style.animation = 'none';
            element.offsetHeight; // Trigger reflow
            element.style.animation = '';
        }

        // Programar siguiente glitch
        setTimeout(randomGlitch, Math.random() * 5000 + 3000);
    }

    setTimeout(randomGlitch, 3000);

    // Efecto de glitch al hacer hover en cards
    const cards = document.querySelectorAll('.about-card, .hobby-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.filter = 'hue-rotate(90deg)';
            setTimeout(() => {
                card.style.filter = 'hue-rotate(180deg)';
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
            document.body.style.filter = 'hue-rotate(10deg)';
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                document.body.style.filter = 'none';
            }, 100);
        }

        lastScrollY = currentScrollY;
    });

    // Efecto de ruido en click
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
            background: rgba(255, 0, 110, 0.2);
            pointer-events: none;
            z-index: 9999;
            animation: click-glitch 0.3s ease-out forwards;
        `;

        document.body.appendChild(glitch);

        setTimeout(() => glitch.remove(), 300);
    }

    // Añadir keyframe dinámico
    const style = document.createElement('style');
    style.textContent = `
        @keyframes click-glitch {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.5) rotate(180deg); opacity: 0.5; }
            100% { transform: scale(2) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
})();
