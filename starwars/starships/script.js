import { starships } from '../data/starships.js'
import { getLastNumber } from '../utilities/script.js'

console.log(starships.length)

const ships = document.querySelector('#ships')
const shipView = document.querySelector('#shipview')

function shipLoop(starships) {
    starships.forEach(starship => {
        let shipFig = document.createElement('figure')
        let shipItem = document.createElement('figcaption')
        shipItem.textContent = starship.name
        shipFig.appendChild(shipItem)
        ships.appendChild(shipFig)
    })
}

function createShipView(shipData) {
    let shipNum = getLastNumber(shipData.url)
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipFig.appendChild(figImg)
    shipFig.appendChild(shipItem)
}

shipLoop(starships);

createShipView();