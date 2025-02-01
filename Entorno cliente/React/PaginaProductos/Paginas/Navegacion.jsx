import { Link } from "react-router";

export default function Navegacion (){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Ofertas">Ofertas</Link>
        </nav>
    )
}