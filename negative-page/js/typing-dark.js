/* ============================================
   BOBBESPOJA - TYPING DARK JS
   Efecto de máquina de escribir oscuro
   ============================================ */

(function() {
    const typingElement = document.querySelector('.typing-text-dark');
    if (!typingElement) return;

    const phrases = [
        'Reflexiones sobre la soledad',
        'Pensamientos que no se dicen en voz alta',
        'La oscuridad también tiene algo que enseñar',
        'No estás solo en sentirte solo'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 60;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 3000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 800;
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1500);
})();
