import { films } from './data/films.js';
import { starships } from './data/starships.js'



let force = "May the force be with you";

console.log(films);

console.log(starships);

console.log(force);

function filmLoop (){
    for (i = 0; i < films.length; i++) {
        let myMovieTitle = document.createElement("h2");
        myMovieTitle.textContent = myList[i].title;

        let mySpanTag1 = document.createElement("span");
        mySpanTag1.appendChild(myMovieTitle);

        document.getElementById('moviewrapper').appendChild(mySpanTag1);
    }
}

function shipLoop (){
    for (i = 0; i < films.length; i++) {
    }
}