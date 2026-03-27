// let formulario = document.querySelector(".fale-conosco")
 //   let mascara = document.querySelector(".mascara-form")

 
   

 //   function cliqueiNoBotao(){
     //   formulario.style.left = "50%"
     //   mascara.style.visibility = "visible"
      //  formulario.style.transform = "translatex(-50%)"
//    }

 //   function sumirFormulario(){
  //    formulario.style.left = "-300px"
    //    mascara.style.visibility = "hidden"
    //     formulario.style.transform = "translatex(0)"
        
  //  }

let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")

function cliqueiNoBotao(){
    // formulario.style.left = "50%"//
    formulario.style.transform = "translateX(-50%)"   
    mascara.style.visibility = "visible"
}

function sumirFormulario(){
    //formulario.style.left = "-300px"//
    formulario.style.transform = "translateX(100%)"  //  
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

let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")

// ========================================
// PROTEÇÃO 1: Desabilitar DevTools
// ========================================

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

// ========================================
// PROTEÇÃO 2: Desabilitar Clique Direito
// ========================================

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// ========================================
// PROTEÇÃO 3: Desabilitar Seleção de Texto
// ========================================

document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.msUserSelect = 'none';
document.body.style.mozUserSelect = 'none';

// Alternativa via CSS
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});

// ========================================
// PROTEÇÃO 4: Desabilitar Drag (Arrastar)
// ========================================

document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener('drag', (e) => {
    e.preventDefault();
    return false;
});

// ========================================
// PROTEÇÃO 5: Desabilitar Copy/Paste
// ========================================

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

// ========================================
// PROTEÇÃO 6: Detectar DevTools Aberto
// ========================================

let devToolsOpen = false;

setInterval(() => {
    let test = function() {};
    let result = test.toString().length;
    
    if (result > 50 && !devToolsOpen) {
        devToolsOpen = true;
        // Redireciona para home ou mostra aviso
        // window.location.href = '/';
    }
}, 500);

// ========================================
// PROTEÇÃO 7: Desabilitar Atalhos Comuns
// ========================================

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
// SUAS FUNÇÕES ORIGINAIS
// ========================================

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
