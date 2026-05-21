/* ============================================
   BOBBESPOJA - TYPING JS
   Efecto de máquina de escribir
   ============================================ */

(function() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const phrases = [
        'Estudiante de Psicología Autodidacta',
        'Amante de la Música y el Arte',
        'Ciclista y Caminante',
        'Gamer Creativo',
        'Futuro Psicólogo'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000; // Pausa al terminar
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pausa antes de empezar
        }

        setTimeout(type, typingSpeed);
    }

    // Iniciar después de un delay
    setTimeout(type, 1000);
})();
