/**
 * funcion para abrir una ventana emergente en la posicion y el tamaño deseado
 * @param {string} titulo
 */
function abrirVentana(titulo) {
  //coge el amcho total de la pantalla
  let anchoTotal = window.screen.width;
  //el ancho que queremos de la ventana emergente
  let anchoVentana = 500;
  //como queremos que se ponga a la izquierda al total de la pantalla le quitamos el width de la pantalla emergente para que el lateral izquierdo de la pantalla emergente se quede donde queremos
  let posicionIzq = anchoTotal - anchoVentana;
  //para poner variables dentro de comillas, estas han de ser las backtics
  ventana = window.open("", "miVentana", `width=${anchoVentana},height=400, top=0, left=${posicionIzq}`);
  //esto espara escribir en la ventana emergente, a la variable ventana creada arriba le pongo con el document write el titulo que se introduce por parametro
  ventana.document.write(titulo);
}

/**
 * funcion para cerrar la ventana emergente
 */
function cerrarVentana() {
  ventana.close();
}

/**
 * Funcion para abrir una ventana emergente con un boton para cerrarse a si misma
 */
function abrirVentana2() {
  //coge el amcho total de la pantalla
  let anchoTotal = window.screen.width;
  //el ancho que queremos de la ventana emergente
  let anchoVentana = 500;
  //como queremos que se ponga a la izquierda al total de la pantalla le quitamos el width de la pantalla emergente para que el lateral izquierdo de la pantalla emergente se quede donde queremos
  let posicionIzq = anchoTotal - anchoVentana;
  //para poner variables dentro de comillas, estas han de ser las backtics
  ventana = window.open("", "miVentana", `width=${anchoVentana},height=400, top=0, left=${posicionIzq}`);
  //esto espara escribir en la ventana emergente, a la variable ventana creada que es basicamente lenguaje html5
  //en el onclick le pongo directamente que cierre la ventana.
  ventana.document.write(
    `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ejercicio 2</title>
    </head>
    <body>
        <script>
        </script>
        <button onclick='window.close()'>Cerrar</button>
    </body>
    </html>`
  );
}

/**
 * Funcion para abrir varias ventanas emergentes (5) en este caso que te redireccionen a la pagina de google
 * y que en cada ventana aparezca el titulo de ventana1 , 2, 3... y con un boton pare cerrarse a si misma en cada ventana
 */
function abrirVentana3() {
    //inicializar una variable para las posiciones de las ventanas
    let posicionIzq = 0;
  for (let i = 0; i < 5; i++) {
    //let anchoTotal = window.screen.width;
    let anchoVentana = 350;
    let altoVentana = 350;
    //le doy a la separacion el ancho le la ventana mas un pequeño margen
    let separacion = 360;
    //para poner variables dentro de comillas, estas han de ser las backtics
    ventana = window.open("https://www.google.es", `miVentana${i}`, `width=${anchoVentana}, height=${altoVentana}, top=0 left=${posicionIzq}`);
    //la primera ventana saldra a la izquierda del todo y las demas se iran separando 360 pixeles cada una de la siguiente
    posicionIzq += separacion;
    ventana.document.write(
      `<!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ejercicio 2</title>
      </head>
      <body>
          <p>
            ventana ${i+1}
          </p>
          <button onclick='window.close()'>Cerrar</button>
      </body>
      </html>`
    );
    }
}

function abrirVentana4(texto) {
  let tex = texto;
  //coge el amcho total de la pantalla
  let anchoTotal = window.screen.width;
  //el ancho que queremos de la ventana emergente
  let anchoVentana = 500;
  //como queremos que se ponga a la izquierda al total de la pantalla le quitamos el width de la pantalla emergente para que el lateral izquierdo de la pantalla emergente se quede donde queremos
  let posicionIzq = anchoTotal - anchoVentana;
  //para poner variables dentro de comillas, estas han de ser las backtics
  ventana = window.open("", "miVentana", `width=${anchoVentana},height=400, top=0, left=${posicionIzq}`);
  //esto espara escribir en la ventana emergente, a la variable ventana creada que es basicamente lenguaje html5
  //en el onclick le pongo directamente que cierre la ventana.
  ventana.document.write(
    `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ejercicio 2</title>
    </head>
    <body>
       <p id="parrafo">${tex}</p> 
        <script>
        </script>
        <button onclick='window.close()'>Cerrar</button>
    </body>
    </html>`
  );
}
