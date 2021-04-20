const pokeGrid = document.querySelector('.pokeGrid')

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json
        return data
    } catch (error) {
        console.log(error)
    }
}

function loadPoke() {
    const response = getAPIData('https://pokeapi.co/api/v2/pokemon/6');
    console.log(response);
}

loadPoke();