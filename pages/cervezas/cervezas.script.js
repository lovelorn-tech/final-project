import { getFooter } from "/TP-UTN-2023/components/footer/footer.script.js";
import { getPost } from "/TP-UTN-2023/components/post/post.script.js";
import { getHeader } from "/TP-UTN-2023/components/header/header.script.js";
import {getPosts} from "/TP-UTN-2023/services/posts.service.js";

const headerContainer = document.getElementById("header-container");
const footerContainer = document.getElementById("footer-container");
const main = document.getElementById("main-cerveza");

const setCervezaPage = async () => {
  if (localStorage.getItem("Name") === null) window.open("/TP-UTN-2023/", "_self");
  const header = await getHeader();
  headerContainer.innerHTML = header;
  const posts = await getPosts((x) => x.type === "Cerveza");
  posts.forEach(async (post) => {
    const newPost = await getPost(post);
    main.innerHTML += newPost; 
  });
  const footer = await getFooter();
  footerContainer.innerHTML = footer;
};

setCervezaPage();