const getPost = async (data) => {
  let post = "";
  await fetch("/TP-UTN-2023/components/post/post.html")
    .then((res) => res.text())
    .then((res) => (post = res))
    .catch(console.log);
  post = post
    .replace("POSTIMAGE", `/TP-UTN-2023/assets/products/${data.image}`)
    .replace("ID", data.id ?? "0")
    .replace("NAME", data.name ?? "Default name")
    .replace("PRICE", data.price ?? "0")
    .replace("STOCK", data.stock ?? "0");
  return post;
};

export { getPost };
