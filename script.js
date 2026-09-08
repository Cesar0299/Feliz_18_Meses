// Corazones flotantes de fondo automáticos
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('heart-container');
    if (container) {
        const symbols = ['❤️', '💖', '💕', '💓', '✨'];
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(heart);
        }
    }
});

// Juegos artificiales principales
function fireworksMaster() {
    if (typeof confetti === 'function') {
        const count = 200;
        const defaults = { origin: { y: 0.7 } };
        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }
        fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff4d6d', '#ffd700'] });
        fire(0.2, { spread: 60, colors: ['#ffffff', '#ff80ab'] });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, colors: ['#ffd700'] });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }
}

// Explosión de Corazones en Carta
function heartExplosion(e) {
    if (typeof confetti === 'function') {
        const x = e ? e.clientX / window.innerWidth : 0.5;
        const y = e ? e.clientY / window.innerHeight : 0.5;
        confetti({
            particleCount: 80,
            spread: 100,
            origin: { x, y },
            colors: ['#ff4d6d', '#ff80ab', '#ff0055']
        });
    }
}

// Destello y Brillo en Promesas
function sparkleBurst(e) {
    if (typeof confetti === 'function') {
        const x = e ? e.clientX / window.innerWidth : 0.5;
        const y = e ? e.clientY / window.innerHeight : 0.5;
        confetti({
            particleCount: 100,
            spread: 80,
            origin: { x, y },
            colors: ['#ffd700', '#ffffff', '#fffbbd']
        });
    }
}

// Lluvia de Rosas en Razones
function roseRain() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 120,
            spread: 120,
            origin: { y: 0.2 },
            colors: ['#ff4d6d', '#e60039', '#ff80ab']
        });
    }
}

// Flash y Cámara en Galería
function flashExplosion(e) {
    if (typeof confetti === 'function') {
        const x = e ? e.clientX / window.innerWidth : 0.5;
        const y = e ? e.clientY / window.innerHeight : 0.5;
        confetti({
            particleCount: 60,
            spread: 70,
            origin: { x, y },
            colors: ['#00e5ff', '#ffffff', '#ffd700']
        });
    }
}

// Manejo de clicks en menú con efecto antes de cambiar de página
function triggerEffect(event, type, targetUrl) {
    event.preventDefault();
    if (type === 'loveLetter') heartExplosion(event);
    if (type === 'ringGlow') sparkleBurst(event);
    if (type === 'roseShower') roseRain();
    if (type === 'flashCamera') flashExplosion(event);
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 450);
}