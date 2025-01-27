import * as funciones from "./funciones.js";
import {objBDH, urlPeliculas} from "./BDMovieH.js"

//console.log(funciones.devuelveMovies(objBDH))

let arrMovies = funciones.devuelveMovies(objBDH)

funciones.show(arrMovies);

let filtrarBtn = document.querySelector(".filtrarBtn");

let anyo = document.forms.filtro.filtrar.value;
console.log(anyo);

filtrarBtn.addEventListener("click", () =>{
    console.log(anyo);
    let arrMod = funciones.filtrarMovies(objBDH, anyo);

    funciones.show(arrMod);
})