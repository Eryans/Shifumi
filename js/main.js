let playerName = "";
let playerInput;
var playerScore = 0;

let aiInput;

const entryArr = ["rock","paper","scissors"];
let winMessage = "\n\nYou win ! :D\nPlay again ?";
let loseMessage = "\n\nYou lose :(\nPlay again ?";
let drawMessage = "\n\nIt's a draw !";
let leaveMessage = "\n\nSee you soon ! :)";

// Initialization
alert("Welcome to Jules's Shi Fu Mi game !");
playerName = askName();
alert(`Welcome ${playerName} !\nYou will play Shi Fu Mi against my super intelligent AI today !`);
// Loop
gameLoop();  


// Game Loop's logic goes here
function gameLoop(){    
    playerInput = askShiFuMi();
    aiInput = aiShiFuMi();
    compareShiFuMi(playerInput,aiInput);
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

// Check player and ai input and update score
// Returns either "win" "draw" "lose"
function compareShiFuMi(playerSFM,aiSFM){
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



