

/* creation of variables*/
let player1Hand = [];
let player2Hand = [];
let player3Hand = [];
let discard = [];
let players = [
    player1Hand,
    player2Hand,
    player3Hand
];


let randomItem = function () {
    return deck[Math.floor(Math.random() * deck.length)];
};
// ============ first DEAL =============== //

function deal() {
    for (let i = 0; i < 4; i++) {
        randomItem();
        player1Hand.unshift(randomItem());
        randomItem();
        player2Hand.unshift(randomItem());
        randomItem();
        player3Hand.unshift(randomItem());
      }
}

// actual deal with function below //
deal();

// check the players hands//
console.log(player1Hand);
console.log(player2Hand);
console.log(player3Hand);

// =============== begin first ROUND ============== //

        discard = deck[Math.floor(Math.random() * deck.length)];
        console.log("this is the discard " + discard.value + " and " + discard.color);

        // loop through first player's hand //
        for (i = 0; i < 4; i ++) {

            //if the player has the matching card //
            if (player1Hand[i].value === discard.value || player1Hand[i].color === discard.color) {
                console.log(player1Hand[i].value + " " + player1Hand[i].color + " This worked!")
                discard = player1Hand[i];
                console.log("this is the new discard " + discard.color + " " + discard.value);
                break;

                // if the player has a wild card (still need to create array of new card generator to randomize new discard) //
            } else if (player1Hand[i].name.includes("wildCard") || player1Hand[i].name.includes("wildCard_also") || player1Hand[i].name.includes("wildCardDrawFour") || player1Hand[i].name.includes("wildCardDrawFour_also")) {
                console.log("this is the new discard " + discard.name);


                //if the player doesn't have the card -- going to make them just skip that turn//
            } else {
                console.log(player1Hand[i].value + " " + player1Hand[i].color + " Shoot.");
            }
        }

        //repeat the steps for the next player //
        for (i = 0; i < 4; i ++) {
            if (player2Hand[i].value === discard.value || player2Hand[i].color === discard.color) {
                console.log(player2Hand[i].value + " " + player2Hand[i].color + " This worked!");
                discard = player2Hand[i];
                console.log("this is the new discard " + discard.color + " " + discard.value);
                break;
            }else if (player1Hand[i].name.includes("wildCard") || player1Hand[i].name.includes("wildCard_also") || player1Hand[i].name.includes("wildCardDrawFour") || player1Hand[i].name.includes("wildCardDrawFour_also")) {
                discard = player1Hand[i];
                console.log("this is the new discard " + discard.name);
            } else {
                console.log(player2Hand[i].value + " " + player2Hand[i].color + " Shoot.");
            }
        }for (i = 0; i < 4; i ++) {
            if (player3Hand[i].value === discard.value || player3Hand[i].color === discard.color) {
                console.log(player3Hand[i].value + " " + player3Hand[i].color + " This worked!")
                discard = player3Hand[i];
                console.log("this is the new discard " + discard.color + " " + discard.value);
                break;
            } else if (player1Hand[i].name.includes("wildCard") || player1Hand[i].name.includes("wildCard_also") || player1Hand[i].name.includes("wildCardDrawFour") || player1Hand[i].name.includes("wildCardDrawFour_also")) {
                discard = player1Hand[i];
                console.log("this is the new discard " + discard.name);
            } else {
                console.log(player3Hand[i].value + " " + player3Hand[i].color + " Shoot.");
            }
        }




