/* ============================================
   BOBBESPOJA - DISCOMFORT CORE TYPING
   Máquina de escribir lenta, inquietante
   ============================================ */

(function() {
    const typingElement = document.querySelector('.typing-text-dark');
    if (!typingElement) return;

    const phrases = [
        'Hay silencios que pesan más que las palabras...',
        'La soledad no siempre viene de estar solo...',
        'A veces el ruido interno es ensordecedor...',
        'No estás roto. Estás siendo humano.'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    let pauseCounter = 0;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 80 + Math.random() * 40; // Velocidad variable al borrar
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120 + Math.random() * 80; // Velocidad variable al escribir
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 4000; // Pausa larga al terminar
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 1500; // Pausa antes de empezar
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 2000);
})();
