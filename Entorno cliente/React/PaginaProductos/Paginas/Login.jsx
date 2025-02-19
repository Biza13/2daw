import { Route, Routes, useNavigate } from "react-router";
import Detalle from "./Detalle";
import Principal from "./Principal";
import Ofertas from "./Ofertas";
import CarritoPagina from './CarritoPagina'
import usuarios from '../json/usuarios.json'
import { useState } from "react";
import * as funciones from '../Utils/httpClient' 

export default function Login() {

    const navegar = useNavigate();
    const [usuario, setUsuario] = useState ({username: "", password:""})

    const handleChange = (event) => {
        //[event.target.name] aqui coge el name del input y le da el valor del value
        setUsuario({ ...usuario, [event.target.name]: event.target.value });
    };

  return (
    <>
        {/* <Routes>
            <Route path="/Detalle/:idProducto" element={<Detalle />} />
            <Route path="/Principal" element={<Principal />} />
            <Route path="/Ofertas" element={<Ofertas />} />
            <Route path='/carrito' element={<CarritoPagina />}></Route>
        </Routes> */}
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                //funciones.validar(usuarios, usuario) && navegar("/carrito")
                funciones.validar(usuarios, usuario) ? navegar("carrito"): alert("Usuario o contraseña erroneo")
            }}>
                <input 
                type="text" 
                name="username"
                autoComplete="false"
                value={usuario.username}
                onChange={handleChange}
                />

                <input 
                type="password" 
                name="password"
                autoComplete="false"
                value={usuario.password}
                onChange={handleChange}
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    </>
  )
}
