const pokeGrid = document.querySelector('.pokeGrid')
const loadPoke = document.querySelector('.loadPoke')
const addButton = document.querySelector('#addPoke')

class Pokemon {
    constructor(name, height, weight) {
        this.id = 152;
        this.types.type.name = 'Normal';
        this.name = name;
      this.height = height;
      this.weight = weight;
    }
  }

addButton.addEventListener('click', () => {
    let pokeName = prompt('What is the name?')
    let pokeHeight = prompt('How Tall is it?')
    let pokeWeight = prompt('How Heavy is it?')
    let customPoke = new Pokemon(
        pokeName,
        pokeHeight,
        pokeWeight
    )
    fillPokeCard(customPoke)
    console.log(customPoke)
})  

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
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
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
    let nameLabel= document.createElement('p')
    nameLabel.textContent = `#${getImageFileName(pokemon)} ${pokemon.name}`
    pokeBack.appendChild(nameLabel)
    let typeBackLabel = document.createElement('p')
    typeBackLabel.textContent = 'Type:'
    pokeBack.appendChild(typeBackLabel) 
    pokemon.types.forEach((pokeType) => {
    let backType = document.createElement('p')
    backType.textContent = pokeType.type.name
    pokeBack.appendChild(backType)
    })
    let backSprite = document.createElement('img')
    backSprite.src = `images/${getImageFileName(pokemon)}MS.png`
    pokeBack.appendChild(backSprite)
    let backLabel1 = document.createElement('p')
    backLabel1.textContent = `Height: ${pokemon.height / 10} m`
    pokeBack.appendChild(backLabel1)
    let backLabel2 = document.createElement('p')
    backLabel2.textContent = `Weight: ${pokemon.weight / 10} kg`
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