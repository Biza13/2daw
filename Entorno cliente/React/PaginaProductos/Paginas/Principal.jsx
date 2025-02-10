import Navegacion from './Navegacion.jsx'
import Buscador from '../Componentes/Buscador.jsx'
import GridProductos from '../Componentes/GridProductos.jsx'
import Categorias from '../Componentes/Categorias.jsx'

export default function Principal (){
    return (
        <>
            <Navegacion></Navegacion>
            <Categorias></Categorias>
            <Buscador></Buscador>
            <GridProductos></GridProductos>
        </>
    )
}