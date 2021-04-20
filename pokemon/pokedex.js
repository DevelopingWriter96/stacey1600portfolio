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
        (data) => {
            console.log(data)
        }
    )
}