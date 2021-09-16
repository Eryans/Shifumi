alert("Welcome to Jules's Shi Fu Mi game !");

function askName(){
    let name = prompt("test");
    if (( name.length < 2 || name.length > 20)){
        alert("Name is incorrect. Please enter your name again");
        askName();
    } else {
        return name;
    }
}

const playerName = askName();
alert(`Welcome ${playerName} !`);