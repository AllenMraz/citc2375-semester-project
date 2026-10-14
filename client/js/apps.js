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



console.log(getGameById(1, items)); // Accessing the first game item from the data.js file
console.log(getGamesByGenre("Simulation", items)); // Accessing games by genre from the data.js file
console.log(getCountByPlatform("PC", items)); // Accessing the count of games by platform from the data.js file