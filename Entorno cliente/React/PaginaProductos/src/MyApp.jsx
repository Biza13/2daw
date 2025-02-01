import { Route, Routes } from 'react-router'
import Detalle from '../Paginas/Detalle.jsx'
import Principal from '../Paginas/Principal.jsx'
import Ofertas from '../Paginas/Ofertas.jsx'

export default function MyApp (){
    
    return (
        <>
            {/* Las rutas han de estar establecidas aqui y ya despues los links puedes ponerlos donde quieras */}
            <Routes>
                <Route path="/" element={<Principal />} />
                {/* Aqui le paso a esta ruta el id del producto */}
                <Route path="/Detalle/:idProducto" element={<Detalle />} />
                <Route path="/Ofertas" element={<Ofertas />} />
            </Routes>
        </>
    )
}