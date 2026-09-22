const title = "Game Collection";
const startingGames = 3;
const isWorking = true;

let gameTotal = startingGames; 
gameTotal = gameTotal + 1; // This is a placeholder for the total of games in the collection.

const gameTotalSentence = `I have ${gameTotal} games in my collection.`;

if(gameTotal > 0) {
    console.log(gameTotalSentence);
}else{
    console.log("I have no games in my collection.");
}