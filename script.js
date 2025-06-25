// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 46, 0.98)';
    } else {
        header.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Animate skill cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and portfolio items
document.querySelectorAll('.skill-card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact button functionality
document.querySelector('.contact-btn').addEventListener('click', function () {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

const flkty = new Flickity('.carousel', {
    // options
    cellAlign: 'left',
    contain: true
});

// Meow balloon for cat logo
const logo = document.querySelector('.logo img');
const meowBalloon = document.querySelector('.meow-balloon');
if (logo && meowBalloon) {
    logo.addEventListener('click', function () {
        meowBalloon.style.display = 'block';
        setTimeout(() => {
            meowBalloon.style.display = 'none';
        }, 1500);
    });
}