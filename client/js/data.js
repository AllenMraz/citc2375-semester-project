const items = [gameItem1 = {id: 1, name: "Dwarf Fortress", genre: "Simulation", description: "A simulation game about managing a dwarven colony.", platform: ["PC"]},
    gameItem2 = {id: 2, name: "RimWorld", genre: "Simulation", description: "A colony simulation game where you control a group of survivors.", platform: ["PC"]},
    gameItem3 = {id: 3, name: "Slay the Spire 2", genre: "Roguelike", description: "A deck-building roguelike game.", platform: ["PC"]},
    gameItem4 = {id: 4, name: "The Legend of Zelda: Breath of the Wild", genre: "Action-Adventure", description: "An open-world action-adventure game.", platform: ["Nintendo Switch"]}, 
    gameItem5 = {id: 5, name: "The Witcher 3", genre: "RPG", description: "A role-playing game set in a fantasy world.", platform: ["PC", "PlayStation 4", "Xbox One"]}, 
    gameItem6 = {id: 6, name: "Stardew Valley", genre: "Simulation", description: "A farming simulation game.", platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"]}];

function getGameById(id, items) {
    return items.find(item => item.id === id);
}

function getGamesByGenre(genre, items) {
    return items.filter(item => item.genre.toLowerCase() === genre.toLowerCase());
}

function getCountByPlatform(platform, items) {
    let count =0;
    for (let i = 0; i < items.length; i++){
        if (items[i].platform.includes(platform)){
            count++;
        }
    }
    return count;
}

const itemJson = JSON.stringify(items);
const itemJsonParsed = JSON.parse(itemJson);
console.log(itemJsonParsed[0]);