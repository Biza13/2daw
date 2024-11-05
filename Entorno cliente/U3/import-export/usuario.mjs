export function Usuario(dni, nombre, edad){
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edad;

    this.showMe = function (){
        console.log(`Dni: ${this.dni} -- Nombre: ${this.nombre}`);
    }
}