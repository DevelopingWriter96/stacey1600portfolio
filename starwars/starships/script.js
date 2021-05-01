import { starships } from '../data/starships.js'

console.log(starships.length)

const ships = document.querySelector('#ships')
const shipView = document.querySelector('#shipview')

function shipLoop(starships) {
    starships.forEach(starship => {
        let shipFig = document.createElement('figure')
        let shipItem = document.createElement('figcaption')
        shipItem.textContent = starship.name
        shipFig.appendChild(shipItem)
        let figImg = document.createElement('img')
        figImg.src = `https://starwars-visualguide.com/assets/img/films/${(i + 1)}.jpg`
        shipFig.appendChild(figImg)
        shipFig.appendChild(shipItem)
        ships.appendChild(shipFig)
    })
}

shipLoop(starships);