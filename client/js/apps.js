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
console.log(getGamesByGenre("Colony Management", items)); // Accessing games by genre from the data.js file
console.log(getCountByPlatform("PlayStation", items)); // Accessing the count of games by platform from the data.js file

const gameCollection = document.getElementById("game-collection");
const gamePlatformFilter = document.getElementById("platform-filter");
const gameGenreFilter = document.getElementById("genre-filter");
const gameSearchInput = document.getElementById("search-input");
const favoriteGameButtons = document.getElementsByClassName("favorite-btn");




function renderItems(itemsToRender){
    gameCollection.innerHTML = ""; // Clear the existing content before rendering new items
    for (let gameItem of itemsToRender) {
        const gameItemElement = document.createElement("div");
        gameItemElement.setAttribute("class", "game-card");
        const faviertList = JSON.parse(localStorage.getItem("favoriteGamesList"))


        gameItemElement.innerHTML = `
            <h3>${gameItem.name}</h3>
            <img src="images/${gameItem.image}" alt="${gameItem.name}" class="game-image">
            <p><strong>Genre:</strong> ${gameItem.genre}</p>
            <p><strong>Description:</strong> ${gameItem.description}</p>
            <p><strong>Platform:</strong> ${gameItem.platform.join(", ")}</p>
        `;
        const addButton = document.createElement("button");
        let favoritButtonTrue = true;
        addButton.setAttribute("class", "btn favorite-btn");
        addButton.setAttribute("data-id", gameItem.id);
        for(let id of faviertList){
            if(gameItem.id == id){
                favoritButtonTrue = false;
                break;
            }
            //console.log(id);
        }

        if(favoritButtonTrue){
            addButton.innerText = "Add to Favorite.";
        }else{
            addButton.innerText = "Remove from Favorite.";
        }
        gameItemElement.appendChild(addButton);
        gameCollection.appendChild(gameItemElement);
    }

}

let filteredItems = items; 
if(localStorage.getItem("lastPlat") !== null && localStorage.getItem("lastPlat") !== "all"){
    filteredItems = getGamesByPlatform(localStorage.getItem("lastPlat"), items);
    gamePlatformFilter.value = localStorage.getItem("lastPlat");
}
if(localStorage.getItem("lastGen") !== null && localStorage.getItem("lastGen") !== "all"){
    filteredItems = getGamesByGenre(localStorage.getItem("lastGen"), items);
    gameGenreFilter.value = localStorage.getItem("lastGen");
}
renderItems(filteredItems);


gamePlatformFilter.addEventListener("change", (filter) =>{
    filteredItems = getGamesByPlatform(filter.target.value , items);
    gameGenreFilter.value = "all"; // Reset the genre filter to "all" when a platform is selected
    gameSearchInput.value = ""; // Clear the search input when a platform is selected
    localStorage.setItem("lastPlat", filter.target.value);
    localStorage.setItem("lastGen", gameGenreFilter.value);
    renderItems(filteredItems);
});

gameGenreFilter.addEventListener("change", (filter) =>{
    filteredItems = getGamesByGenre(filter.target.value , items);
    gamePlatformFilter.value = "all"; // Reset the platform filter to "all" when a genre is selected
    gameSearchInput.value = ""; // Clear the search input when a genre is selected
    localStorage.setItem("lastPlat", gamePlatformFilter.value);
    localStorage.setItem("lastGen", filter.target.value);
    renderItems(filteredItems);
});

gameSearchInput.addEventListener("input", (search) =>{
    filteredItems = getGamesByName(search.target.value);
    gamePlatformFilter.value = "all"; // Reset the platform filter to "all" when a search is performed
    gameGenreFilter.value = "all"; // Reset the genre filter to "all" when a search is performed
    localStorage.setItem("lastPlat", gamePlatformFilter.value);
    localStorage.setItem("lastGen", gameGenreFilter.value);
    renderItems(filteredItems);
});

gameCollection.addEventListener("click", (event) => {
    const target = event.target;
    let favoriteGames;

    if (JSON.parse(localStorage.getItem("favoriteGamesList")) !== null){
        favoriteGames = JSON.parse(localStorage.getItem("favoriteGamesList"))
    } else {
        favoriteGames = [] 
    }
    let remove = false;
    for(let id of favoriteGames){
        if(id === target.dataset.id){
            remove = true;
            break;
        }
    }

    if(remove){
        const index = favoriteGames.indexOf(target.dataset.id)
        favoriteGames.splice(index, 1);

    }else{

    localStorage.setItem("favoriteGame", target.dataset.id);
    favoriteGames.push(localStorage.getItem("favoriteGame")); // Store the favorite game ID in the favoriteGames array
    }
    localStorage.setItem("favoriteGamesList", JSON.stringify(favoriteGames))
    console.log(favoriteGames); // Log the favorite game ID stored in localStorage
    renderItems(filteredItems);
});

console.log(localStorage.getItem("favoriteGamesList"));
 // Log the favorite game IDs stored in the array






    



