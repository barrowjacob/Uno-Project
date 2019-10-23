

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

        // first in discard pile //
        console.log("this is the discard " + discard.value + " and " + discard.color);

        // loop through each player //
        var i = 0;
        while (player1Hand.length !== 0 && player2Hand.length !== 0 && player3Hand.length !== 0) {
            for (i = 0; i < players.length; i++) {
                for (var j = 0; j < players[i].length; j++) {
                    //if the player has the matching card //
                    if (players[i][j].value === discard.value || players[i][j].color === discard.color) {
                        console.log(players[i][j].value + " " + players[i][j].color + " This worked!");
                        discard = players[i][j];
                        console.log("this is the new discard " + discard.color + " " + discard.value);
                        players[i].splice(players[i][j], 1);
                        console.log("this is now the player's hand" + players[i]);


                        // if the player has a wild card //
                    } else if (players[i][j].name.includes("wildCard")) {
                        console.log("this is the new discard " + discard.name);


                        //if the player doesn't have the card -- going to make them just skip that turn//
                    } else {
                        console.log(players[i][j].value + " " + players[i][j].color + " Shoot.");
                    }
                }
            }
        }

        //repeat the steps for the next player //

        // for (i = 0; i < 4; i ++) {
        //     if (player2Hand[i].value === discard.value || player2Hand[i].color === discard.color) {
        //         console.log(player2Hand[i].value + " " + player2Hand[i].color + " This worked!");
        //         discard = player2Hand[i];
        //         console.log("this is the new discard " + discard.color + " " + discard.value);
        //         break;
        //     }else if (player1Hand[i].name.includes("wildCard") || player1Hand[i].name.includes("wildCard_also") || player1Hand[i].name.includes("wildDrawFour") || player1Hand[i].name.includes("wildDrawFour_also")) {
        //         discard = player1Hand[i];
        //         console.log("this is the new discard " + discard.name);
        //     } else {
        //         console.log(player2Hand[i].value + " " + player2Hand[i].color + " Shoot.");
        //     }
        // }for (i = 0; i < 4; i ++) {
        //     if (player3Hand[i].value === discard.value || player3Hand[i].color === discard.color) {
        //         console.log(player3Hand[i].value + " " + player3Hand[i].color + " This worked!")
        //         discard = player3Hand[i];
        //         console.log("this is the new discard " + discard.color + " " + discard.value);
        //         break;
        //     } else if (player1Hand[i].name.includes("wildCard") || player1Hand[i].name.includes("wildCard_also") || player1Hand[i].name.includes("wildDrawFour") || player1Hand[i].name.includes("wildDrawFour_also")) {
        //         discard = player1Hand[i];
        //         console.log("this is the new discard " + discard.name);
        //     } else {
        //         console.log(player3Hand[i].value + " " + player3Hand[i].color + " Shoot.");
        //     }
        // }




