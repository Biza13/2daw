import { useState } from "react"
import { useNavigate } from "react-router";

/**Para hacerlo con objeto como esta ahora, para hacerlo por partes controlando cada input por separado hay que descomentar lo comentado
 * y comentar lo que se este usando para hacerlo como objeto
 */

export default function Formulario() {
    /* const [login, setLogin] = useState("");
    const [password, setPassword] = useState(""); */
    const [usuario, setUsuario] = useState({login: "", password: ""})

    const navigate = useNavigate();

    const handleChange = (event) => {
        setUsuario({ ...usuario, [event.target.name]: event.target.value });
    };

    //const errMsg = validaFormulario(login, password);
    const errMsg = validaFormulario(usuario);

  return (
    <>
        <form onSubmit={(e) => {
            e.preventDefault();
            //logueaUsuario(login, password) && navigate("/")
            logueaUsuario(usuario) && navigate("/")
        }}>
            <input type="text"
            name="login"
            autoComplete="false"
            //value={login}
            value={usuario.login}
            /* onChange={(ev) => {
                //setLogin(ev.target.value)
                setUsuario({...login=ev.target.value})
            }} */ 
            onChange={handleChange} />

            <input type="password"
            name="password"
            autoComplete="false"
            //value={password}
            value={usuario.password}
            /* onChange={(ev) => {
                //setPassword(ev.target.value)
                setUsuario({...password=ev.target.value})
            }} */ 
            onChange={handleChange} />

            <button type="submit">Enviar</button>
        </form>

        {<p color="red">{errMsg}</p>}
    </>
  )

}

//FUNCIONES

/* const validaFormulario = (login, password) => {
    if (login == password && login != "")
        return "El login no puede ser igual al password"
  }; */

  const validaFormulario = (usuario) => {
    if (usuario.login == usuario.password && usuario.login != "")
        return "El login no puede ser igual al password"
  };

  /* const logueaUsuario = (login, password) => {
    if (login == "begona" && password == "1234") return true;
        return false
  } */

  const logueaUsuario = (usuario) => {
    if (usuario.login == "begona" && usuario.password == "1234") return true;
        return false
  }