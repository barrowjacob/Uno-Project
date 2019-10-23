"use strict";


function capitalizeFirst(x) {
    var wordsArray = x.split(" ");
    var lettersArray;
    console.log(wordsArray);
    wordsArray.forEach(function(word, index) {
        lettersArray = word.split("").concat(word.split[index + 1])("")

        console.log(lettersArray)

    });

}
capitalizeFirst("This is a test");

