import * as usuario from "./usuario.mjs"
import * as empleado from "./empleado.mjs"

function crearUsuario(dni, nombre, edad){
    let objUsuario2 = new usuario.Usuario(dni, nombre,edad);
    return objUsuario2;
}

function crearEmpleado(codigo, nombre, telefono){
    let objEmpleado2 = new empleado.Empleado(codigo, nombre,telefono);
    return objEmpleado2;
}

//funcion autoejecutable
//funcion que se autollama no hace falta nombre y se envuelve con parentesis y con otros parentesis al final
(function (){
    let usuarios = [];
    usuarios.push(crearUsuario ("5474539H", "Amparo", 22));
    usuarios.push(crearUsuario ("5434939H", "Lucia", 24));
    usuarios.push(crearUsuario ("7464539H", "Rodrigo", 21));
    console.log(usuarios);

    usuarios.forEach(usuario => {
    usuario.showMe();
    });
})();