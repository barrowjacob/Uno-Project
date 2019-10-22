

/* creation of variables*/
var player1Hand = [];
var player2Hand = [];
var player3Hand = [];
var discard = [];


let players = [
    player1Hand,
    player2Hand,
    player3Hand
];



// ============ begin DEAL =============== //

function deal() {
    for (let i = 0; i < 4; i++) {
        var random = randomNum();
        console.log(random);
        player1Hand.unshift(random);
        deck.splice(random, 1);
        // console.log(player1Hand);
        random = randomNum();
        player2Hand.unshift(random);
        deck.splice(random, 1);
        random = randomNum();
        deck.splice(random, 1);
        player3Hand.unshift(random);
    }
}

// actual deal with function below //
deal();

// =============== begin first ROUND ============== //

    carder = (Math.floor(Math.random() * 54 - 1) + 2);


// check the players hands//
console.log(player1Hand);
console.log(player2Hand);
console.log(player3Hand);