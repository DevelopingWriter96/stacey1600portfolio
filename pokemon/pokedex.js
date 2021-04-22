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
                await getAPIData(singlePokemon.url).then {
                    (pokeData) => fillPokeCard(pokeData)
                }

            } 
        }
    )
}

function fillPokeCard(singlePokemon) {
    console.log(singlePokemon)
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    
    pokeCard.appendChild(fillCardFront(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function fillCardFront(pokemon) {
    let pokeFront= document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel= document.createElement('p')
    frontLabel.textContent = pokemon.name
    let frontImage= document.createElement('img')
    frontImage.src = `images/00${pokemon.id}.png`

    pokeFront.appendChild(frontLabel)
    pokeFront.appendChild(frontImage)
    return pokeFront
}