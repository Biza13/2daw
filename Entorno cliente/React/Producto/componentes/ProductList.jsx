import jsonData from '../datos/productos.json';
import Producto from './Producto.jsx'


/*Hay que ponerle el key (Ha de ser único) cuando haces una iteracion de varios objetos para diferenciarlos, 
en este caso pongo el id de cada objeto porque es unico*/
export default function ProductList(){

    //si pones llaves {} has de poner el return, sino (como en el ejemplo de abajo) quitas el return y pones parentesis
    //y luego lo renderizas con {arrayProductos}
    const arrayProductos = jsonData.map((prod) => {
        return <Producto key={prod.id} obj={prod}></Producto>
    });

    return(
        <>
            {arrayProductos}

            {/* {jsonData.map((prod) => (
                <Producto key={prod.id} obj={prod}></Producto>
            ))} */}
        </>
    )
}