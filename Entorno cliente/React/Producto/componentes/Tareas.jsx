import { useState } from "react";

export default function Tareas (){

    const arrTareas = ["Tarea 1", "Tarea 2"];

    const [tareas, setTarea] = useState(arrTareas);
    const [tareaAAnadir, setTareaAAnadir] = useState("");

    function anadirTarea(nuevaTarea){

        console.log(nuevaTarea);
        setTarea([...tareas, nuevaTarea]);
        setTareaAAnadir("");

    }

    const tareasRender = tareas.map((tarea,idx) => {
        return<li key={idx}>{tarea}</li>
    });

    return (
        <>
            <form>
                <input type="text" name="tarea" id="tarea" placeholder="Introduzca una tarea" onChange={(e) => setTareaAAnadir(e.target.value)}/>
                <button onClick={() => anadirTarea(tareaAAnadir)}>Añadir tarea</button>
            </form>
            <ul>
                {tareasRender}
            </ul>
        </>
    )
}