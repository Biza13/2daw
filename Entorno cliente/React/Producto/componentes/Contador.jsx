import { useState } from "react"

export default function Contador (){

    const [contador, setCount] = useState(0);

    function handleContador (){
        //si lo haces asi, no va a sumar de 3 en 3
        /* setCount(contador+1);
        setCount(contador+1);
        setCount(contador+1); */

        //asi SI que sumara de 3 en 3. Necesitas llamar a una funcion para que modifique esl estado
        setCount((contador) => contador+1);
        setCount((contador) => contador+1);
        setCount((contador) => contador+1);
    }

    return (
        <button onClick={handleContador}>Contador {contador} </button>
    )
}