const getIcons = async () => {
  let html = "";
  await fetch("/FinalProyect/TP-UTN-2023/components/icons/icons.html")
    .then((res) => res.text())
    .then((res) => (html = res))
    .catch(console.log);
  return html;
};

export {getIcons};
