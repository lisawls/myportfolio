// Splash Screen Animation
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logoheader');
let logoSpan = document.querySelectorAll('.logo');
let header = document.querySelector('.header');
let typedElement = document.querySelector('.element');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            });
        }, 2000);
        
        setTimeout(() => {
            intro.classList.add('fade-out');
        }, 2300);
        
        setTimeout(()=>{
            header.classList.add('visible');
        }, 2300);
        
        /* typewriter script */
        setTimeout(() => {
            const typed = new Typed(typedElement, {
                strings: ["Developer", "Programmer", "Designer"],
                typeSpeed: 35,
                backSpeed: 35,
                loop: true,
            });
        }, 2600);
    });
});

// Menu Toggle
let menuToggle = document.getElementById("menuToggle");
let navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function(){
    navbar.classList.toggle('navbar--open');
    
    if(navbar.classList.contains('navbar--open')){
        menuToggle.classList.remove('ri-menu-line');
        menuToggle.classList.add('ri-close-line');
    } else {
        menuToggle.classList.remove('ri-close-line');
        menuToggle.classList.add('ri-menu-line');       
    }
})

document.querySelectorAll('.nav-links').forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove('navbar--open');
        menuToggle.classList.remove('ri-close-line');
        menuToggle.classList.add('ri-menu-line');
    });
});

// Dark-Light Mode
const themeToggle = document.getElementById("themeToggleIcon");
let body = document.body;
themeToggle.addEventListener("click", ()=>{
    body.classList.toggle("dark-theme");
    
    // Toggle the icon (moon/sun)
    if (body.classList.contains("dark-theme")) {
            themeToggle.classList.remove("ri-moon-line");
            themeToggle.classList.add("ri-sun-line");
        } else {
            themeToggle.classList.remove("ri-sun-line");
            themeToggle.classList.add("ri-moon-line");
        }
    });

// Scroll-down buttons
const scrollDownIcons = document.querySelectorAll('.scroll-down');

scrollDownIcons.forEach((icon, index) => {
    icon.style.animation = 'bounce 1.5s infinite'; // Ensure bounce is applied
    icon.addEventListener('click', () => {
        const sections = document.querySelectorAll('section');
        if (index + 1 < sections.length) {
            sections[index + 1].scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Scroll To Top
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.scrollTo(0, 0);
