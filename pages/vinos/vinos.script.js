import { getFooter } from "/FinalProyect/TP-UTN-2023/components/footer/footer.script.js";
import { getPost } from "/FinalProyect/TP-UTN-2023/components/post/post.script.js";
import { getHeader } from "/FinalProyect/TP-UTN-2023/components/header/header.script.js";
import {getPosts} from "/FinalProyect/TP-UTN-2023/services/posts.service.js";

const headerContainer = document.getElementById("header-container");
const footerContainer = document.getElementById("footer-container");
const main = document.getElementById("main-vino");

const setVinosPage = async () => {
  if (sessionStorage.getItem("Name") === null) window.open("/FinalProyect/TP-UTN-2023/", "_self");
  const header = await getHeader();
  headerContainer.innerHTML = header;
  const posts = await getPosts((x) => x.type === "Vino");
  posts.forEach(async (post) => {
    const newPost = await getPost(post);
    main.innerHTML += newPost; 
  });
  const footer = await getFooter();
  footerContainer.innerHTML = footer;
};

setVinosPage();