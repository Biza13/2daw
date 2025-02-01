import { Link } from "react-router";

export default function CardProducto ({ obj }){

    return (
        <div>
            <img src={obj.image} alt="imgProducto" />
            <p>{obj.title}</p>
            <p>{obj.description}</p>
            <Link to={'/detalle/' + obj.id}>
                <button>Detalles</button>
            </Link>
        </div>
    )
}