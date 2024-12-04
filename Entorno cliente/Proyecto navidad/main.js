function getFetch(){
    /*url de la pagina */
    fetch('https://akabab.github.io/superhero-api/api/all.json')
    //la respuesta del fetch
    .then(res=>res.json())
    .then(json=>{
        let p = document.getElementById("muestra");
        //json seria el objeto, en la posicion 0 y quiero el titulo
        //p.textContent = json;
        let body = document.querySelector("body");
        let img = document.createElement("img");
        img.src = "";
        body.appendChild(img);

        console.log(json[0])
    });
}