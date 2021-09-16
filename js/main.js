
let entryArr = ["rock","paper","scissors"];
let playerName = "";
let aiInput;

alert("Welcome to Jules's Shi Fu Mi game !");
playerName = askName();
alert(`Welcome ${playerName} !\nYou will play Shi Fu Mi against my super intelligent AI today !`);
gameLoop();  

// askName function does as its name implies and restrict user
// to a name between 2 and 20 chars. value is returned to a playerName variable.
function askName(){
    let name = prompt("What is your name ? ( must be between 2 and 20 characters. )");
    if (( name.length < 2 || name.length > 20)){
        alert("Name is incorrect. Please enter your name again");
        askName();
    } else {
        return name;
    }
}

// function to Ask for player's input 
function askShiFuMi(){
    let entry = prompt("Choose : Rock, Paper, or Scissors ?\nYou must type your selection")
    for (let i = 0; i < entryArr.length;i++){
        if (entry.toLocaleLowerCase() === entryArr[i]){
            return entry;
        }
    }
    // iterating throught an array with the possible answer 
    // and removing possibility of capital letter error
    alert("Entry was incorrect.\nPlease try again.")
    askShiFuMi();
}

// This fucking returns rock,paper,scissors randomly
function aiShiFuMi(){
    let random = Math.round(Math.random() * 3);
    return entryArr[random];
}

// Game Loop's logic goes here
function gameLoop(){
    
    let playerShiFuMi = askShiFuMi();

}

