/*Seleccionamos el elemento grande que es la caja contenedora de las imagenes
y esta variable la usaremos para moverla sobre el eje x query selector en este caso 
solo seleccionamos un elemento*/
const grande = document.querySelector(".grande");
/*Seleccionamos todas las clase punto que son cada uno de los li para iterar sobre ellos
digamos que los convierte en un array el query selectos es el selector, en este cas
los seleccionamos todos*/
const punto = document.querySelectorAll(".punto");

/*For each a cada punto. cadaPunto van a ser cada uno de los puntos sobre los que vamos a iterar(como en un array)
i es el indice*/
punto.forEach((cadaPunto, i)=>{
    punto[i].addEventListener("click",()=>{
        let posicion = i;
        /*esta operacion es para mover las imagenes, como tenemos 4 100% del contenedor lo dividimos entre 4 y nos da 25% para cada imagen
        como queremos que se mueva a la izquierda del eje x aplicaremos el -25*/
        let operacion = posicion * -25;

        //aqui le cambiamos el estilo en el css a la caja grande y le decimos que en la propiedad transform cambie el porcentaje
        //hay que usar las back tics para poder poner variables dentro de las comillas
        grande.style.transform = `translateX(${operacion}%)`;

        /*Foreach para que al hhacer click en cada punto se ponga el active y
        Basicamente si el elemento en la posicion i esta activo lo quita*/
        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove("activo");
       })

       //esta parte final activa el punto en la posicion clicada
       punto[i].classList.add("activo");
    })
})

