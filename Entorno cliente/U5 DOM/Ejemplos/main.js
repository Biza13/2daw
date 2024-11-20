//import * as empleado from "./empleado.mjs";
import {Empleado} from "./empleado.mjs";

//esto seria con el import de arriba
/* function crearEmpleado(codigo, nombre, telefono){
    let objEmpleado2 = new Empleado.Empleado(codigo, nombre,telefono);
    return objEmpleado2;
} */

function crearEmpleado(codigo, nombre, telefono){
    let objEmpleado2 = new Empleado(codigo, nombre,telefono);
    return objEmpleado2;
}

let arrEmpl = [];
let formulario = document.forms.formEmpleado;

let id = formulario.elements.id.valaue;
let nombre = formulario.elements.nombre.value;
let telefono = formulario.elements.telefono.value;
