var fizzbuzz = function (x) {
    for (var n = 1; n < x; n++) { n % 15 === 0 ? console.log("fizzbuzz") : n % 3 === 0 ? console.log("fizz") : n % 5 === 0 ? console.log("buzz") : console.log(n)
    }};

fizzbuzz(100);