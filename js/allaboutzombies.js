"use strict";


$("body").css({"background-color": "orange", "border": "2px solid black", "font-size": "1.25rem"});


$(function () {
    $("#accordion").accordion();
});

$("h3").css({"background-color": "grey"});

$(".codeup").css("border", "1px solid red");

$(".zombieBanner").css("width", "100%");

$("#header").css({"background-image": "url(assets/zombiebanner", "color": "white"});

$("li").css("font-size", "20px");

$("#happyHalloween").html('<i class="fas fa-cat"></i>  Happy Halloween!!  <i class="fas fa-cat"></i>');

$("#happyHalloween").css({"display": "none", "line-height": "290px"});


$("#hidden").click(function () {
    $("#toggle").toggle("explode");
    $("#happyHalloween").toggle();

});

$("#hidden").hover(function () {
        $("#hidden").css("color", "red")
    },
    function () {
        $("#hidden").css("color", "black")
    });


$("zombieHead").css({"width": "75px"});

