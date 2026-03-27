 
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

// ========================================
// MODAL DE PRODUTOS
// ========================================

// Dados dos produtos
const produtos = [
    {
        nome: "Desentupimento",
        descricao: "Desentupimento rápido e eficiente de canos entupidos",
        preco: "R$ 150,00",
        img: "mario.png"
    },
    {
        nome: "Reparo de Torneira",
        descricao: "Conserto profissional de torneiras com vazamento",
        preco: "R$ 80,00",
        img: "mario.png"
    },
    {
        nome: "Instalação de Tubo",
        descricao: "Instalação profissional de tubulação e canalização",
        preco: "R$ 200,00",
        img: "mario.png"
    },
    {
        nome: "Emergência 24h",
        descricao: "Atendimento de emergência disponível 24 horas",
        preco: "R$ 300,00",
        img: "mario.png"
    }
];

let produtoAtual = 0;

// Abrir modal de produtos
function abrirModalProdutos() {
    const modal = document.getElementById('modalProdutos');
    modal.classList.add('ativo');
    produtoAtual = 0;
    mostrarProduto();
}

// Fechar modal
function fecharModalProdutos() {
    const modal = document.getElementById('modalProdutos');
    modal.classList.remove('ativo');
}

// Mostrar produto atual
function mostrarProduto() {
    const slide = document.getElementById('slideProduto');
    const produto = produtos[produtoAtual];
    
    slide.innerHTML = `
        <img src="${produto.img}" alt="${produto.nome}" class="produto-img">
        <h3 class="produto-nome">${produto.nome}</h3>
        <p class="produto-descricao">${produto.descricao}</p>
        <p class="produto-preco">${produto.preco}</p>
    `;
    
    atualizarIndicadores();
}

// Próximo produto
function proximoProduto() {
    produtoAtual = (produtoAtual + 1) % produtos.length;
    mostrarProduto();
}

// Produto anterior
function anteriorProduto() {
    produtoAtual = (produtoAtual - 1 + produtos.length) % produtos.length;
    mostrarProduto();
}

// Atualizar indicadores
function atualizarIndicadores() {
    const indicadores = document.getElementById('indicadores');
    indicadores.innerHTML = '';
    
    produtos.forEach((_, index) => {
        const ponto = document.createElement('div');
        ponto.className = 'ponto';
        if (index === produtoAtual) ponto.classList.add('ativo');
        ponto.onclick = () => {
            produtoAtual = index;
            mostrarProduto();
        };
        indicadores.appendChild(ponto);
    });
}

// Fechar modal ao clicar no fundo
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalProdutos');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                fecharModalProdutos();
            }
        });
    }
    
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        const menuToggleEl = document.getElementById('menuToggle');
        const navMenuEl = document.getElementById('navMenu');
        
        if (menuToggleEl && navMenuEl) {
            if (!menuToggleEl.contains(e.target) && !navMenuEl.contains(e.target)) {
                menuToggleEl.classList.remove('active');
                navMenuEl.classList.remove('active');
            }
        }
    });
});
