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

// Contact button functionality
document.querySelector('.contact-btn').addEventListener('click', function () {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

const flkty = new Flickity('.carousel', {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 4000,
    wrapAround: true
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

// Typewriter effect for the highlight adjectives
const adjectives = [
    'estudante de programação',
    'gateira!',
    'entusiasta do universo',
    'pessoa com hábitos noturnos',
    'k-poper'
];

// Improved toTitleCase for Portuguese small words
function toTitleCase(str) {
    const smallWords = ['de', 'do', 'da', 'dos', 'das', 'com', 'e'];
    return str.split(' ').map((word, i) => {
        if (i !== 0 && smallWords.includes(word.toLowerCase())) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }).join(' ');
}

const typewriter = document.getElementById('typewriter');
let adjIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = '';
let typingSpeed = 80;
let pauseTime = 2000;
let cursorVisible = true;

// Add a separate cursor span for flicker
if (typewriter) {
    typewriter.innerHTML = '<span id="typewriter-text"></span><span id="typewriter-cursor">|</span>';
}
const typewriterText = document.getElementById('typewriter-text');
const typewriterCursor = document.getElementById('typewriter-cursor');

function typeEffect() {
    const fullText = toTitleCase(adjectives[adjIndex]);
    if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
    }
    if (typewriterText) typewriterText.textContent = currentText;

    if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => {
            isDeleting = true;
            typeEffect();
        }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        adjIndex = (adjIndex + 1) % adjectives.length;
        setTimeout(typeEffect, 400);
    } else {
        setTimeout(typeEffect, typingSpeed);
    }
}

// Flicker the cursor
function flickerCursor() {
    if (typewriterCursor) {
        typewriterCursor.style.opacity = cursorVisible ? '1' : '0';
        cursorVisible = !cursorVisible;
    }
    setTimeout(flickerCursor, 500);
}

if (typewriter) {
    setTimeout(typeEffect, 1000);
    flickerCursor();
}

function animationSkillsCard() {
    const allSkills = document.querySelectorAll('.skill-card');
    allSkills.forEach(skill => { skill.setAttribute("data-aos", "fade-up") });
    allSkills.forEach(skill => { skill.setAttribute("data-aos-duration", "500") });
    allSkills.forEach((skill, i) => { skill.setAttribute("data-aos-delay", `${i * 100}`) });
}

function animationTimeLine() {
    const allTimelineItems = document.querySelectorAll('.timeline-item');
    allTimelineItems.forEach(item => { item.setAttribute("data-aos", "fade-up") });
    allTimelineItems.forEach(item => { item.setAttribute("data-aos-duration", "500") });
    allTimelineItems.forEach((item, i) => { item.setAttribute("data-aos-delay", `${i * 100}`) });
}

function animationPortfolio() {
    const allPortfolioItems = document.querySelectorAll('.portfolio-item');
    allPortfolioItems.forEach(item => { item.setAttribute("data-aos", "flip-up") });
    allPortfolioItems.forEach(item => { item.setAttribute("data-aos-duration", "850") });
    allPortfolioItems.forEach((item, i) => { item.setAttribute("data-aos-delay", `${i * 200}`) });
}

function animationSocialIcons() {
    const allSocialIcons = document.querySelectorAll('.footer-social a');
    allSocialIcons.forEach(icon => {
        icon.setAttribute("data-aos", "zoom-in");
        icon.setAttribute("data-aos-duration", "800");
    });
    allSocialIcons.forEach((icon, i) => {
        icon.setAttribute("data-aos-delay", `${i * 300}`);
    });
}


window.addEventListener('load', () => {
    animationSocialIcons();
    animationPortfolio();
    animationSkillsCard();
    animationTimeLine();
    AOS.init()
    AOS.refresh()
});
