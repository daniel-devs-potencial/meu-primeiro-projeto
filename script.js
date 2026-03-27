 let formulario = document.querySelector(".fale-conosco")
    let mascara = document.querySelector(".mascara-form")
 
   

    function cliqueiNoBotao(){
        formulario.style.left = "50%"
        mascara.style.visibility = "visible"
        formulario.style.transform = "translatex(-50%)"
    }

    function sumirFormulario(){
      formulario.style.left = "-320px"
        mascara.style.visibility = "hidden"
         formulario.style.transform = "translatex(0)"
        
    }

       function cancelar(){
      formulario.style.left = "-320px"
        mascara.style.visibility = "hidden"
         formulario.style.transform = "translatex(0)"
        
    }

    // script.js

// Hamburger menu toggle functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle the hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

