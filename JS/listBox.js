const filtros = document.getElementById ("filtros");
const filtros_listDiv = document.getElementById ("filtros_list");
const button_filtros = document.getElementsByClassName ("button_showFiltros")[0];
const button_presup = document.getElementsByClassName ("button_filtros")[0];
const button_porcen = document.getElementsByClassName ("button_filtros")[1];
const button_usu = document.getElementsByClassName ("button_filtros")[2];

filtros.addEventListener ("click", () => {
  if (filtros_listDiv.style.display == "none") {
    filtros_listDiv.style.display = "block";
    button_filtros.textContent = 'Ocultar filtros';
  } else {
      filtros_listDiv.style.display = "none";
      button_filtros.textContent = 'Mostrar filtros';
  }
});

// HOW TO MAKE DISAPPEAR THE DROPDOWN LIST WHEN CLICK OUTSIDE LIST
// function presupuesto() {
//   myDropdownDiv = document.getElementById("presupuestoDropdown");
//   myDropdownDiv.style.display = 'block';
//     if (myDropdownDiv.style.display = 'block') {
//       window.onclick = function(event) {
//       event.target != 'myDropdownDiv';
//       myDropdownDiv.style.display = 'none';
//       }
//     }
// }

button_presup.addEventListener ("click", () => {
  myDropdownDiv = document.getElementById("presupuestoDropdown");
  if (myDropdownDiv.style.display == "none") {
    myDropdownDiv.style.display = 'block';
  } else {
    myDropdownDiv.style.display = "none";
  }
});

button_porcen.addEventListener ("click", () => {
  myDropdownDiv = document.getElementById("porcentajeDropdown");
  if (myDropdownDiv.style.display == "none") {
    myDropdownDiv.style.display = 'block';
  } else {
    myDropdownDiv.style.display = "none";
  }
});

button_usu.addEventListener ("click", () => {
  myDropdownDiv = document.getElementById("usufructoDropdown");
  if (myDropdownDiv.style.display == "none") {
    myDropdownDiv.style.display = 'block';
  } else {
    myDropdownDiv.style.display = "none";
  }
});

// function presupuesto() {
//   myDropdownDiv = document.getElementById("presupuestoDropdown");
//   myDropdownDiv.style.display = 'block';
// }

//
// function porcentaje() {
//     myDropdownDiv = document.getElementById("porcentajeDropdown");
//     myDropdownDiv.style.display = 'block';
// }
//
// function usufructo() {
//     myDropdownDiv = document.getElementById("usufructoDropdown");
//     myDropdownDiv.style.display = 'block';
// }
