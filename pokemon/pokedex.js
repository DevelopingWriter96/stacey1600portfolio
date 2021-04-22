const pokeGrid = document.querySelector('.pokeGrid')
const loadPoke = document.querySelector('.loadPoke')

loadPoke.addEventListener('click', () => {
    loadPage()
})

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then(
        (data) => {
            for (const singlePokemon of data.results) {

                fillPokeCard(singlePokemon)

            } 
        }
    )
}

function fillPokeCard(singlePokemon) {
    console.log(singlePokemon);
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    //let pokeFront = document.createElement('div')
    //pokeFront.className = "card__face card__face--front"
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
    pokeCard.appendChild(singlePokemon)
}

//var card = document.querySelector('.card');
//card.addEventListener( 'click', function() {
  //card.classList.toggle('is-flipped');
//});