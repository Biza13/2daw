import { Route, Routes } from "react-router";
import Principal from "./Paginas/Principal";
import Formulario from "./componentes/Formulario";
import FormularioConLibreria from "./componentes/FormularioConLibreria";

export default function MyApp() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Principal />}></Route>
            <Route path="/formulario" element={<Formulario></Formulario>}></Route>
            <Route path="/formularioConLibreria" element={<FormularioConLibreria></FormularioConLibreria>}></Route>
        </Routes>
    </>
  )
}
