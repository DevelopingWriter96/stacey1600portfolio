import { films } from './data/films.js';
import { starships } from './data/starships.js'



let force = "May the force be with you";

console.log(films);

console.log(starships);

console.log(force);

function movieLoop (arr){
    for (let i = 0; i < arr.length; i++) {
        let myMovieTitle = document.createElement("h2");
        myMovieTitle.textContent = arr.title;

        let mySpanTag1 = document.createElement("span");
        mySpanTag1.appendChild(myMovieTitle);

        document.querySelector("#moviewrapper").appendChild(mySpanTag1);
    }
}

function runLoop (){
if (document.query(".movie")) {
    movieLoop(films, title);
} else if (document.query(".ships")){
    movieLoop(starships, model);
} else {
    console.log("Critical Error!");
}
}

runLoop();

