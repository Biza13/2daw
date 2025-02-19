import { Route, Routes } from 'react-router'
import Detalle from '../Paginas/Detalle.jsx'
import Principal from '../Paginas/Principal.jsx'
import Ofertas from '../Paginas/Ofertas.jsx'
import CarritoPagina from '../Paginas/CarritoPagina.jsx'
import Login from '../Paginas/Login.jsx'

export default function MyApp (){
    
    return (
        <>
            {/* Las rutas han de estar establecidas aqui y ya despues los links puedes ponerlos donde quieras */}
            <Routes>
                {/* Aqui le paso a esta ruta el id del producto */}
                <Route path="/Detalle/:idProducto" element={<Detalle />} />
                <Route path="/" element={<Principal />} />
                <Route path="/Ofertas" element={<Ofertas />} />
                <Route path='/carrito' element={<CarritoPagina />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </>
    )
}