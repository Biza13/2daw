/**
 * Funcion que devuelve el numero mas alto de un array
 * @param {number} arr
 * @returns {number} el numero mas alto de el array
 */
function maximo(arr) {
  let maximo;
  let numAnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > numAnt) {
      maximo = arr[i];
    }
    i++;
    numAnt = arr[i - 1];
    i--;
  }
  return maximo;
}

/**
 * The function "lanzamiento" generates a random number between 1 and 6.
 * @returns The function `lanzamiento()` returns a random number between 1 and 6 (inclusive)
 * representing the result of a dice roll.
 */
function lanzamiento() {
  let num = Math.floor(Math.random() *6) + 1;
  return num;
}

/**
 * The function simulates rolling a fair six-sided die 6000 times and counts the occurrences of each
 * number rolled.
 * @returns The function `simulacion()` is returning a string that displays the frequency of each
 * number (1 to 6) that was randomly generated in a simulation of rolling a fair six-sided die 6000
 * times. The string includes the counts of each number in the format "han salido {count} {number}s."
 */
function simulacion() {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  for (let i = 0; i < 6000; i++) {
    let num = Math.floor(Math.random() * 6) + 1;
    switch (num) {
      case 1:
        num1++;
        break;
      case 2:
        num2++;
        break;
      case 3:
        num3++;
        break;
      case 4:
        num4++;
        break;
      case 5:
        num5++;
        break;
      case 6:
        num6++;
        break;
    }
  }
  return "han salido " + num1 + " unos. <br>"+ "han salido " + num2 + " dos. <br>" + "han salido " + num3 + " treses. <br>" + 
   "han salido " + num4 + " cuatros. <br>" + "han salido " + num5 + " cincos. <br>" + "han salido " + num6 + " seises. <br>"
}

/**
 * Función para calcular el vulomen de una esfera dado su radio
 * @param {number} radio el radio de la esfera
 * @returns el volumen de la esfera
 */
function volumenEsfera (radio){
  let vol = (4/3) * Math.PI * Math.pow(radio, 3);
  return vol.toFixed(2);
}

/**
 *Calcula el area de un circulo dado su radio
 * @param {number} radio radio de la circunferencia
 * @returns el area del curculo
 */
function areaCirculo (radio){
  let area = Math.PI * Math.pow(radio, 2);
  return area.toFixed(2);
}

/**
 * Función para calcular la potencia de un numero base dado su exponente
 * @param {number} base numero base
 * @param {number} exp numero que sera el exponente
 * @returns devuelve la potendia de los numeros dados
 */
function potRec(base, exp) {
  // Eso es para que pase de llamarse a si misma, es decir cuando el exp llegue a 0 se parara de llamar
  if (exp === 0) {
      return 1;
  }
  // se seguira llamando hasta que exp sea 0 y despues empezara de abajo arriba a multiplicar
  else {
      return base * potRec(base, exp - 1);
  }
}

/**
 * Funcion recursiva para calcular en número factorial
 * @param {number} num número del que se quiere saber el factorial
 * @returns el factorial del número introducido
 */
function factorial(num){
  if (num === 0){
    return 1;
  }else{
    return num * factorial(num -1);
  }
}
 /**
  * funcion que crea una tabla con los factoriales de los números del 1 al 10
  * usando la funcion factorial(num)
  */
function tablaFactorial() {
  let fac;
  //vamos a cambiar el document.write() por el innerHTML para que no de problemas
  //creando una string a la que en cada posicion añadiremos lo deseado, como en el document.write
  //y al final lo introduciremos en un contenedor con el id especificado
  let tablaHTML = `<table> <caption>Tabla factoriales del 1 al 10</caption>`;
  tablaHTML += "<tr><th>Número</th> <th>Factorial</th></tr>";

  for (let i = 1; i <= 10; i++) {
    fac = factorial(i);
    tablaHTML += `<tr><td>Factorial de ${i}</td> <td>${fac}</td></tr>`;
  }

  tablaHTML += "</table>";
  
  // Inserta la tabla en el contenedor
  document.getElementById('tabla').innerHTML = tablaHTML;
}