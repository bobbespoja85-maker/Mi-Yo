/* ============================================
   BOBBESPOJA - DISCOMFORT CORE PARTICLES
   Partículas lentas, inquietantes
   ============================================ */

(function() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    // Configuración Discomfort Core - más lenta, más inquietante
    const config = {
        particleCount: 40,
        connectionDistance: 100,
        mouseDistance: 120,
        colors: ['#cc3300', '#996600', '#663399', '#ff6600', '#4d4d4d'],
        minSpeed: 0.1,
        maxSpeed: 0.5,
        minSize: 1,
        maxSize: 2
    };

    let mouse = { x: null, y: null };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
            this.speedX = (Math.random() - 0.5) * config.maxSpeed * 2;
            this.speedY = (Math.random() - 0.5) * config.maxSpeed * 2;
            this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
            this.opacity = Math.random() * 0.2 + 0.05;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Pulso de opacidad - respiración lenta
            this.pulsePhase += 0.01;
            this.currentOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.05;

            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.mouseDistance) {
                    const force = (config.mouseDistance - distance) / config.mouseDistance;
                    this.speedX += (dx / distance) * force * 0.2;
                    this.speedY += (dy / distance) * force * 0.2;
                }
            }

            const speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
            if (speed > config.maxSpeed) {
                this.speedX = (this.speedX / speed) * config.maxSpeed;
                this.speedY = (this.speedY / speed) * config.maxSpeed;
            }

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = Math.max(0, this.currentOpacity);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.connectionDistance) {
                    const opacity = (1 - distance / config.connectionDistance) * 0.1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = particles[i].color;
                    ctx.globalAlpha = opacity;
                    ctx.lineWidth = 0.3;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawConnections();

        animationId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);

    init();
    animate();

    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationId);
    });
})();
