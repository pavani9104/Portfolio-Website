document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

const toggleNavButton = document.getElementById('toggleNav');
const navBarUl = document.querySelector('.nav_bar ul');
const msg =document.querySelector('.message');

toggleNavButton.addEventListener('click', function() {
    navBarUl.classList.toggle('show');
    toggleNavButton.classList.toggle('menu-icon');
    toggleNavButton.classList.toggle('close-icon');
    msg.classList.toggle('shift');
    if (toggleNavButton.classList.contains('menu-icon')) {
        toggleNavButton.innerHTML = '&#9776;';
    } else {
        toggleNavButton.innerHTML = '&times;';
    }
    });
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            showSlide(Number(dot.getAttribute('data-slide')));
            startSlideShow();
        });
    });

    nextButton.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    prevButton.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    showSlide(currentSlide);
    startSlideShow();
});
