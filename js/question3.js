// question 3
const main = document.querySelector("main");
    
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const gameURL = "https://api.rawg.io/api/games/" + id;

async function getGame(){
  try{
    const response = await fetch(gameURL);

    const gameDetails = await response.json();

    main.innerHTML = "";
    
    let gamePlatform = [];
    for(let i = 0; i < gameDetails.platforms.length; i++){
      gamePlatform += `<li>${gameDetails.platforms[i].platform.name}</li>`
    }

    main.innerHTML +=
    `<header
    style="background-image: url('${gameDetails.background_image}')">
      <h1>${gameDetails.name}</h1>
    </header>
    <div class="gameInfo">
      <p>Released: ${gameDetails.released}</p>
      <p>Rating: ${gameDetails.rating}</p>
      <p>Platforms: </p>
      <ul>${gamePlatform}</ul>
      ${gameDetails.description}
      <a href="${gameDetails.metacritic_url}">
      Metacritic Link</a>
    </div>`
  }
  catch(error) {
    main.innerHTML = `<div>An error occured.</div>`
  };
};

getGame();