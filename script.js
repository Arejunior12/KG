document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Light/Dark Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on page load
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

    // Apply theme on initial load
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

    // --- 4. 3D Hero Effect (subtle text movement) ---
    const heroText = document.querySelector('.hero__layer--text');
    if (window.innerWidth > 1024) {
        document.querySelector('.hero').addEventListener('mousemove', e => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            const xMovement = (clientX / innerWidth - 0.5) * 50;
            const yMovement = (clientY / innerHeight - 0.5) * 50;

            heroText.style.transform = `translateZ(50px) translateX(${xMovement}px) translateY(${yMovement}px)`;
        });
    }

    // --- 5. Reusable Carousel Logic (for Events) ---
    function setupCarousel(carouselSelector, prevBtnSelector, nextBtnSelector) {
        const carousel = document.querySelector(carouselSelector);
        if (!carousel) return; // Exit if the carousel doesn't exist on the page
        
        const prevBtn = document.querySelector(prevBtnSelector);
        const nextBtn = document.querySelector(nextBtnSelector);
        let slides = Array.from(carousel.children);
        
        // This makes the infinite scroll smoother
        carousel.append(...slides.map(slide => slide.cloneNode(true)));
        
        let isMoving = false;
        let totalSlides = slides.length;
        let index = 0;

        function moveSlides() {
            carousel.style.transition = 'transform 0.5s ease-in-out';
            carousel.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
        }
        
        nextBtn.addEventListener('click', () => {
            if (isMoving) return;
            isMoving = true;
            index++;
            moveSlides();
        });

        prevBtn.addEventListener('click', () => {
            if (isMoving) return;
            isMoving = true;
            if (index <= 0) { // If at the start, jump to the end of the cloned section without transition
                index = totalSlides;
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
            }
            // A tiny timeout to allow the browser to apply the 'none' transition before we animate back
            setTimeout(() => {
                index--;
                moveSlides();
            }, 10);
        });

        carousel.addEventListener('transitionend', () => {
            isMoving = false;
            if (index >= totalSlides) {
                index = 0;
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(0%)`;
            }
        });
    }
    
    // Initialize the event carousel with a slightly improved infinite scroll
    setupCarousel('.event-carousel', '.event-prev', '.event-next');


    // --- 6. Animate on Scroll (Intersection Observer) ---
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