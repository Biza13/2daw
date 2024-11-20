/**
 * Funcion que le introduces dos parametros que seran milisegundos y te dice los segundos transcurridos entre esos dos tiempos
 * @param {number} mS1 
 * @param {number} mS2 
 * @returns number que seran los segundos
 */
function calcularSeg(mS1, mS2){
    let seg = Math.round((mS2 - mS1) / 1000);
    return seg;
}

/**
 * Funcion a la que le introduces como parametro un objeto Date y te devuelve los años en que tu cumplealos ha caido en domingo
 * @param {object} fecha date
 */
function cumplEnDomingo(fecha){
    let añoNac = fecha.getFullYear();
    let añoAct = new Date().getFullYear();
    for(let i = añoNac; i<=añoAct; i++){
        fecha.setFullYear(i);
        if (fecha.getDay() == 0){
            console.log(fecha.getFullYear());
        }
    }
}

/**
 * Funcion que dados la base y el exponente te devuelve la potencia
 * @param {number} base 
 * @param {number} exponente 
 * @returns number la potencia
 */
function potencia(base, exponente){
    return Math.pow(base, exponente);
}

/**
 * Funcion que introducido un numero te devuelve la raiz cuadrada
 * @param {number} num 
 * @returns number que es la raiz cuadrada
 */
function raiz(num){
    return Math. sqrt(num);
}

/**
 * Funcion que introducido un numero decimal te devuelve el redondeo arriba y abajo
 * @param {number} flot 
 * @returns string con redondeos 
 */
function redondeo(flot){
    let alto = Math.ceil(flot);
    let bajo = Math.floor(flot);
    return "El redondeo a la alta de " + flot + " es " + alto + "<br> Y el redondeo a la baja es " + bajo;
}

/**
 * Funcion que introducidos un numero te da el seno y el coseno y con eso calcula la tangente
 * @param {number} angulo 
 * @returns string con seno coseno y tangente
 */
function trigonometria(angulo){
    let seno = Math.sin(angulo);
    let coseno = Math.cos(angulo);
    let tan = seno / coseno;
    return "El seno de " + angulo + " es " + seno + "<br>" + "El coseno es " + coseno + "<br> y la tangente es " + tan;
}

function sonVocales(cadena){
    let cadenaMinuscula = cadena.toLowerCase();
    let cont = 0;
    for(let i = 0; i<=cadenaMinuscula.length; i++){
        if ("aeiou".includes(cadenaMinuscula[i])) {
            cont++;
        }
    }
    return cont
}

function cadaVocal(cadena){
    let a=0, e=0, i=0, o=0, u=0;
    let cadenaMinuscula = cadena.toLowerCase();
    for(let i = 0; i<=cadenaMinuscula.length; i++){
        if ("aeiou".includes(cadenaMinuscula[i])) {
            switch (cadenaMinuscula[i]){
                case "a":
                    a++;
                break;
                case "e":
                    e++;
                break;
                case "i":
                    i++;
                break;
                case "o":
                    o++;
                break;
                case "u":
                    u++;
                break;
            }
        }
    }
    return "a: " + a + "<br>e: " + e + "<br>i: " + i + "<br>o: " + o + "<br>u: " + u;
}

function cadenaAlreves(cadena){
    let cadenaAlreves = "";
    let letra;
    for(let i = cadena.length-1; i>=0; i--){
        letra = cadena[i];
        cadenaAlreves += letra;
    }
    return cadenaAlreves
}