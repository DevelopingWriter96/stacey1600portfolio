import { films } from './data/films.js';

let force = "May the force be with you";

let moviewrapper = document.querySelector('#moviewrapper')

console.log(force);

function movieLoop (){
    for (let i = 0; i < films.length; i++) {
        console.log(`${films[i].episode_id}`)

        const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1).toString())

        let myMovieTitle = document.createElement("h2");
        myMovieTitle.textContent = foundFilm[i].title;

        let mySpanTag1 = document.createElement("span");
        mySpanTag1.appendChild(myMovieTitle);

        document.querySelector("#moviewrapper").appendChild(mySpanTag1);
    }    
}

function getLastNumber(url){
    let end = url.lastIndexOf('/')
    let filmNum = end - 1
    console.log(filmNum)
}

movieLoop();