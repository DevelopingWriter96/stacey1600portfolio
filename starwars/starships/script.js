import { starships } from '../data/starships.js'

console.log(starships.length)

const ships = document.querySelector('#ships')

function shipLoop(starships) {
    starships.forEach(starship => {
        let shipItem = document.createElement('li')
        shipItem.textContent = starship.name

        ships.appendChild(shipItem)
    })
}

shipLoop(starships);