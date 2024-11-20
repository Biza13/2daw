/**
 * Funcion que dados los parametros nos dira la nota de un trimestre especifico de un alumno
 * @param {any} arrObjeto array de objetos
 * @param {number} numero  numero de id del estudiante
 * @param {string} trimestre trimestre del cual se quiere sacar la nota
 * @returns {number} la nota del trimestre deseado
 */
function nota(arrObjeto, numero, trimestre) {
  let alumno = arrObjeto.find((alumno) => alumno.numeroEstudiante == numero);

  //si alumno existe devolvera la nota
  if (alumno) {
    //corchetes para acceder a un campo del objeto
    return alumno[trimestre];
  } else {
    //si no existe...
    return "Alumno no encontrado";
  }
}

/**
 * Funcion que dado un objeto como parametro coge un campo en especifico y hace la media de este
 * @param {any} objeto array de objetos
 * @returns {number} edad media de todos los alumnos
 */
function mediaEdad(arrObjeto) {
  let media = 0;
  let cont = 0;
  let alumno = {};
  for (alumno of arrObjeto) {
    media += alumno.edad;

    //creo una variable contador para saber cuantos alumnos tengo en la clase para hacer la media
    cont++;
  }
  return media / cont;
}

/**
 * Funcion que dado un array de objetos como parametro te devuelve un campo de un objeto random
 * @param {any} arrObj Array de objetos
 * @returns {string} un campo de un objeto al azar
 */
function alumnoAzar(arrObj) {
  //redondear arriba para que no nos coja el -1
  let aleatorio = Math.ceil(Math.random() * arrObj.length - 1);
  //coger el nombre del objeto del random
  let alumno = arrObj[aleatorio].nombre;
  return alumno;
}

/**
 * Funcion que crea numero pares en tre 0 y 1000 y coge 100 numeros qu elos mete en un array
 * Separacion de estos numeros en pares e impares y introducirlos como objetos
 * en un array
 * @returns {any} array de objetos pares e impares
 */
function paresImpares() {
  let arrNum = [{ pares: [] }, { impares: [] }];
  let arrP = [];
  let arrI = [];
  for (let i = 0; i < 100; i++) {
    let num = Math.round(Math.random() * 1000);
    if (num % 2 == 0) {
      arrP.push(num);
    } else {
      arrI.push(num);
    }
  }
  arrNum[0].pares = arrP;
  arrNum[1].impares = arrI;
  return arrNum;
}

/**
 * funcion para dar de alta un vendedor en un array de objetos (vendedores)
 * @param {any} arrObj array de objetos
 * @param {string} nom nombre del vendedor
 * @param {number} ven dinero obtenido en ventas
 * @param {number} sBase sueldo base semanal (200Euros)
 */
function altaVendedor(arrObj, nom, ven, sBase = 200) {
  //sumarle al sueldo base el 9 porciento de las ventas
  let tot = sBase + (ven * 9) / 100;
  let obj = { nombre: nom, sueldoBase: sBase, ventas: ven, total: tot };
  arrObj.push(obj);
  //sin treturn porque no nos devuelve nada, simplemente añade a un array de objetos un objeto
}

/**
 * Funcion que cambia los valores de un array a 0
 * @param {any} arr array
 * @returns {any} nuevo array con los valores a 0
 */
function establecerValoresACero(arr) {
  //hacer una copia del array para que no me modifique el array original
  //hacemos uso del split para separar por numeros el array y volverlos a juntar
  let nuevaArr = [...arr];
  for (let i = 0; i < nuevaArr.length; i++) {
    nuevaArr[i] = 0;
  }
  return nuevaArr;
}

/**
 * Funcion qu eañade uno a los valores del array introducido
 * @param {any} arr
 * @returns {any} devuelve un array nuevo con los valores del array original incrementados en uno
 */
function añadirUno(arr) {
  let nuevaArr = [...arr];
  for (let i = 0; i < nuevaArr.length; i++) {
    nuevaArr[i] = nuevaArr[i] + 1;
  }
  return nuevaArr;
}

function arraySeparadaPorEspacios(arr) {
  let nuevaArr = [...arr];
  //con el join lo que hace es que convierte el array en una cadena de texto y separa lada uno de los valores por lo que le digas
  //en este caso espacios
  let arrConEspacios = nuevaArr.join(" ");
  return arrConEspacios;
}

function dados() {
  /*declaramos un array con 13 slots y con el .fil(0) lo que hacemos es que
  le damos a cada uno de los 13 slots el valor de 0. Lo declaramos de 13 slots,porque la suma
  de los números puede ser de hasta 12. Como vamos a ignorar los dos primeros (el 0 y el 1) y del 2 al 12 van 11
   que mas los dos que ignoraremos seran los 13*/
  let cantSumas = new Array(13).fill(0);
  //bucle para simular los 36.000 lanzamientos
  for (let i = 0; i < 36000; i++) {
    //guardamos cada lanzamiento de cada dado con un random del 1 al 6
    let lanzamiento1 = Math.ceil(Math.random() * 6);
    let lanzamiento2 = Math.ceil(Math.random() * 6);

    //hacemos la suma de los dos lanzamientos
    let sumaPosicion = lanzamiento1 + lanzamiento2;

    /*con esto le estoy diciendo que en el array cantSumas a la posicion sumaPosicion
     que sera cada una de las sumas del dado (un numero entre el 2 y el 12)
     pues en esa posicion del array le sumaremos uno
     Es decir imaginate que salen un 2 y un 3, sumaPosicion seria 5.
     En el array en la posicion 5 que antes tenia el valor de 0, ahora tiene uno.
     Es decir el numero 5 ha salido una vez*/
    cantSumas[sumaPosicion]++;
  }
  return cantSumas;
}

function dadosBidimensionales() {
  let bidim = [];
  let combinaciones = [];
  /*declaramos un array con 13 slots y con el .fil(0) lo que hacemos es que
  le damos a cada uno de los 13 slots el valor de 0. Lo declaramos de 13 slots,porque la suma
  de los números puede ser de hasta 12. Como vamos a ignorar los dos primeros (el 0 y el 1) y del 2 al 12 van 11
   que mas los dos que ignoraremos seran los 13*/
  let cantSumas = new Array(13).fill(0);
  //bucle para simular los 36.000 lanzamientos
  for (let i = 0; i < 36000; i++) {
    //guardamos cada lanzamiento de cada dado con un random del 1 al 6
    let lanzamiento1 = Math.ceil(Math.random() * 6);
    let lanzamiento2 = Math.ceil(Math.random() * 6);

    combinaciones.push([lanzamiento1, lanzamiento2])

    //hacemos la suma de los dos lanzamientos
    let sumaPosicion = lanzamiento1 + lanzamiento2;

    /*con esto le estoy diciendo que en el array cantSumas a la posicion sumaPosicion
     que sera cada una de las sumas del dado (un numero entre el 2 y el 12)
     pues en esa posicion del array le sumaremos uno
     Es decir imaginate que salen un 2 y un 3, sumaPosicion seria 5.
     En el array en la posicion 5 que antes tenia el valor de 0, ahora tiene uno.
     Es decir el numero 5 ha salido una vez*/
    cantSumas[sumaPosicion]++;
  }
  bidim.push([combinaciones]);
  bidim.push([cantSumas]);
  return bidim;
}