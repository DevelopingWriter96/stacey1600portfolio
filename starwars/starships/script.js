import { starships } from '../data/starships.js'

console.log(starships.length)

const ships = document.querySelector('#ships')

function shipLoop(starships) {
    starships.forEach(starship => {
        let shipFig = document.createElement('figure')
        let shipItem = document.createElement('figcaption')
        shipItem.textContent = starship.name

        ships.appendChild(shipFig)
    })
}

shipLoop(starships);