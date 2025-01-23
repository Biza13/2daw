import ProductList from '../componentes/ProductList.jsx'
import Producto from '../componentes/Producto.jsx'
import Filtro from '../componentes/Filtro.jsx'
import styles from './MyApp.module.css'
import Contador from '../componentes/Contador.jsx'
import Tareas from '../componentes/Tareas.jsx'

export default function MyApp(){

    const obj1 = {
        title: "Teclado",
        description: "Logitech 915",
        price:21
    }

    const obj2 = {
        title: "Mouse",
        description: "logitech 222",
        price: "33"
    }
    return(
        <>
            <Tareas></Tareas>
            <Filtro></Filtro>
            {/* <Producto obj={obj1}></Producto>
            <Producto obj={obj2}></Producto> */}
            <Contador></Contador>
            <section className={styles.contenedoraArticulos}>
                <ProductList></ProductList>
            </section>
        </>
    )
}