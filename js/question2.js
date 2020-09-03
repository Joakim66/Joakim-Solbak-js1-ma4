// question 2

const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

const gamesInfoContainer = document.querySelector(".container");

async function getGames(){
  try{
    const response = await fetch(url);

    const gamesResults = await response.json();

    const games = gamesResults.results;

    gamesInfoContainer.innerHTML = "";

    for(let i = 0; i < games.length; i++){
      gamesInfoContainer.innerHTML += 
      `<div class="gamesInfo">
        <h2>${games[i].name}</h2>
        <p>Released: <time>${games[i].released}</time></p>
        <p>Rating: ${games[i].rating}</p>
        <a href="question3.html?id=${games[i].id}">
        Learn more
        </a>
      </div>`
    };
  }
  catch(error) {
    gamesInfoContainer.innerHTML = `<div>An error occured.</div>`
  };
};

getGames();