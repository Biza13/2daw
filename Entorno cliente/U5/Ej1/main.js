let enlaces = document.getElementsByTagName("a");
console.log(enlaces);
console.log(enlaces.length);

let penultimo = enlaces[enlaces.length-2];
let atributo = penultimo.getAttribute("href");
console.log(atributo);

console.log(penultimo.href);

let cont = 0;
for(let i = 0; i<enlaces.length; i++){
    let a = enlaces[i];
    if (a.href.includes("www.google.com")){
        cont++;
    }
}

console.log("Enlaces con href a google " + cont)

let ps = document.getElementsByTagName("p");

let ultimoP = ps[ps.length-1];

let as = ultimoP.getElementsByTagName("a");

console.log("Cantidad de enlaces del ultimo p: " + as.length);