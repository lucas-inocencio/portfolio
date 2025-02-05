const elemText = document.querySelector(".about");
const elemBotaoLight = document.querySelector(".botao-light");
const elemBotaoDark = document.querySelector(".botao-dark");
const elemInformations = document.querySelector(".informations");
const elemBottonInformations = document.querySelector(".botton-informations");

function alterarClasse() {
  console.log("Você clicou no texto Sobre mim");
  alert("Você clicou no texto Sobre mim");

  elemText.classList.toggle("red");
  elemText.classList.toggle("yellow");

  elemText.textContent = "Sobre mim (clicado)";
}

// Eventos
elemText.addEventListener("click", alterarClasse);

// Adicionar o evento de clique no botão do rodapé
elemInformations.addEventListener("click", function () {
  console.log("Clicou no botão de informações");
  elemInformations.classList.toggle("visivel");

  console.log(elemInformations.classList.contains("visivel"));

  if (elemInformations.classList.contains("visivel")) {
    elemInformations.textContent = "Ocultar informações";
  } else {
    elemInformations.textContent = "Exibir informações";
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