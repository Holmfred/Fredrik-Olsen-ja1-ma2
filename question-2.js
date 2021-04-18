const url = "https://rawg-video-games-database.p.rapidapi.com/games"

const key = { "headers": {
    "x-rapidapi-key": "09a0428acamsh48cb2c73b238492p1590c8jsnbbfdc2570bf5",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
}};

const resultsContainer = document.querySelector("body");


async function dontKnowYet () {

    const response = await fetch(url, key);

    const data = await response.json();

    const games = data.results;

    resultsContainer.innerHTML = "";

    for(let i = 0; i < games.length; i++){
        console.log(games[i].name, games[i].rating, games[i].tags.length)

        const combined = games[i].name +" "+ games[i].rating +" "+ games[i].tags.length

        if (i === 8){
            break
        }

        resultsContainer.innerHTML += `<div>${combined}</div>`;
    }
}

dontKnowYet();