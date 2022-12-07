let gamesList = document.getElementById('games-list');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8986061a9cmsh5eca69595d7c116p175199jsn2ef0c3a4413c',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

function createCard(data) {
    let gameCard = document.createElement('article');
    gameCard.innerHTML = `
        <a href="${data[0].game_url}">
        <img src="${data[0].thumbnail}">
        <h1>${data[0].title}</h1>
        <p>${data[0].genre}</p>
        <p>${data[0].platform}</p>
        </a>
    `;
    gamesList.appendChild(gameCard);
}

function searchInApi() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical', options)
        .then((response) => {
            response.json()
                .then(data => createCard(data));
        })
        .catch(() => alert("Houve algum erro!"));
}

searchInApi();
