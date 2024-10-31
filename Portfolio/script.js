let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

navIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id +']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
let darkModeIcon = document.querySelector('#darkmoon-icon');
darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun')
    document.body.classList.toggle('dark-mode');
};
const darkModeToggle = document.getElementById('#darkmoon-icon');
darkModeToggle.addEventListener('click',() => {
    document.body.classList.toggle('dark-mode');
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img img,.service-container,portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img img',{origin: 'left'});
ScrollReveal().reveal('.home-content h3,.home-content p,about-content',{origin:'right'});
