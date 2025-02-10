import { useNavigate } from "react-router"

export default function Categorias() {
    const navigate = useNavigate();
  return (
    <>
        <ul>
            <li>
                <button onClick={()=>navigate("/")}>Todo</button>
            </li>
            <li>
                <button onClick={()=>navigate("?categoria=men's clothing")}>Hombre</button>
            </li>
            <li>
                <button onClick={()=>navigate("?categoria=jewelery")}>Joyas</button>
            </li>
            <li>
                <button onClick={()=>navigate("?categoria=electronics")}>Electronica</button>
            </li>
        </ul>
    </>
  )
}
