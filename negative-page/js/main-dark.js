/* ============================================
   BOBBESPOJA - DISCOMFORT CORE MAIN JS
   Script principal - versión inquietante
   ============================================ */

(function() {
    'use strict';

    // Console easter egg
    console.log('%c BOBBESPOJA ', 'background: #cc3300; color: #000; font-size: 20px; font-family: monospace;');
    console.log('%c No es lo mismo sentirse solo que estar solo ', 'color: #996600; font-size: 14px; font-style: italic;');
    console.log('%c En la inquietud también hay verdad ', 'color: #663399; font-size: 12px;');

    // Añadir clase loaded al body
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Cursor personalizado oscuro
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor-dark';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #cc3300;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.15s ease, border-color 0.3s ease;
        mix-blend-mode: difference;
        opacity: 0.7;
    `;
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot-dark';
    cursorDot.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #cc3300;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10001;
        opacity: 0.7;
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

    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
    }

    // Efecto de hover en links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = '#ff6600';
        });

        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#cc3300';
        });
    });

    // Efecto de parpadeo en la página entera - muy sutil
    setInterval(() => {
        if (Math.random() > 0.92) {
            document.body.style.filter = 'brightness(0.97)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 80);
        }
    }, 8000);

    // Efecto de "latido" en el fondo
    const bodyPulse = document.createElement('div');
    bodyPulse.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9995;
        background: radial-gradient(circle at 50% 50%, rgba(204, 51, 0, 0.02) 0%, transparent 70%);
        animation: body-pulse 8s ease-in-out infinite;
    `;

    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes body-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
        }
    `;
    document.head.appendChild(pulseStyle);
    document.body.appendChild(bodyPulse);

    // Efecto de "ruido" visual periódico
    setInterval(() => {
        if (Math.random() > 0.85) {
            const noise = document.createElement('div');
            noise.style.cssText = `
                position: fixed;
                top: ${Math.random() * 100}%;
                left: 0;
                width: 100%;
                height: 2px;
                background: rgba(204, 51, 0, 0.3);
                pointer-events: none;
                z-index: 9999;
                animation: noise-line 0.3s ease-out forwards;
            `;
            document.body.appendChild(noise);
            setTimeout(() => noise.remove(), 300);
        }
    }, 6000);

    const noiseStyle = document.createElement('style');
    noiseStyle.textContent = `
        @keyframes noise-line {
            0% { opacity: 1; transform: scaleX(1); }
            100% { opacity: 0; transform: scaleX(0); }
        }
    `;
    document.head.appendChild(noiseStyle);
})();
