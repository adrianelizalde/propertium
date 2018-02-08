const filtros = document.getElementById ("filtros");
const filtros_listDiv = document.getElementById ("filtros_list");
const button_filtros = document.getElementsByClassName ("button_filtros")

filtros.addEventListener ("click", () => {
  if (filtros_listDiv.style.display == "none") {
    filtros_listDiv.style.display = "block";
  } else {
      filtros_listDiv.style.display = "none";
      button_filtros.textContent = 'Ocultar filtros';  // no se cambia el texto del boton
  }
});



function myFunction() {
    myDropdownDiv = document.getElementById("myDropdown");
    myDropdownDiv.style.display = 'block';
}

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (event.target.matches('.dropdown')) {
//       if (openDropdown.style.display == 'block') {
//         openDropdown.style.display = 'none');
//   }
// }
