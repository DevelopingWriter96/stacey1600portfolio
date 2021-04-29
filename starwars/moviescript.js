import { films } from './data/films.js';

let force = "May the force be with you";

let movieList = document.querySelector('#moviewrapper')

console.log(force);

function movieLoop (){
    for (let i = 0; i < films.length; i++) {
        console.log(`${films[i].episode_id}`)
        const foundMovie = films.find(film => getLastNumber(film.url) === (i + 1).toString())    
        let movieItem = document.createElement('li')
        movieItem.textContent = foundMovie.title
        movieList.appendChild(movieItem)
    }
}

function getLastNumber(url){
    let end = url.lastIndexOf('/')
    return url.charAt(end - 1)
}

movieLoop();