import { films } from './data/films.js';

let force = "May the force be with you";

let movieList = document.querySelector('#moviewrapper')

console.log(force);

function movieLoop (){
    for (let i = 0; i < films.length; i++) {
        console.log(`${films[i].episode_id}`)
        const foundMovie = films.find(film => getLastNumber(film.url) === (i + 1).toString())    
        let posterFig = document.createElement('figure')
        let figImg = document.createElement('img')
        figImg.src = `https://starwars-visualguide.com/assets/img/films/7.jpg`
        let figCap = document.createElement('figcaption')
        figCap.textContent = foundMovie.title
        posterFig.appendChild(figImg)
        posterFig.appendChild(figCap)
        movieList.appendChild(posterFig)
    }
}

function getLastNumber(url){
    let end = url.lastIndexOf('/')
    return url.charAt(end - 1)
}

movieLoop();