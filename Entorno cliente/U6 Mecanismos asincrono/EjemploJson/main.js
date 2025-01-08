//lanzar el json server
//npx json-server nombreDelArchivo.json


//-----CON ASYNC AWAIT-----
//usando el async es lo mismo que la que no lo usa, solo que tienes que decirle que espere a que termine lo primero para que siga
async function getFetch(){
    try {
        let respuesta = await fetch('http://localhost:3000/Usuarios');
        let datosJson = await respuesta.json();
        return datosJson;
    } catch (error) {
        alert(error);
    }
}

//como vamos a llamar a una funcion asyncrona dentro de esta, esta tambien tiene que tener el async al principio y ponerle
//el await cuando llamemos a la funcion que es asincrona
//funcion que va con el getFetch que necesita el async await
async function valida(usu, cont){
    let array = await getFetch();
    console.log('array',array)
    array.find(elemento => {
        if (usu == elemento.login && cont == elemento.password){
            alert("si");
        }
    })
}

//-----SIN ASYNC AWAIT-----
//esta funcion es la misma que la del getFetch arriba sin necesidad del async await
function getFetchB(){
    return fetch('http://localhost:3000/Usuarios').then((result) => result.json());
};

let a = getFetchB();
console.log("promesa " + a);

function validaB(usu, cont){

    /*el getfetchB devuelve una promesa por eso hay que tratarla como tal con .then 
    y al hacer el return de esta, la funcion validaB tambien devuelve una promesa por lo que habra que tratarla como tal cuando se llame*/
    return getFetchB()
    .then((datos) => {
        let ok = false;
        console.log(datos);
        for(let i = 0; i < datos.length; i++){
            const elemento = datos[i];
            if (usu == elemento.login && cont == elemento.password){
                ok = true;
                break; //si lo encuentra que no siga buscando
            }
        }
        return ok;
    })
    
}

document.getElementById("boton").addEventListener("click", () => {
    
    let nombre = document.forms.login.nombre.value;
    let contrasena = document.forms.login.password.value;
    console.log(nombre);

    //tratar la función como promesa con .then
    validaB(nombre, contrasena)
    .then((valido) => {
        if (valido){
            alert("Correcto");
        }else{
            alert("Incorrecto");
        }
    })

});



//funcion para insertar en usuarios
function insertar(obj){
    
    fetch('http://localhost:3000/Usuarios', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    }) 
    .then(res => res.json())
    .then(datosJson => console.log(datosJson))
    .catch(error => console.error(error));

}

document.querySelector("#insertar").addEventListener("click", () => {

    let datos = {
        id: 6,
        login: "f",
        password: "f"
    }
    insertar(datos);

});

//funcion para hacer delete NO FUNCIONA
function borrar(obj){

    fetch('http://localhost:3000/Usuarios', {
        method: "DELETE",
    }) 
    .then(res => res.json())
    .then(datosJson => console.log(datosJson))
    .then(datosError => console.log(datosError));

}

document.querySelector("#borrar").addEventListener("click", () => {

    let datos = {
        id: 6,
        login: "f",
        password: "f"
    }
    borrar(datos);

});