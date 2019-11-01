"use strict";

// beginning bank----------->
var counter = 3000;
//audio files linked to vars ------------------->
var coin = new Audio("assets/smb_coin.wav");
var oneUp = new Audio("assets/smb_1-up.wav");
var over9k = new Audio("assets/over9000.swf.mp3");
var loss = new Audio("assets/smb_bump.wav");
var gameover = new Audio("assets/smb_gameover.wav");


function write_message($message) {
    document.getElementById('messages').innerHTML = $message;
}


// spin function generates random numbers, compares random numbers, and then executes based on conditional.
function spin() {
    if (counter > 0) {
        counts(-250);
        var first = Math.floor((Math.random() * 9) + 1);
        var second = Math.floor((Math.random() * 9) + 1);
        var third = Math.floor((Math.random() * 9) + 1);

        document.getElementById('first').innerHTML = first;
        document.getElementById('second').innerHTML = second;
        document.getElementById('third').innerHTML = third;

        if (first === second && first === third) {
            counter += 2000;
            document.getElementById("messages").innerText = "2000 Jackpot!!";
            oneUp.play();
        } else if (first === second || second === third || third === first) {
            counter += 1000;
            document.getElementById("messages").innerText = "+1000 Points!!";
            coin.play();
        } else {
            counter -= 500;
            document.getElementById("messages").innerText = "-500 Womp Womp";
            loss.play();
        }

    } else {    //else to the if counter > 0 aka, game over
        write_message("You're all out of credits!");
        gameover.play();
        document.getElementById('first').innerHTML = '<i class="fas fa-skull"></i>';
        document.getElementById('second').innerHTML = '<i class="fas fa-skull"></i>';
        document.getElementById('third').innerHTML = '<i class="fas fa-skull"></i>';
        document.getElementById("counter").innerHTML = "0000";

    }
    if (counter > 9000) {
        over9k.play()
    }
}

//counter, keeps track of cost to play and winnings/losings credits
function counts(value) {
   var count = counter + value;
    document.getElementById("counter").innerHTML = count;
}

