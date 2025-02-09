import { Link } from "react-router";

export default function Navegacion() {
  return (
    <>
        <Link to="/">Principal</Link>
        <Link to="/formulario">Formulario</Link>
        <Link to="/formularioConLibreria">Formulario con libreria</Link>
    </>
  )
}
