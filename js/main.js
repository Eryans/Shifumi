let playerName = "";
let playerInput;
let playerScore = 0;
let playerBigScore = 0;

let aiInput;
let aiScore = 0;
let aiBigScore = 0;

let turn = 0;
let round = 0;
const roundToWin = 3;
const entryArr = ["rock","paper","scissors"];
const entryCheck = [{
    entry : entryArr[0],
    win : entryArr[2],
    lose : entryArr[1]
},{
    entry : entryArr[1],
    win : entryArr[0],
    lose : entryArr[2]
},{
    entry : entryArr[2],
    win : entryArr[1],
    lose : entryArr[0]
}];

const winMessage = "\n\nYou win this round !";
const loseMessage = "\n\nYou lose this round !";
const drawMessage = "\n\nIt's a draw !";
const leaveMessage = "\n\nSee you soon ! :)";
const plAgMessage = "\n\nDo you wish tou play again ?";
const bigWinMessage = "You win the game ! Congratulation !\n\nDo you want to play again ?";
const bigLoseMessage = "AI win the game ! Too bad !\n\nDo you want to play again ?";

// Initialization
alert("Welcome to Jules's Shi Fu Mi game !");
playerName = askName();
alert(`Welcome ${playerName} !\nYou will play Shi Fu Mi against my super intelligent AI today !`);
// Loop
gameLoop();  


// Game Loop's logic goes here
function gameLoop(){    
    checkForWinner();
    playerInput = askShiFuMi();
    aiInput = aiShiFuMi();
    ShiFuMi(playerInput,aiInput);
}

// Ask name and restrict user to a name between 2 and 20 chars. 
// Value is returned to a playerName variable.
function askName(){
    let name = prompt("What is your name ? ( must be between 2 and 20 characters. )");
    if ( name.length < 2 || name.length > 20 || name === undefined){
        alert("Name is incorrect. Please enter your name again");
        askName();
    } else {
        return name;
    }
}

// Ask for player's input 
function askShiFuMi(){
    let entry = prompt("Choose : Rock, Paper, or Scissors ?\nYou must type your selection")
    for (let i = 0; i < entryArr.length;i++){
        if (entry.toLocaleLowerCase() === entryArr[i]){
            return entryArr[i];
            // returning array value to avoid error in futur check
        }
    }
    // iterating throught an array with the possible answer 
    // and removing possibility of capital letter error
    alert("Entry was incorrect.\nPlease try again.")
    askShiFuMi();
}

// Returns rock,paper,scissors randomly
function aiShiFuMi(){
    let random = Math.floor(Math.random() * 3);
    return entryArr[random];
}

function checkForWinner(){
    if (playerScore >= roundToWin){
        let checkBox = confirm(bigWinMessage); // Reset score and round and update turn if player wants to replay. Leave window tab if player wants to leave
            if (checkBox){
                playerScore = 0;
                aiScore = 0;
                round = 0;
                playerBigScore++;
                turn++;
                gameLoop();
            } else {
                alert(leaveMessage);
                window.close();
            }
    } else if (aiScore >= roundToWin){
        let checkBox = confirm(bigLoseMessage);
        if (checkBox){
            playerScore = 0;
            aiScore = 0;
            round = 0;
            aiBigScore++;
            turn++;
            gameLoop();
        } else {
            alert(leaveMessage);
            window.close();
        }
    }
}

// Check player and ai input and update score
// Returns either "win" "draw" "lose"

// New, beautiful and glorious compare function
function ShiFuMi(playerSFM,aiSFM){
    // 0 = rock / 1 = paper / 2 = scissors
    // if player win or lose a confirm prompt ask him if he wants to play again or leave
    // For some reason using ${} to put playerScore or aiScore in the message string doesn't update the score.
    let choices = "\n\n" + playerName + " : " + playerSFM + " VS " + aiSFM + " : AI\n\n";
    let showTurn = "Turn : ";
    let showRound = "\nRound : ";
    let showScore = "\n\nYour current score : "; // Cannot add Score var here or it's not updated on time
    let showAiScore = "\nAI current score : "; 

    if (playerSFM === aiSFM){
        round++;
        alert(showTurn + turn + showRound + round + showScore + playerScore + choices + "It's a draw !");
        gameLoop();
    }
    for (let i = 0; i < entryCheck.length; i++){
        if (playerSFM === entryCheck[i].entry){
            if (aiSFM === entryCheck[i].win){
                playerScore++;
                round++
                alert(showTurn + turn + showRound + round + showScore + playerScore + showAiScore+ aiScore + choices + winMessage)
                gameLoop();
            } else {
                aiScore++;
                round++;
                alert(showTurn + turn + showRound + round + showScore + playerScore + showAiScore + aiScore + choices + loseMessage)
                gameLoop();
            }
        }
    }
}

// Old stinky and ugly function. I'm letting this here to scare the childrens

/*function ShiFuMi(playerSFM,aiSFM){
    // 0 = rock / 1 = paper / 2 = scissors
    // if player win or lose a confirm prompt ask him if he wants to play again or leave
    // For some reason using ${} to put playerScore in the message string doesn't update the score.
    // TODO find a wind to clean up this spaghetti code. Use loop or recursive func maybe ?
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


