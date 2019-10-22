(function () {


    let card = {
        value: 0,
        color: ""
    };
    let randomNum = (Math.floor(Math.random() * 54 - 1) + 2);


    switch (randomNum) {
            case 1:
                card.value = 0;
                card.color = "red";
                break;
            case 2:
                card.value = 1;
                card.color = "red";
                break;
            case 3:
                card.value = 2;
                card.color = "red";
                break;
            case 4:
                card.value = 3;
               card.color = "red";
                break;
            case 5:
                card.value = 4;
                card.color = "red";
                break;
            case 6:
                card.value = 5;
                card.color = "red";
                break;
            case 7:
                card.value = 6;
                card.color = "red";
                break;
            case 8:
                card.value = 7;
                card.color = "red";
                break;
            case 9:
                card.value = 8;
                card.color = "red";
                break;
            case 10:
                card.value = 9;
                card.color = "red";
                break;
            case 11:
                card.value = "skip";
                card.color = "red";
                break;
            case 12:
                card.value = "reverse";
                card.color = "red";
                break;
            case 13:
                card.value = "drawTwo";
                card.color = "red";
                break;
            case 14:
                card.value = 0;
                card.color = "green";
                break;
            case 15:
                card.value = 1;
                card.color = "green";
                break;
            case 16:
                card.value = 2;
                card.color = "green";
                break;
            case 17:
                card.value = 3;
                card.color = "green";
                break;
            case 18:
                card.value = 4;
                card.color = "green";
                break;
            case 19:
                card.value = 5;
                card.color = "green";
                break;
            case 20:
                card.value = 6;
                card.color = "green";
                break;
            case 21:
                card.value = 7;
                card.color = "green";
                break;
            case 22:
                card.value = 8;
                card.color = "green";
                break;
            case 23:
                card.value = 9;
                card.color = "green";
                break;
            case 24:
                card.value = "skip";
                card.color = "green";
                break;
            case 25:
                card.value = "reverse";
                card.color = "green";
                break;
            case 26:
                card.value = "drawTwo";
                card.color = "green";
                break;
            case 27:
                card.value = 0;
                card.color = "blue";
                break;
            case 28:
                card.value = 1;
                card.color = "blue";
                break;
            case 29:
                card.value = 2;
                card.color = "blue";
                break;
            case 30:
                card.value = 3;
                card.color = "blue";
                break;
            case 31:
                card.value = 4;
                card.color = "blue";
                break;
            case 32:
                card.value = 5;
                card.color = "blue";
                break;
            case 33:
                card.value = 6;
                card.color = "blue";
                break;
            case 34:
                card.value = 7;
                card.color = "blue";
                break;
            case 35:
                card.value = 8;
                card.color = "blue";
                break;
            case 36:
                card.value = 9;
                card.color = "blue";
                break;
            case 37:
                card.value = "skip";
                card.color = "blue";
                break;
            case 38:
                card.value = "reverse";
                card.color = "blue";
                break;
            case 39:
                card.value = "drawTwo";
                card.color = "blue";
                break;
            case 40:
                card.value = 0;
                card.color = "yellow";
                break;
            case 41:
                card.value = 1;
                card.color = "yellow";
                break;
            case 42:
                card.value = 2;
                card.color = "yellow";
                break;
            case 43:
                card.value = 3;
                card.color = "yellow";
                break;
            case 44:
                card.value = 4;
                card.color = "yellow";
                break;
            case 45:
                card.value = 5;
                card.color = "yellow";
                break;
            case 46:
                card.value = 6;
                card.color = "yellow";
                break;
            case 47:
                card.value = 7;
                card.color = "yellow";
                break;
            case 48:
                card.value = 8;
                card.color = "yellow";
                break;
            case 49:
                card.value = 9;
                card.color = "yellow";
                break;
            case 50:
                card.value = "skip";
                card.color = "yellow";
                break;
            case 51:
                card.value = "reverse";
                card.color = "yellow";
                break;
            case 52:
                card.value = "drawTwo";
                card.color = "yellow";
                break;
            case 53:
                card.value = "wild";
                card.color = "black";
                break;
            case 54:
                card.value = "wildDrawFour";
                card.color = "black";
                break;
        }


console.log(randomNum);
console.log(card);
})();