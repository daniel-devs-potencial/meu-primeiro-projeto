 let formulario = document.querySelector(".fale-conosco")
    let mascara = document.querySelector(".mascara-form")

 
   

    function cliqueiNoBotao(){
        formulario.style.left = "50%"
        mascara.style.visibility = "visible"
        formulario.style.transform = "translatex(-50%)"
    }

    function sumirFormulario(){
      formulario.style.left = "-300px"
        mascara.style.visibility = "hidden"
         formulario.style.transform = "translatex(0)"
        
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
    formulario.style.left = "50%"
        mascara.style.visibility = "visible"
        formulario.style.transform = "translatex(-50%)"
  //  console.log('Botão clicado!');
    // Você pode adicionar a lógica aqui (rolar para seção, abrir modal, etc)
}

