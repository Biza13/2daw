import Navegacion from './Navegacion.jsx'
import Buscador from '../Componentes/Buscador.jsx'
import GridProductos from '../Componentes/GridProductos.jsx'

export default function Principal (){
    return (
        <>
            <Navegacion></Navegacion>
            <Buscador></Buscador>
            <GridProductos></GridProductos>
        </>
    )
}