"use strict";


// BOM DOT DOM

//
//
// var d1 = document.getElementById("d1");
//
// var d2 = document.getElementById("d2");
//
// var d3 = document.getElementById("d3");
//
// var d4 = document.getElementById("d4");
//
// var d5 = document.getElementById("d5");
//
// var d6 = document.getElementById("d6");
//
// var d7 = document.getElementById("d7");
//
// var d8 = document.getElementById("d8");
//
// var d9 = document.getElementById("d9");
//
// var d10 = document.getElementById("d10");
//
// function sizeChange() {
//
//     for (var i = 0; i < array.length; i++) {
//         var randomNumber = Math.floor(Math.random() * 45) + 10;
//         array[i].style.fontSize = randomNumber + "px";
//         console.log("Changing size")
//     }
// }
//
// setInterval(sizeChange, 500);
// var array = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10];



// Working at Jimmy Johns Again
var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];


function makeSandwichObjects(breads, fillings) {
    var sandwichArray = [];

        breads.forEach(function(bread, i) {
            var sandwichObject= {};
                sandwichObject.bread = bread;
                sandwichObject.filling = fillings[i];
                sandwichArray.push(sandwichObject);
        });

    return sandwichArray;
}

console.log(makeSandwichObjects(breads, fillings));









