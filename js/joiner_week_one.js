"use strict";






var d1 = document.getElementById("d1");
d1.style.color = "blue";

var d2 = document.getElementById("d2");

var d3 = document.getElementById("d3");

var d4 = document.getElementById("d4");

var d5 = document.getElementById("d5");

var d6 = document.getElementById("d6");

var d7 = document.getElementById("d7");

var d8 = document.getElementById("d8");

var d9 = document.getElementById("d9");

var d10 = document.getElementById("d10");

function sizeChange() {

    for (var i = 0; i < array.length; i++) {
        var randomNumber = Math.floor(Math.random() * 25) + 10;
        array[i].style.fontSize = randomNumber + "px";
        console.log("Changing size")
    }
}

setInterval(sizeChange, 2000);
var array = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10];



