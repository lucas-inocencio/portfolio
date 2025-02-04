const elemTexto = document.querySelector(".sobre");
const elemBotaoLight = document.querySelector(".botao-light");
const elemBotaoDark = document.querySelector(".botao-dark");
const elemInformacoes = document.querySelector(".informacoes");
const elemBotaoInformacoes = document.querySelector(".botao-informacoes");

function alterarClasse() {
  console.log("Você clicou no texto Sobre mim");
  // alert("Você clicou no texto Sobre mim");

  elemTexto.classList.toggle("amarelo");
  elemTexto.classList.toggle("vermelho");

  elemTexto.textContent = "Sobre mim (clicado)";
}

// Eventos
elemTexto.addEventListener("click", function () {
  alterarClasse();
});

// alterarClasse();

// Adicionar o evento de clique no botão do rodapé
elemBotaoInformacoes.addEventListener("click", function () {
  console.log("Clicou no botão de informações");
  elemInformacoes.classList.toggle("visivel");

  console.log(elemInformacoes.classList.contains("visivel"));

  if (elemInformacoes.classList.contains("visivel")) {
    elemBotaoInformacoes.textContent = "Ocultar informações";
  } else {
    elemBotaoInformacoes.textContent = "Exibir informações";
  }
});

// Adicionar evento de clique nos botões Light/Dark
elemBotaoLight.addEventListener("click", function () {
  console.log("Clicou no botão Light");
  document.body.classList.add("light");
});

elemBotaoDark.addEventListener("click", function () {
  console.log("Clicou no botão Dark");
  document.body.classList.remove("light");
});