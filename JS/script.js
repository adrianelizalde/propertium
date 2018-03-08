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


// button index page using jquery

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    });
    $('.carousel').carousel('cycle');
});


// const colorOrig = $(".button_div").css({backgroundColor:'#549c3875'});

$(".button_div").on("mouseover", function () {
    $(this).css({backgroundColor: '#549c3875'});
    $(".button_div").on("mouseout", function () {
        $(this).css({backgroundColor: '#ffffff00'});
    });
});
