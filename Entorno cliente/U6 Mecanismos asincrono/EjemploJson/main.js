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

//como vamos a llamar a una fincion asyncrona dentro de esta, esta tambien tiene que tener el async al principio y ponerle
//el await cuando llamemos a la funcion que es asincrona
async function valida(usu, cont){
    let array = await getFetch();
    console.log('array',array)
    array.find(elemento => {
        if (usu == elemento.login && cont == elemento.password){
            alert("si");
        }
    })
}

document.getElementById("boton").addEventListener("click", () => {
    
    let nombre = document.forms.login.nombre.value;
    let contrasena = document.forms.login.password.value;
    console.log(nombre);

    valida(nombre, contrasena);
});