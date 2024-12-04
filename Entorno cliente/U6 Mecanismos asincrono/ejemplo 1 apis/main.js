//funcion para crear la solicitud
function solicitud(){
    //creamos el objeto de la clase XMLH
    let xml = new XMLHttpRequest();

    //realizamos la petecion
    xml.open('GET', "https://fakestoreapi.com/products", true);

    xml.onload = function (){
        let p = document.getElementById("muestra");
        let convertido = convertirJson(xml.responseText);

        p.textContent = xml.responseText;

        console.log(convertido);
    };

    xml.send();

};

function convertirJson (string){
    let convertido = JSON.parse(string)
    return convertido;
}

//con fetch

/*https://cat-fact.herokuapp.com
https://fakestoreapi.com/products*/

function getFetch(){
    /*Promesas, para trabajar con promesas se usa el metodo .then y se van enlazando uno con otro, es como que van en orden
    y y lo que creas en uno esta en el sigiuente*/
    fetch('https://api.api-ninjas.com/v1/animals?name=cheetah')
    //la respuesta del fetch
    .then(res=>res.json())
    .then(json=>{
        let p = document.getElementById("muestra");
        //json seria el objeto, en la posicion 0 y quiero el titulo
        //p.textContent = json;
        console.log(json)
    });
}