// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0;
let fx = 0, fy = 0;

document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
});

function animateCursor() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top = fy + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effect on interactive elements
const hoverTargets = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-item');
hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

revealEls.forEach(el => revealObserver.observe(el));

// ===== FADE-IN ON SCROLL =====
const fadeEls = document.querySelectorAll('.about-label, .about-body, .section-label, .contact-form');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    fadeObserver.observe(el);
});

// ===== HERO ANIMATION ON LOAD =====
window.addEventListener('load', () => {
    document.querySelectorAll('.hero-title .line').forEach((line, i) => {
        setTimeout(() => {
            line.style.transform = 'translateY(0)';
        }, 200 + i * 120);
    });
});

// Set initial state for hero title lines
document.querySelectorAll('.hero-title .line').forEach(line => {
    line.style.transform = 'translateY(110%)';
    line.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
});
