import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";


export default function FormularioConLibreria() {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    
    const onSubmit = data => {
        console.log(data);
        logueaUsuario(data);
    }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Nombre: <input {...register("nombre")} />
      Password: <input type="password" {...register("password")} />
      {/* Genero: <select {...register("genero")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> */}
      <input type="submit" />
    </form>
  );
}

const logueaUsuario = (usuario) => {
    if (usuario.nombre == "begona" && usuario.password == "1234"){
        console.log("hoevos fritos");
        navigate("/");
    }else{
        return false
    } 
  }