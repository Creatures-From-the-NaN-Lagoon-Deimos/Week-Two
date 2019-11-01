"use strict";

$(document).ready(function() {

//One Line Fizzbuzz and Ternary Practice

    var fizzbuzz = function (x) {for (var n = 1; n < x; n++) {n % 15 === 0 ? console.log("fizzbuzz") : n % 3 === 0 ? console.log("fizz") : n % 5 === 0 ? console.log("buzz") : console.log(n)}};
    // fizzbuzz(100);


//Color and Size with Jquery and added user interactivity

    var clicked = 0;

    $('#container').children().click(function() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var randomSize = Math.floor(Math.random() * 45) + 10;
        var randomNumber = Math.floor(Math.random() * 10);
        $(this).css("color", '#' + randomColor).css('font-size', randomSize).html(randomNumber)
    });

    //Transversing the DOM using Jquery

    function randomize() {
        $('div').first().children().each(function () {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            var randomSize = Math.floor(Math.random() * 45) + 10;
            var randomNumber = Math.floor(Math.random() * 10);
            $(this).css("color", '#' + randomColor).css('font-size', randomSize).html(randomNumber)
        });
    }
    var randomInterval;
    $('h1').click(function() {
        randomize();
        clicked++;
        if (clicked === 10) {
            alert("Let me save you the trouble");
            randomInterval = setInterval(randomize, 300);}

        if (clicked > 10) {
            alert("As you wish.");
            clearInterval(randomInterval);
            clicked = 0;

        }
        console.log(clicked);
    });

});

