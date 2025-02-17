import { Link } from "react-router";

export default function Navegacion (){
    return(
        <nav>
            <Link to="/" className="mx-3">Home</Link>
            <Link to="/Ofertas" className="mx-3">Ofertas</Link>
            <Link to="/carrito" className="mx-3">Carrito</Link>
        </nav>
    )
}