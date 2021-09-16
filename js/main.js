

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

function askShiFuMi(){
    let entry = prompt("Choose : Rock, Paper, or Scissors ?\nYou must type your selection")
    let entryArr = ["rock","paper","scissors"];
    for (let i = 0; i < entryArr.length;i++){
        if (entry.toLocaleLowerCase() === entryArr[i]){
            return entry;
        }
    }
    alert("Entry was incorrect.\nPlease try again.")
    askShiFuMi();
}

// Game Loop's logic goes here

alert("Welcome to Jules's Shi Fu Mi game !");
const playerName = askName();
alert(`Welcome ${playerName} !\nYou will play Shi Fu Mi against my super intelligent AI today !`);
const playerShiFuMi = askShiFuMi();
