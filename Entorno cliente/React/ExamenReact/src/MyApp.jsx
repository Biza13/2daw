import { BrowserRouter, Route, Routes } from "react-router";
import Principal from "./Paginas/Principal";
import LoginPage from "./Paginas/LoginPage";
import Detalle from "./Componentes/Detalle";
import Carrito from "./Componentes/Carrito";

export default function MyApp() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage></LoginPage>}></Route>
                <Route path='/Principal' element={<Principal></Principal>}></Route>
                <Route path='/detalle/:id' element={<Detalle></Detalle>}></Route>
                <Route path='/carro' element={<Carrito></Carrito>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
