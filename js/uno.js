

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



/* ===============BEGIN UNO PSEUDOCODE

    -for loop to loop through each person for entirety of game
        -for loop to issue out random cards to each person
            -for loop as each player draws a card
            -for loop as each player decides on card to play
=================================== */

function deal() {

    for (let i = 0; i < 4; i++) {
        let randomNum = (Math.floor(Math.random() * 54 - 1) + 2);
        player1Hand.unshift(randomNum);
        randomNum = (Math.floor(Math.random() * 54 - 1) + 2);
        player2Hand.unshift(randomNum);
        randomNum = (Math.floor(Math.random() * 54 - 1) + 2);
        player3Hand.unshift(randomNum);

    }
}
deal();
console.log(player1Hand);
console.log(player2Hand);
console.log(player3Hand);