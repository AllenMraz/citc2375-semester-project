export const items = [gameItem1 = {id: 1, name: "Dwarf Fortress", image: "dwarf-fort.jpg", genre: "Colony Management", description: "A simulation game about managing a dwarven colony.", platform: ["PC"]},
    gameItem2 = {id: 2, name: "RimWorld", image: "rimworld.jpg", genre: "Colony Management", description: "A colony simulation game where you control a group of survivors.", platform: ["PC"]},
    gameItem3 = {id: 3, name: "Slay the Spire 2", image: "slay-spi2.jpg", genre: "Roguelike", description: "A deck-building roguelike game.", platform: ["PC"]},
    gameItem4 = {id: 4, name: "The Legend of Zelda: Breath of the Wild", image: "Breath.jpg", genre: "Action-Adventure", description: "An open-world action-adventure game.", platform: ["Nintendo"]}, 
    gameItem5 = {id: 5, name: "The Witcher 3", image: "witcher3.jpg", genre: "RPG", description: "A role-playing game set in a fantasy world.", platform: ["PC", "PlayStation", "Xbox"]}, 
    gameItem6 = {id: 6, name: "Stardew Valley", image: "stardew.jpg", genre: "Farming", description: "A farming simulation game.", platform: ["PC", "PlayStation", "Xbox", "Nintendo"], favorite: false}];

function getGameById(id) {
    return items.find(item => item.id === id);
}

function getGamesByName(name) {
    return items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
}

function getGamesByGenre(genre, items) {
    if (genre.toLowerCase() === "all".toLowerCase()) {
        return items;
    }
    return items.filter(item => item.genre.toLowerCase() === genre.toLowerCase());
}

function getGamesByPlatform(platform , items) {
    if (platform.toLowerCase() === "all".toLowerCase()) {
        return items;
    }
    return items.filter(item => item.platform.includes(platform));
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