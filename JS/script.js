// buttons index page using event listeners

// const buttonIndex = document.getElementsByClassName("buttonIndex");
//   for (i = 0; i < buttonIndex.length; i++) {
//     if (buttonIndex[0].style.backgroundColor = '#84e184') {
//       buttonIndex[0].addEventListener ('click',() => {
//         buttonIndex[0].style.backgroundColor = '#004d00';
//         buttonIndex[1].style.backgroundColor = '#84e184';
//         buttonIndex[2].style.backgroundColor = '#84e184';
//       })
//     }
//     if (buttonIndex[1].style.backgroundColor = '#84e184') {
//       buttonIndex[1].addEventListener ('click',() => {
//         buttonIndex[1].style.backgroundColor = '#004d00';
//         buttonIndex[0].style.backgroundColor = '#84e184';
//         buttonIndex[2].style.backgroundColor = '#84e184';
//       })
//     }
//     if (buttonIndex[2].style.backgroundColor = '#84e184') {
//       buttonIndex[2].addEventListener ('click',() => {
//         buttonIndex[2].style.backgroundColor = '#004d00';
//         buttonIndex[0].style.backgroundColor = '#84e184';
//         buttonIndex[1].style.backgroundColor = '#84e184';
//       })
//     }
//   }
//hamburguer menu
jQuery(function($){
  $( '.hamburger-button' ).click(function(){
    $('.hamburger-display').toggleClass('expand')
  })
})

// button index page using jquery
$(document).ready(function () {
    $('.carousel').carousel({
        interval: false
    });
    $('.carousel').carousel('cycle');
});



// const colorOrig = $(".button_div").css({backgroundColor:'#549c3875'});
// $(".button_find_pisos").on("mouseover", function () {
//     $(this).css({background: 'linear-gradient(lightgrey, white)'});
//     $(".button_find_pisos").on("mouseout", function () {
//         $(this).css({background: "none"});
//     });
// });


// function para agendar visita y RESERVAR
function antesReserva() {
    if (confirm("¡Primero tienes que agendar una visita con el propietario para conoceros!")) {
      // $('.button_find_index').css({backgroundColor:"red"});
    } else {
      event.preventDefault();
    }
}

function fijarVisita() {
    if (confirm("¡Hola Adrian! Has agendado una visita con Albert, recibirás un email con la confirmación de la visita.")) {
      // $('.button_find_index').css({backgroundColor:"red"});
    } else {
      event.preventDefault();
    }
}

const message = document.getElementById ("message");
function enviarMensaje() {
  if (message.style.display = "block") {
    message.style.display = "none";
    event.preventDefault();
  } else {
    event.preventDefault();
  }
}


//resize images in carousel
let width = $( window ).width();
if (width < "500") {
  $('.image-carousel').css("height", "300px");
}
