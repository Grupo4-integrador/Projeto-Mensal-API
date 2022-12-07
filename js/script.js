// Pega a section do html que irá conter os cards dos jogos.
let gamesList = document.getElementById('games-list');

// Coloca o método "GET" e a chave de acesso a API em uma const.
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8986061a9cmsh5eca69595d7c116p175199jsn2ef0c3a4413c',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

// função que cria o card dos jogos usando o conteúdo da struct recebida da API
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

// função que acessa a API
function searchInApi() { // como exemplo, está buscando por popularidade e 
                         // para todas as plataformas(pc e browser)
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity&platform=all', options)
        .then((response) => {
            response.json()                  // se der certo, recebe a struct
            .then(data => createCard(data)); // com os dados dos jogos, e chama
        })                                   // a função que cria os cards.              
        .catch(() => alert("Houve algum erro!"));
}       // se der errado, exibe mensagem de erro na tela.

searchInApi();
