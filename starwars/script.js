import { films } from './data/films.js';
import { starships } from './data/starships.js'



let force = "May the force be with you";

console.log(films);

console.log(starships);

console.log(force);

document

function filmLoop (){
    for (let i = 0; i < films.length; i++) {
        let myMovieTitle = document.createElement("h2");
        myMovieTitle.textContent = films[i].title;

        let mySpanTag1 = document.createElement("span");
        mySpanTag1.appendChild(myMovieTitle);

        document.querySelector('#moviewrapper').appendChild(mySpanTag1);
    }
}

function shipLoop (){
    for (let j = 0; i < starships.length; j++) {
        let myShipName = document.createElement("h2");
        myShipName.textContent = starships[j].title;

        let mySpanTag2 = document.createElement("span");
        mySpanTag1.appendChild(myShipName);

        document.querySelector('#starshipwrapper').appendChild(mySpanTag2);
    }
}

filmLoop();