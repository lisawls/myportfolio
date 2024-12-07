let intro = document.querySelector('.intro');
let logo = document.querySelector('.logoheader');
let logoSpan = document.querySelectorAll('.logo');
let topnav = document.querySelector('.topnav');

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
            topnav.classList.add('visible');
        }, 2300);
    })
})

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