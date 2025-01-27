import Parrafo from "../componentes/Parrafo";
import Cabecera from "../componentes/Cabecera";
import Carrusel from "../componentes/carrusel";

export default function MyApp(){


    return(
        <>
            <Carrusel></Carrusel>
            <Cabecera>Ejemplos React</Cabecera>
            <Parrafo codigo="1" >Articulo</Parrafo> 
            <Parrafo codigo="2" >Articulo</Parrafo> 
        </>
    )
}