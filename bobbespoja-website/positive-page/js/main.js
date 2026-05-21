/* ============================================
   BOBBESPOJA - MAIN JS
   Script principal y utilidades
   ============================================ */

(function() {
    'use strict';

    // Prevenir click derecho (opcional, estilo Yabujin)
    // document.addEventListener('contextmenu', e => e.preventDefault());

    // Console easter egg
    console.log('%c BOBBESPOJA ', 'background: #ff006e; color: #fff; font-size: 20px; font-family: monospace;');
    console.log('%c No es lo mismo sentirse solo que estar solo ', 'color: #8338ec; font-size: 14px; font-style: italic;');

    // Añadir clase loaded al body
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Parallax mejorado para elementos
    const parallaxElements = document.querySelectorAll('.floating-shapes');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Efecto de sonido visual (sin audio real, solo visual)
    const musicBars = document.querySelectorAll('.bar');
    if (musicBars.length > 0) {
        setInterval(() => {
            musicBars.forEach(bar => {
                const randomHeight = Math.random() * 40 + 10;
                bar.style.height = `${randomHeight}px`;
            });
        }, 200);
    }

    // Cursor personalizado (opcional)
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #ff006e;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    cursorDot.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #ff006e;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10001;
    `;
    document.body.appendChild(cursorDot);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursorDot.style.left = e.clientX - 2 + 'px';
        cursorDot.style.top = e.clientY - 2 + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });

    // Ocultar cursor personalizado en móvil
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
    }

    // Efecto de distorsión en hover de links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = '#06ffa5';
        });

        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#ff006e';
        });
    });
})();
