import { starships } from '../data/starships.js'

console.log(starships.length)

const ships = document.querySelector('#ships')

function shipLoop(starships) {
    starships.forEach(starship => {
        let shipFig = document.createElement('figure')
        let shipItem = document.createElement('figcaption')
        shipItem.textContent = starship.name
        shipFig.appendChild(shipItem)
        ships.appendChild(shipFig)
    })
}

function populateShipView(shipData) {
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/9.jpg`
    shipView.appendChild(shipImage)
}

shipLoop(starships);