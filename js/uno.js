/**************************/
// creation of variables //
/*************************/
var player1HandDisplay = [];
var player2HandDisplay = [];
var player3HandDisplay = [];
var player1Hand = [];
var player2Hand = [];
var player3Hand = [];
var discard = [];
var players = [
    player1Hand,
    player2Hand,
    player3Hand
];



///REAL TALK TIME, HERE:
// START OVER FROM SCRATCH, AND USE REACT THIS TIME.
// SOMETIMES IT'S BEST TO START FROM SCRATCH.
// NOW IS THAT TIME.

/********************************/
//           FUNCTIONS          //
/********************************/


// need to create working wildcard function
function wildCard() {
    console.log("Player " + i + " discarded a " + discard.color + " " + discard.value);
    console.log("=========");
    i++;
}

function winCredits() {
    console.log("Player " + i + " wins!!! This concoludes the game!");
}


let randomItem = function () {
    return deck[Math.floor(Math.random() * deck.length)];
};


function deal() {
    console.log("DEALING...");
    for (var i = 0; i < 4; i++) {
        var card = randomItem();
        console.log(card);
        console.log("... dealt " + card.name + " to player 1");
        player1Hand.unshift(card);
        player1HandDisplay += card.name + ", ";
        card = randomItem();
        console.log("... dealt " + card.name + " to player 2");
        player2Hand.unshift(card);
        player2HandDisplay += card.name + ", ";
        card = randomItem();
        console.log("... dealt " + card.name + " to player 3");
        player3Hand.unshift(card);
        player3HandDisplay += card.name + ", ";
    }
    console.log("FINISHED DEALING")
}


/******************************************/
// ============ INTIAL DEAL ============= //
/******************************************/

deal();

// check the players hands//
console.log("Player 1's hand is: " + player1HandDisplay);
console.log("Player 2's hand is: " + player2HandDisplay);
console.log("Player 3's hand is: " + player3HandDisplay);


/*************************************************************/
// ============ begin iterating through players =========== //
/************************************************************/

discard = deck[Math.floor(Math.random() * deck.length)];

/*************************/
// first in discard pile  //
/*************************/

console.log("The starting discard is: " + discard.value + " " + discard.color);

/****************************/
// loop through each player //
/****************************/

while (true) {
    for (var i = 0; i < players.length; i++) {
        for (var j = 0; j < players[i].length; j++) {
            if (player1Hand.length === 0 || player2Hand.length === 0 || player3Hand.length === 0) {
                break;
            } else if (players[i][j].value === discard.value || players[i][j].color === discard.color) {


                /***********************************************************/
                // ========= if the player has the matching card ========= //
                /***********************************************************/
                console.log("Player " + i + " played a " + players[i][j].value + " " + players[i][j].color + "! This worked!");
                console.log("=========");
                discard = players[i][j];
                players[i].splice(players[i][j], 1);
                if (players[i].length < 1) {
                    winCredits();
                    break;
                } else {
                    console.log("Player " + i + " now has " + players[i].length + " cards!");
                    console.log("=========");
                    i++;

                }
            } else


            /***********************************************************/
            // =========== if the player has a wild card ============= //
            /***********************************************************/


            if (players[i][j].name.includes("wildCard")) {
                wildCard();

                /*************************************************************/
                //========== if the player doesn't have the card ===========//
                /*************************************************************/

            } else {

                function doesNotMatch() {
                    for (var j = players[i].length; j > 0; j--) {
                        if (players[i][j].value !== discard.value && players[i][j].color !== discard.color && players[i][j].value !== 13 && players[i][j].value !== 14) {
                            return;
                        } else if (j === 0) {
                            function drawCard() {
                                console.log("Player " + i + " tried to play a " + players[i][j].name + " to no avail. Trying another card.");
                                console.log("=========");
                                if (players[i][j].value !== discard.value && players[i][j].color !== discard.color && players[i][j].value !== 13 && players[i][j].value !== 14) {
                                    card = randomItem();
                                    players[i].unshift(card);
                                    console.log("Player " + i + " added " + card + " to their hand!");
                                    if (card.value !== discard.value && card.color !== discard.color && card.value !== 13 && card.value !== 14) {
                                        doesNotMatch();
                                    } else {
                                        matchCard();
                                    }
                                }

                            }
                        } else {
                            function matchCard() {
                                console.log("Player " + i + " played a " + players[i][j].value + " " + players[i][j].color + "! This worked!");
                                console.log("=========");
                                discard = players[i][j];
                                players[i].splice(players[i][j], 1);
                                if (players[i].length < 1) {
                                    winCredits();
                                } else {
                                    console.log("Player " + i + " now has " + players[i].length + " cards!");
                                    console.log("=========");
                                    i++;

                                }
                            }
                        }
                    }

                }
            }
        }
    }
}




