import { getFooter } from "/TP-UTN-2023/components/footer/footer.script.js";
import { getHeader } from "/TP-UTN-2023/components/header/header.script.js";

const headerContainer = document.getElementById("header-container");
const footerContainer = document.getElementById("footer-container");
const form = document.getElementById("form");
const errorMsg = document.getElementById("error-msg");
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputText = document.getElementById("input-text");

const setContactPage = async () => {
  if (localStorage.getItem("Name") === null)
    window.open("/TP-UTN-2023/", "_self");
  const header = await getHeader();
  headerContainer.innerHTML = header;
  const footer = await getFooter();
  footerContainer.innerHTML = footer;
};

form.onsubmit = (e) => {
  e.preventDefault();
  errorMsg.style.display = "none";
  if (inputName.value === "" || inputName.value === undefined) {
    errorMsg.innerHTML = "El nombre no puede estar vacío";
    errorMsg.style.display = "block";
    return;
  }
  if (inputEmail.value === "" || inputEmail.value === undefined) {
    errorMsg.innerHTML = "El correo electrónico no puede estar vacío";
    errorMsg.style.display = "block";
    return;
  }
  if (inputText.value.length < 10) {
    errorMsg.innerHTML = "El mensaje debe tener al menos 10 caracteres.";
    errorMsg.style.display = "block";
    return;
  }
};

setContactPage();
