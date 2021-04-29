import { films } from './data/films.js';

let force = "May the force be with you";

let movieWrapper = document.querySelector('#moviewrapper')

console.log(force);

function movieLoop (){
    for (let i = 0; i < films.length; i++) {
        console.log(`${films[i].episode_id}`)
        const foundMovie = films.find(film => getLastNumber(film.url) === (i + 1).toString())    
        let movieItem = document.createElement('h2')
        movieItem.textContent = foundMovie.title
        movieList.appendChild(movieItem)
    }
}

function getLastNumber(url){
    let end = url.lastIndexOf('/')
    let movieNum = end - 1
    //console.log(movieNum)
}

movieLoop();