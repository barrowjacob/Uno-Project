"use strict";
$(document).ready(function() {

//One Line Fizzbuzz and Ternary Practice

    var fizzbuzz = function (x) {
        for (var n = 1; n < x; n++) {
            n % 15 === 0 ? console.log("fizzbuzz") : n % 3 === 0 ? console.log("fizz") : n % 5 === 0 ? console.log("buzz") : console.log(n)
        }
    };
    fizzbuzz(100);


//Color and Size with Jquery

    var d1 = document.getElementById("d1");

    var d2 = document.getElementById("d2");

    var d3 = document.getElementById("d3");

    var d4 = document.getElementById("d4");

    var d5 = document.getElementById("d5");

    var d6 = document.getElementById("d6");

    var d7 = document.getElementById("d7");

    var d8 = document.getElementById("d8");

    var d9 = document.getElementById("d9");

    var d10 = document.getElementById("d10");

    var clicked = 0

    $('#container').children().click(function() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var randomSize = Math.floor(Math.random() * 45) + 10;
        var randomNumber = Math.floor(Math.random() * 10);
        $(this).css("color", '#' + randomColor).css('font-size', randomSize).html(randomNumber)
    });

    $('h1').click(function() {

        $(this).next().children().each(function () {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            var randomSize = Math.floor(Math.random() * 45) + 10;
            var randomNumber = Math.floor(Math.random() * 10);
            $(this).css("color", '#' + randomColor).css('font-size', randomSize).html(randomNumber)
        })

    })


});