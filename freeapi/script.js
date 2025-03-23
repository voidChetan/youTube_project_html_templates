// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Star Animation
function createStar(x, y) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    document.getElementById('stars-container').appendChild(star);

    // Remove star after animation
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Mouse move event handler
let throttleTimer;
document.addEventListener('mousemove', (e) => {
    if (throttleTimer) return;

    throttleTimer = setTimeout(() => {
        throttleTimer = null;
        // Create 3 stars at slightly different positions
        for (let i = 0; i < 3; i++) {
            createStar(
                e.clientX + (Math.random() - 0.5) * 20,
                e.clientY + (Math.random() - 0.5) * 20
            );
        }
    }, 50); // Throttle to 50ms
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#024950';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Newsletter subscription handling
document.querySelector('.newsletter input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        this.value = '';
    }
});