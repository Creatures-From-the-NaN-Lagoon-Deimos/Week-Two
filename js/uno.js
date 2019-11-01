


/**************************/
// creation of variables //
/*************************/

var player1Hand = [];
var player2Hand = [];
var player3Hand = [];
var discard = [];
var players = [
    player1Hand,
    player2Hand,
    player3Hand
];


var randomItem = function () {
    return deck[Math.floor(Math.random() * deck.length)];
};

/******************************************/
// ============ INTIAL DEAL =============== //
/******************************************/

function deal() {
    for (var i = 0; i < 4; i++) {
        randomItem();
        player1Hand.unshift(randomItem());
        randomItem();
        player2Hand.unshift(randomItem());
        randomItem();
        player3Hand.unshift(randomItem());
      }
}

deal();

// check the players hands//
console.log(player1Hand);
console.log(player2Hand);
console.log(player3Hand);

/*************************************************************/
// ============ begin iterating through players =========== //
/************************************************************/


        discard = deck[Math.floor(Math.random() * deck.length)];

        /*************************/
        // first in discard pile //
        /*************************/

        console.log("The starting discard is: " + discard.value + " " + discard.color);

        /****************************/
        // loop through each player //
        /****************************/

        var i = 0;
        while (player1Hand.length !== 0 && player2Hand.length !== 0 && player3Hand.length !== 0) {
            for (i = 0; i < players.length; i++) {
                for (var j = 0; j < players[i].length; j++) {
                    if (player1Hand.length === 0 || player2Hand.length === 0 || player3Hand.length === 0) {
                        break;
                    } else {

                        /***********************************************************/
                        // ========= if the player has the matching card ========= //
                        /***********************************************************/

                        if (players[i][j].value === discard.value || players[i][j].color === discard.color) {
                            console.log("Player " + i + " played a " + players[i][j].value + " " + players[i][j].color + "! This worked!");
                            console.log("=========");
                            discard = players[i][j];
                            players[i].splice(players[i][j], 1);
                            if (players[i].length < 1) {
                                console.log("Player " + i + " wins!!");
                                break;
                            } else {
                                console.log("Player " + i + " now has " + players[i].length + " cards!");
                                console.log("=========");
                            }

                            /***********************************************************/
                            // =========== if the player has a wild card ============= //
                            /***********************************************************/

                        } else if (players[i][j].name.includes("wildCard")) {
                            console.log("Player " + i + " discarded a " + discard.color + " " + discard.value);
                            console.log("=========");

                            /*************************************************************/
                            //========== if the player doesn't have the card ===========//
                            /*************************************************************/

                        } else if (players[i][j] !== (players[i].length - 1)) {
                            // THE LINE BELOW CREATES AN INFINITE LOOP ??!!?? //
                            console.log("Player " + i + " tried to play a " + players[i][j].value + " " + players[i][j].color + " to no avail. Trying another card.");
                            console.log("=========");
                            for (var y = 0; y < players[i][j].length; y++) {
                                if (players[i][j].value !== discard.value || players[i][j].color !== discard.color) {
                                    players[i].unshift(randomItem());

                                }
                            }
                            console.log("Player " + i + " had to draw another card. They got a " + players[i][j].color + " " + players[i][j].value);

                        } else {
                                console.log("Player " + i + " has no cards available. Moving to next player.");
                            console.log("=========");
                                break;
                        }
                    }
                }
            }
        }




