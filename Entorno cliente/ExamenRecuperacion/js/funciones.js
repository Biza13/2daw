/**
 * Funcion que hace la llamada a una api
 * @returns {Promise} devuelve una promesa
 */
export function getFetch(){
    return fetch("http://localhost:3000/results")
    .then((resultado) => resultado.json())
    .catch((error) => {
        console.log("Error: " + error);
    });
}

/* export function devuelveMovies (){
    
    getFetch()
    .then((movies) => {
        let arrMod = [];
        let obj = {};

        movies.forEach(element => {
            obj = {
                id: element.id,
                titulo: element.original_title,
                popularidad: element.popularity,
                descripcion: element.overview,
                yearestreno: element.release_date,
                urlimage: "https://image.tmdb.org/t/p/w500" + element.poster_path,
                puntuacion: element.vote_average
            };
            arrMod.push(obj);
        });
        console.log(arrMod);
        return arrMod;
    })
} */

    let fragmento = document.createDocumentFragment();
    let sectionMovies = document.querySelector(".movies");
    let almacenamiento = [];

    /**
     * Función que dado un array, devuelve un array modificado
     * @param {Array} arrMovies recibe un array
     * @returns 
     */
export function devuelveMovies (arrMovies){
    
    let arrMod = [];
    let obj = {};

    arrMovies.forEach(element => {
        obj = {
            id: element.id,
            titulo: element.original_title,
            popularidad: element.popularity,
            descripcion: element.overview,
            yearestreno: element.release_date,
            urlimage: "https://image.tmdb.org/t/p/w500" + element.poster_path,
            puntuacion: element.vote_average
        };
        arrMod.push(obj);
    });

    return arrMod;
}

/**
 * Función que se encargará de crear utilizando DOM todos los elementos necesarios para mostrar la información de todas las Movie, en el que se presentará para cada película: imagen, nombre y puntuación
 * @param {array} array Array
 */
export function show(array){

    //let almacenamiento = [];

    array.forEach(element => {
        let div = document.createElement("div");
        div.className = "pelicula";
        let pNom = document.createElement("p");
        pNom.className = "titulo";
        let pPunt = document.createElement("p");
        pPunt.className = "puntuacion";
        let img = document.createElement("img");
        img.className = "url";

        img.src = element.urlimage;
        div.appendChild(img);

        pNom.textContent = element.titulo;
        div.appendChild(pNom);

        pPunt.textContent = element.puntuacion;
        div.appendChild(pPunt);

        fragmento.appendChild(div);

        div.addEventListener( "click", () =>  {

            almacenamiento.push(element)
            //localStorage;
            console.log(almacenamiento);
        
        })

    });

    sectionMovies.appendChild(fragmento);

}

export function filtrarMovies (arrayMovie, anyo){
    let arrMod = arrayMovie.filter((element) => element.release_date >= anyo)
    return arrMod;
}

console.log("almacenamiento " + almacenamiento);