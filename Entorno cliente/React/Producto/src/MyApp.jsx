import ProductList from '../componentes/ProductList.jsx'
import Producto from '../componentes/Producto.jsx'

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
            {/* <Producto obj={obj1}></Producto>
            <Producto obj={obj2}></Producto> */}
            <ProductList></ProductList>
        </>
    )
}