const filtros = document.getElementById ("filtros");
const filtros_listDiv = document.getElementById ("filtros_list");

filtros.addEventListener ("click", () => {
  if (filtros_listDiv.style.display == "none") {
    filtros_listDiv.style.display = "block";
  } else {
      filtros_listDiv.style.display = "none";
  }
});
