 
let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")

function cliqueiNoBotao(){
     formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"   
    mascara.style.visibility = "visible"
}

function sumirFormulario(){
    formulario.style.left = "-340px"
    formulario.style.transform = "translateX(0)"  
    mascara.style.visibility = "hidden"
}





  

  // Menu Hamburger Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Função do botão Fale Conosco
function cliqueiNoBotao() {
   
  //  console.log('Botão clicado!');
    // Você pode adicionar a lógica aqui (rolar para seção, abrir modal, etc)
}





