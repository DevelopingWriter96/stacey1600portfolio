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
}

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});