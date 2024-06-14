import peliculas from './peliculas.js'

const accion = document.getElementById('genero-28');
const thiller = document.getElementById('genero-53');
const aventura = document.getElementById('genero-12');

function crearElemento (pelicula){
    const div = document.createElement('div')
    const elementImg = document.createElement('img')
    elementImg.src = 'https://image.tmdb.org/t/p/w500' + pelicula.poster_path
    elementImg.alt = pelicula.title
    const elementText = document.createElement('p')
    elementText.textContent = pelicula.title
    div.appendChild(elementImg)
    div.appendChild(elementText)
    return div
}

peliculas.forEach(objeto => {
    
    if(objeto.genre_ids.includes(28)){
        const pelicula = crearElemento(objeto)
        accion.appendChild(pelicula)
    } if(objeto.genre_ids.includes(53)){
        const pelicula = crearElemento(objeto)
        thiller.appendChild(pelicula)
    } if(objeto.genre_ids.includes(12)){
        const pelicula = crearElemento(objeto)
        aventura.appendChild(pelicula)
    }
}
)



