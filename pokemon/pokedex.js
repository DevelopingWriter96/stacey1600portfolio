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
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(
        async (data) => {
            for (const singlePokemon of data.results) {
                await getAPIData(singlePokemon.url).then(
                    (pokeData) => fillPokeCard(pokeData)
                )

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
    pokeCard.appendChild(fillCardBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function fillCardFront(pokemon) {
    let pokeFront= document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel= document.createElement('p')
    frontLabel.textContent = pokemon.name 
    let frontImage= document.createElement('img')
    frontImage.src = `images/${getImageFileName(pokemon)}.png`

    pokeFront.appendChild(frontLabel)
    pokeFront.appendChild(frontImage)
    return pokeFront
}

function fillCardBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    let backLabel1 = document.createElement('p')
    backLabel1.textContent = `Height: ${pokemon.height}`
    pokeBack.appendChild(backLabel1)
    let backLabel2 = document.createElement('p')
    backLabel2.textContent = `Weight: ${pokemon.weight}`
    pokeBack.appendChild(backLabel2)
    return pokeBack
}

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100){
        return `0${pokemon.id}`
    } else {
        return `${pokemon.id}`
    }
}