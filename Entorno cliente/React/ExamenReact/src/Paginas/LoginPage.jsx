import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export default function LoginPage() {
    const [usu, setUsu] = useState({username: "", password: ""})
    const usuario = {
        "username":"johnd",
        "password":"m38rmF$"
        }

    const navegar = useNavigate()

    const handleForm = ((e) => {
        setUsu({...usu, [e.target.name]: e.target.value})
    }) 

  return (
    <>
        <form onSubmit={(e) => {
            e.preventDefault()
            navegar('/Principal')
        }}>
            <p>Nombre</p>
            <input
             type="text"
             name= "username"
             autoComplete="false"
             value={usu.username}
             onChange={handleForm}
            />

            <p>Contraseña</p>
            <input
             type="password"
             name= "password"
             autoComplete="false"
             value={usu.password}
             onChange={handleForm}
            />
            <br /><br />
            <button type="submit">Enviar</button>
        </form>
    </>
  )
}
