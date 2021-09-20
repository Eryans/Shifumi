/* !! Code rewrote during exercice correction !! */
let playerName = "";
let playerInput;
let playerScore = 0;
let playerBigScore = 0;

let aiInput;
let aiScore = 0;
let aiBigScore = 0;


let round = 0;
const scoreToWin = 3;
const entryArr = ["rock","paper","scissors"];
const entryCheck = [{
    entry : entryArr[0],
    winTo : entryArr[2]
},{
    entry : entryArr[1],
    winTo : entryArr[0]
},{
    entry : entryArr[2],
    winTo : entryArr[1]
}];

const winMessage = "\n\nYou win this round !";
const loseMessage = "\n\nYou lose this round !";
const drawMessage = "\n\nIt's a draw !";
const leaveMessage = "\n\nSee you soon ! :)";
const plAgMessage = "\n\nDo you wish tou play again ?";
const bigWinMessage = "You win the game ! Congratulation !\n\nDo you want to play again ?";
const bigLoseMessage = "AI win the game ! Too bad !\n\nDo you want to play again ?";

/* -----------------------------Function------------------------------------------ */

// Ask name and restrict user to a name between 2 and 20 chars. 
function askName(){
    let name = prompt("What is your name ? ( must be between 2 and 20 characters. )");
    if ( name.length < 2 || name.length > 20 || name === undefined){
        alert("Name is incorrect. Please enter your name again.");
        askName();
    } else {
        return name;
    }
}
// Ask for player's input 
function askShiFuMi(){
    let entry = prompt("Choose : " + entryArr.join(" or ") + "?\nYou must type your selection")
    for (let i = 0; i < entryArr.length;i++){
        if (entry.toLocaleLowerCase() === entryArr[i]){
            return entryArr[i];
            // returning array value to avoid error in futur check and removing possibility of capital letter error
        }
    }
    alert("Entry was incorrect.\nPlease try again.")
    askShiFuMi();
}
// Returns rock,paper,scissors randomly
function aiShiFuMi(){
    let random = Math.floor(Math.random() * entryArr.length); //Using Math.floor instead of round to avoid returning a 3 which crashes the game
    return entryArr[random];
}
function reset(){
    playerScore = 0;
    aiScore = 0;
    round = 0;
}
// Reset score and round and update turn if player wants to replay. 
// Leave browser tab if player wants to leave
function checkForWinner(){
    if (playerScore >= scoreToWin){
        let checkBox = confirm(bigWinMessage); 
            if (checkBox){ 
                reset();
                playerBigScore++;
                gameLoop();
            } else {
                alert(leaveMessage);
                window.close();
            }
    } else if (aiScore >= scoreToWin){
        let checkBox = confirm(bigLoseMessage);
        if (checkBox){
            reset();
            aiBigScore++;
            gameLoop();
        } else {
            alert(leaveMessage);
            window.close();
        }
    }
}
// Check player and ai input and update score
// New, beautiful and glorious compare function
function ShiFuMi(playerSFM,aiSFM){
    // For some reason using ${} to put playerScore or aiScore in the message string doesn't update the score.
    const separation = "                                                               ";
    let choices = "\n\n" + playerName + " : " + playerSFM + " VS " + aiSFM + " : AI\n\n";
    let finalMessage = "";
    let playerWin = false;

    round++;
    if (playerSFM === aiSFM){
        finalMessage = "it's a draw !";
    } else {
        for (let i = 0; i < entryCheck.length; i++){
            if (playerSFM === entryCheck[i].entry && aiSFM === entryCheck[i].winTo){
                playerWin = true;
            } 
        }
        if (playerWin){
            playerScore++;
            finalMessage = winMessage;
        } else {
            aiScore++;
            finalMessage = loseMessage;
        }
    }
    alert(playerName + ": " + playerBigScore + separation + aiBigScore + ": AI"+
    "\nRound : " + round + "\n\nYour current score : " + playerScore + "\nAI current score : " + aiScore + choices + finalMessage);
    gameLoop();
}
/*----------------------------Logic--------------------------- */
function gameLoop(){    
    checkForWinner();
    playerInput = askShiFuMi();
    aiInput = aiShiFuMi();
    ShiFuMi(playerInput,aiInput);
}
alert("Welcome to Jules's Shi Fu Mi game !");
playerName = askName();
alert(`Welcome ${playerName} !\nYou will play Shi Fu Mi against my super intelligent AI today !\nYou must win 3 round to score !`);
gameLoop();  







// Old stinky and ugly ShiFuMi function. I'm letting this here to scare the childrens

/*function ShiFuMi(playerSFM,aiSFM){
    // 0 = rock / 1 = paper / 2 = scissors
    // This was written just to have a fonctionnal prototype
    // if player win or lose a confirm prompt ask him if he wants to play again or leave.
    // TODO Clean up this spaghetti code. 
    if (playerSFM === aiSFM){
        alert("Current Score : " + playerScore + drawMessage);
        gameLoop(); // if draw go back to main loop
    }
    else if (playerSFM === entryArr[0]){
        if (aiSFM === entryArr[1]){
            let checkBox = confirm("Current Score : " + playerScore + loseMessage); 
            if (checkBox){
                gameLoop();
            } else {
                alert("Current Score : " + playerScore + leaveMessage);
                return;
            }
        } else if (aiSFM === entryArr[2]){
            playerScore++;
            let checkBox = confirm("Current Score : " + playerScore + winMessage);
            if (checkBox){
                gameLoop();
            } else {
                alert("Current Score : " + playerScore + leaveMessage);
                return;
            }
        }
    }
    else if (playerSFM === entryArr[1]){
        if (aiSFM === entryArr[2]){
            let checkBox = confirm("Current Score : " + playerScore + loseMessage);
            if (checkBox){
                gameLoop();
            } else {
                alert("Current Score : " + playerScore + leaveMessage);
                return;
            }
        } else if (aiSFM === entryArr[0]){
            playerScore++
            let checkBox = confirm("Current Score : " + playerScore + winMessage);
            if (checkBox){
                gameLoop();
            } else {
                alert("Current Score : " + playerScore + leaveMessage);
                return;
            }
        }
    }
    else if (playerSFM === entryArr[2]){
        if (aiSFM === entryArr[0]){
            let checkBox = confirm("Current Score : " + playerScore + loseMessage);
            if (checkBox){
                gameLoop();
            } else {
                alert("Current Score : " + playerScore + leaveMessage);
                return;
            }
        } else if (aiSFM === entryArr[1]){
            playerScore++;
            let checkBox = confirm("Current Score : " + playerScore + winMessage);
            if (checkBox){
                gameLoop();
            } else {
                alert("Current Score : " + playerScore + leaveMessage);
                return;
            }
        }
    } 
}
*/


