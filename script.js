 let formulario;
let mascara;

const produtos = [
  { nome: "Desentupimento", descricao: "Desentupimento rápido e eficiente de canos entupidos", preco: "R$ 150,00", img: "mario.png" },
  { nome: "Reparo de Torneira", descricao: "Conserto profissional de torneiras com vazamento", preco: "R$ 80,00", img: "mario.png" },
  { nome: "Instalação de Tubo", descricao: "Instalação profissional de tubulação e canalização", preco: "R$ 200,00", img: "mario.png" },
  { nome: "Emergência 24h", descricao: "Atendimento de emergência disponível 24 horas", preco: "R$ 300,00", img: "mario.png" }
];

let produtoAtual = 0;

function cliqueiNoBotao() {
  if (!formulario || !mascara) return;
  formulario.style.left = "50%";
  formulario.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}

function sumirFormulario() {
  if (!formulario || !mascara) return;
  formulario.style.left = "-340px";
  formulario.style.transform = "translateX(0)";
  mascara.style.visibility = "hidden";
}

function abrirModalProdutos() {
  const modal = document.getElementById("modalProdutos");
  if (!modal) return;
  modal.classList.add("ativo");
  produtoAtual = 0;
  mostrarProduto();
}

function fecharModalProdutos() {
  const modal = document.getElementById("modalProdutos");
  if (!modal) return;
  modal.classList.remove("ativo");
}

function mostrarProduto() {
  const slide = document.getElementById("slideProduto");
  if (!slide) return;

  const produto = produtos[produtoAtual];
  slide.innerHTML = `
    <img src="${produto.img}" alt="${produto.nome}" class="produto-img">
    <h3 class="produto-nome">${produto.nome}</h3>
    <p class="produto-descricao">${produto.descricao}</p>
    <p class="produto-preco">${produto.preco}</p>
  `;

  atualizarIndicadores();
}

function proximoProduto() {
  produtoAtual = (produtoAtual + 1) % produtos.length;
  mostrarProduto();
}

function anteriorProduto() {
  produtoAtual = (produtoAtual - 1 + produtos.length) % produtos.length;
  mostrarProduto();
}

function atualizarIndicadores() {
  const indicadores = document.getElementById("indicadores");
  if (!indicadores) return;

  indicadores.innerHTML = "";
  produtos.forEach((_, index) => {
    const ponto = document.createElement("div");
    ponto.className = "ponto";
    if (index === produtoAtual) ponto.classList.add("ativo");
    ponto.addEventListener("click", () => {
      produtoAtual = index;
      mostrarProduto();
    });
    indicadores.appendChild(ponto);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  formulario = document.querySelector(".fale-conosco");
  mascara = document.querySelector(".mascara-form");

  // Menu hamburger
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }

  // Fechar modal ao clicar no fundo
  const modal = document.getElementById("modalProdutos");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) fecharModalProdutos();
    });
  }
});
