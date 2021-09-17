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
let playerSFM = entryArr[1];
let aiSFM = entryArr[2];

function compareShiFuMi(playerSFM,aiSFM){
    // 0 = rock / 1 = paper / 2 = scissors
    // if player win or lose a confirm prompt ask him if he wants to play again or leave
    // For some reason using ${} to put playerScore in the message string doesn't update the score.
    if (playerSFM === aiSFM){
        console.log("Draw")
    }
    for (let i = 0; i < entryCheck.length; i++){
            if (playerSFM === entryCheck[i].entry){
                if (aiSFM === entryCheck[i].win){
                    console.log("Player Win")
                } else {
                    console.log("Player lose");
                }
            }
    }
}
compareShiFuMi(playerSFM,aiSFM)
console.log(entryCheck[0]);