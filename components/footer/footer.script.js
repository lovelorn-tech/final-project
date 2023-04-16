const getFooter = async () => {
  let footer = "";
  await fetch("/TP-UTN-2023/components/footer/footer.html")
    .then((res) => res.text())
    .then((res) => (footer = res))
    .catch(console.log);
  return footer;
};

export { getFooter };
