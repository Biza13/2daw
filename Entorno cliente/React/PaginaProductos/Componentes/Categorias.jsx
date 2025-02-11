import { useNavigate } from "react-router"
import styles from "../Paginas/Principal.module.css"

export default function Categorias() {
    const navigate = useNavigate();
  return (
    <>
        <ul className={styles.lista}>
            <li className="mx-3">
                <button onClick={()=>navigate("/")}>Todo</button>
            </li>
            <li className="mx-3">
                <button onClick={()=>navigate("?categoria=men's clothing")}>Hombre</button>
            </li>
            <li className="mx-3">
                <button onClick={()=>navigate("?categoria=women's clothing")}>Mujer</button>
            </li>
            <li className="mx-3">
                <button onClick={()=>navigate("?categoria=jewelery")}>Joyas</button>
            </li>
            <li className="mx-3">
                <button onClick={()=>navigate("?categoria=electronics")}>Electronica</button>
            </li>
        </ul>
    </>
  )
}
