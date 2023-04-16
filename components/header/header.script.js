const getHeader = async () => {
  let header = "";
  await fetch("/TP-UTN-2023/components/header/header.html")
    .then((res) => res.text())
    .then((res) => (header = res))
    .catch(console.log);
  header = header.replace("NAME", sessionStorage.getItem("Name"));
  return header;
};

export { getHeader };
