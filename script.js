document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Light/Dark Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.setAttribute('data-theme', savedTheme);
            themeToggle.checked = savedTheme === 'dark';
        }
    };

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    applySavedTheme();

    // --- 2. Header Scroll Effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 3. Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
             hamburger.classList.remove('is-active');
             nav.classList.remove('is-active');
        });
    });

    // --- 4. Animate on Scroll (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});