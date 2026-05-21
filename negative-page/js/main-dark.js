/* ============================================
   BOBBESPOJA - MAIN DARK JS
   Script principal - versión oscura
   ============================================ */

(function() {
    'use strict';

    // Console easter egg oscuro
    console.log('%c BOBBESPOJA ', 'background: #8b0000; color: #000; font-size: 20px; font-family: monospace;');
    console.log('%c En la oscuridad también hay belleza ', 'color: #ff0040; font-size: 14px; font-style: italic;');

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
        border: 2px solid #8b0000;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot-dark';
    cursorDot.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #8b0000;
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

    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
    }

    // Efecto de hover en links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = '#ff0040';
        });

        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#8b0000';
        });
    });

    // Efecto de parpadeo en la página entera (muy sutil)
    setInterval(() => {
        if (Math.random() > 0.95) {
            document.body.style.filter = 'brightness(0.98)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 50);
        }
    }, 5000);
})();
