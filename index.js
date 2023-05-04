const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const userInput = document.querySelector("#userInput");
const avisoMsg = document.querySelector("#avisoMsg");
let msgUsuario = document.querySelector(".msgUsuario");
const msgButton = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
const enviarMsg = document.querySelector("#sendBtn");
const fecharMsg = document.querySelector("#closeBtn");

// Atualiza a data do site automaticamente
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// Toggle menu sanduiche de acordo com a quantidade e abas
navToggle.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

msgButton.addEventListener("click", () => {
  modal.showModal();
});

enviarMsg.addEventListener("submit", (e) => {
  // e.preventDefault();
  formValidation();
});

fecharMsg.addEventListener("click", () => {
  modal.close();
});

let formValidation = () => {
  if (userInput.value === "") {
    avisoMsg.innerHTML = `Por favor, escreva algo`;
    console.log("erro");
  } else {
    avisoMsg.innerHTML = ``;
    console.log("sucesso");
  }
};
