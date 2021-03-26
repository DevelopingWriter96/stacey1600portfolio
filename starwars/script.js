import { films } from './data/films.js';
import { starships } from './data/starships.js'



let force = "May the force be with you";

console.log(films);

console.log(starships);

console.log(force);

function movieLoop (){
    for (let i = 0; i <= films.length; i++) {
        let myMovieTitle = document.createElement("h2");
        myMovieTitle.textContent = films[i].title;

        let mySpanTag1 = document.createElement("span");
        mySpanTag1.appendChild(myMovieTitle);

        document.querySelector("#moviewrapper").appendChild(mySpanTag1);
    }
}

function shipLoop() {
    for (let j = 0; j <= starships.length; j++) {
        let myShipTitle = document.createElement("h2");
        myShipTitle.textContent = starships[j].model;

        let mySpanTag2 = document.createElement("span");
        mySpanTag2.appendChild(myShipTitle);

        document.querySelector("#starship").appendChild(mySpanTag2);
    }
}

movieLoop();

shipLoop();