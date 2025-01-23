import Boton from './Boton'
import jsonData from '../json/productos.json';
import styles from './Producto.module.css';

export default function Filtro (){

    let precioInput = "";

    function HandleClick (importe){

        jsonData.filter(element => {
            if (element.price > importe){
                console.log(element)
            }
        });

    }

    return(
        <>
            <form>
                {/* Con el onChange cogemos el value del input y se lo asocioamos a la variable arriba definida */}
                <input type="text" name='importe' id="importe" onChange={(e) => precioInput = e.target.value}></input>
            </form>

            {/* Dos formas de hacerlo, una creando un button y la otra llamando a el subcomoponente de Boton al cual le paso la funcion como parametro*/}
            {/* si la funcion tiene para metros, para llamarla has de hacerlo como funcion anonima arrow function */}
            <button onClick={() => HandleClick(precioInput)}>Filtrar 1</button>
            <Boton onClick={() => HandleClick(precioInput)} className={styles.boton}></Boton>
        </>
    )
}