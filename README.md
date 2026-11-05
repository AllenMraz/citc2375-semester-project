Game Collection


## Project Deployment

- Github repository: https://github.com/AllenMraz/citc2375-semester-project
- Live Site: https://citc2375-semester-amraz-project.onrender.com
- Project Topic: this is an application that will log and keep track of games. They will be catogrized by genre of game

## Planned Data Model

    Fields
    - Title
    - discription
    - genre
    - platforms avalible 
      -- PC
      -- Xbox
      -- Playstation
      -- Switch 2
    - link to relivent store pages for the game

## Project Progress Week 3
Added maltiple css class to more efficintly style with css. On the main page the there is a game-card class that is used as the infomation blocks for each of the games. Both home and about shair basic structer classes such as page-discription these classes will be used in most pages. main and header will be consistent bettwen all pages no need to make a new class for them.

## Project Progress Week 4
Implemented flexbox to help with the layout of the indivudal item cards for better wraping and orintation. Each card now has a drop shadow that now lights up when you hover over it. Also Added some variabels for easy reuse of colors. changed the link buttons so they would expand and fit more of the screen will ajust acordingly when more pages are add.

## Project Progress Week 5
Added an add page using a form that will later on be the main way of adding new iteams cards on the main page. The form asks for the title of the game, an image, the genere, platforms it is on, and corisponding links to the respective stores.Added a tabel in the about page that displays the number of games for each gaming platform.

## Project Progress Week 6
Added a js page called apps and added some basic js lines. these js lines inclued a template for adding more games into a total count of games, a sentence displaying the number of games, and a check to see if there is games in the colection.

## Project Progress Week 9
Added a js page called data that stores a array of game objects that contains the information that the cards contain. This js page also has three funchions on to grab a spicifice item by id, one that collects an array of games by genre, and the last one caluelates how many games there are for indvidual platforms. converst items into json the terns it back into js code. updated app.js so it calls the functions from data.js.

## Project Progress Week 10
Changed the display for the cards from flex box to grid. The grid will adjust its columns to fit the screen. Added a quirey select that checks to see if the screen is a sertent size to help provent the columns from being pushed off screen. Added a few utitlity classes for consistent desine. Implemented a few of those utitlity classes for sertent elements.

## Project Progress Week 11
Removed the example cards and replaced them with a JovaScript code that will render the items list from data.js instead. Added a search filter bar that will allow the user to search by genre, platform, and by title. Added event handers for the search bar items that will call the respectied getGamesBy funchions to create a list of games fitting the filter, and then update the display. Added a favorit button to the game cards this allows the user to mark a game as a favorite. The favorite button uses localStorage to store the users input to save there favorits. Currently the only indicator that a game is in favorites is that the button will change from "Add to Favorites" to "Remove from Favorites" later use of the favorite list will be added. Also uses the localStorage to store the users last used filter for genre and platform. Currently changing one filter will clear all other filters. A system to have both the genre and platform filters active will be added later. Currently the links to the stores are not inclued but will be added back later into development. Some miner changes to the style were made mostly when it comes to the new additons, but the input button in add now has a border and the images are now stored in the system resther then pulling them from online.

## Project Progress Week 12
Started to convert the project into react. Got the index built using react. tranferid old project to client-static to keep as a template. fixed a logic issue in the old verion that would provent game cards from loading when there was nothing in the locale storge for faviorate games. The new version of index now dose not need to clear filters and now combines all three filters for better search potential. add and about pages still need to be built using react. 