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
        interval: 30000
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


//resize images in carousel
let width = $( window ).width();
if (width < "500") {
  $('.image-carousel').css("height", "300px");
}
