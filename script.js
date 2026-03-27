 
let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")

function cliqueiNoBotao(){
     formulario.style.left = "50%"//
    formulario.style.transform = "translateX(-50%)"   
    mascara.style.visibility = "visible"
}

function sumirFormulario(){
    formulario.style.left = "-300px"//
    formulario.style.transform = "translateX(0)"  //  
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
    formulario.style.left = "50%"
        mascara.style.visibility = "visible"
        formulario.style.transform = "translatex(-50%)"
  //  console.log('Botão clicado!');
    // Você pode adicionar a lógica aqui (rolar para seção, abrir modal, etc)
}






// ========================================
// PROTEÇÃO COMPLETA DO SITE
// ========================================

// Desabilitar DevTools
document.addEventListener('keydown', (e) => {
    // F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    
    // Ctrl+Shift+I (Inspecionar)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }
    
    // Ctrl+Shift+C (Inspecionar elemento)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
    }
    
    // Ctrl+Shift+K (DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
    }
    
    // Print Screen
    if (e.key === 'PrintScreen') {
        e.preventDefault();
        navigator.clipboard.writeText('');
    }
});

// Desabilitar Clique Direito
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Desabilitar Seleção de Texto
document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.msUserSelect = 'none';
document.body.style.mozUserSelect = 'none';

// Alternativa via CSS
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});

// Desabilitar Drag (Arrastar)
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener('drag', (e) => {
    e.preventDefault();
    return false;
});

// Desabilitar Copy/Paste
document.addEventListener('copy', (e) => {
    e.preventDefault();
    alert('❌ Cópia não permitida!');
});

document.addEventListener('paste', (e) => {
    e.preventDefault();
});

document.addEventListener('cut', (e) => {
    e.preventDefault();
});

// Desabilitar Atalhos Comuns
document.addEventListener('keydown', (e) => {
    // Ctrl+U (Ver código fonte)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
    
    // Ctrl+S (Salvar página)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }
    
    // Ctrl+P (Imprimir)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
    }
});

// ========================================
// FUNÇÕES PRINCIPAIS DOS BOTÕES
// ========================================

let formulario = document.querySelector(".fale-conosco");
let mascara = document.querySelector(".mascara-form");

function cliqueiNoBotao() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function sumirFormulario() {
    formulario.style.left = "-300px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}

// ========================================
// MENU HAMBURGER MOBILE
// ========================================

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
