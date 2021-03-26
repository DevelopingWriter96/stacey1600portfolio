import { films } from './data/films.js';
import { starships } from './data/starships.js'



let force = "May the force be with you";

console.log(films);

console.log(starships);

console.log(force);

document

function filmLoop (arr, att){
    for (let i = 0; i < arr.length; i++) {
        let myMovieTitle = document.createElement("h2");
        myMovieTitle.textContent = arr[i].att;

        let mySpanTag1 = document.createElement("span");
        mySpanTag1.appendChild(myMovieTitle);

        document.querySelector(".contentwrapper").appendChild(mySpanTag1);
    }
}

function runLoop(){
if (document.querySelector("#movie")) {
    filmLoop(films, title);
} else if (document.querySelector("#starship")){
    filmLoop(starships, shipname);
} else{
    console.log("Critical Error!");
}

}

runLoop();