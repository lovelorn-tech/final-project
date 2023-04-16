import { getFooter } from "/TP-UTN-2023/components/footer/footer.script.js";
import { getHeader } from "/TP-UTN-2023/components/header/header.script.js";

const headerContainer = document.getElementById("header-container");
const footerContainer = document.getElementById("footer-container");

const setAboutPage = async () => {
  if (localStorage.getItem("Name") === null) window.open("/TP-UTN-2023/", "_self");
  const header = await getHeader();
  headerContainer.innerHTML = header;
  // Add info about us
  const footer = await getFooter();
  footerContainer.innerHTML = footer;
};

setAboutPage();