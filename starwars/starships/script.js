import { starships } from '../data/starships.js'

let force = "May the force be with you";

console.log(starships);

console.log(force.length);

function shipLoop (){
    for (let j = 0; j < starships.length; j++) {
        let myShipTitle = document.createElement("h2");
        myShipTitle.textContent = starships[j].name;

        let mySpanTag2 = document.createElement("span");
        mySpanTag2.appendChild(myShipTitle);

        document.querySelector("#ships").appendChild(mySpanTag2);
    }    
}

shipLoop();