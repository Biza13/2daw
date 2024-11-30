import { arrArticulos } from "./modulos/articulos.mjs";

        //informacion en consola
        function formateaArtículos() {
            console.log('Mostrando articulos...')
            arrArticulos.forEach((articulo) => {
                console.log(articulo);
            });
        }

        //formateaArtículos();

        let section = document.createElement("section");
        let body = document.querySelector("body");
        body.appendChild(section);

        //Creacion de un fragmento para mejor optimizacion del dom
        //añadiremos los articles al fragmento en cada pasada del foreach
        //y fuera del foreach añadiremos el fragmento a la section (elemento padre)
        let fragmento = document.createDocumentFragment();

        //CAMBIO
        let cont = 1;
        let arrCarrito = [];

        arrArticulos.forEach(articulo => {
            let article = document.createElement("article");
            let img = document.createElement("img");

            //CAMBIO
            article.id = "articulo" + cont;

            img.src = articulo.image;
            article.appendChild(img);

            let divPes = document.createElement("div");
            article.appendChild(divPes);

            let pCat = document.createElement("p");
            /* pCat.textContent = "Categoría: " + articulo.category */ /*Tambien se puede hacer asi y nos ahorramos una linea*/
            let categoria = document.createTextNode("Categoría: " + articulo.category);
            pCat.appendChild(categoria);
            divPes.appendChild(pCat);

            let pTit = document.createElement("p");
            let titulo = document.createTextNode("Nombre: " + articulo.title);
            pTit.appendChild(titulo);
            divPes.appendChild(pTit);

            let pDes = document.createElement("p");
            let descripcion = document.createTextNode("Descripción: " + articulo.description);
            pDes.appendChild(descripcion);
            divPes.appendChild(pDes);

            let pPunt = document.createElement("p");
            let puntuacion = document.createTextNode("Puntuación: " + articulo.rating.rate + "; Votos: " + articulo.rating.count);
            pPunt.appendChild(puntuacion);
            divPes.appendChild(pPunt);

            let pPre = document.createElement("p");
            let precio = document.createTextNode("Precio: " + articulo.price);
            pPre.appendChild(precio);
            divPes.appendChild(pPre);

            //CAMBIO ponerle evento onclick al article
            article.addEventListener("click", (event) =>{
                let article = event.currentTarget;

                let img = article.querySelector("img").src;
                let categoria = article.querySelector("div p:nth-child(1)").textContent;
                let titulo = article.querySelector("div p:nth-child(2)").textContent;
                let desc = article.querySelector("div p:nth-child(3)").textContent;
                let puntuacion = article.querySelector("div p:nth-child(4)").textContent;
                let precio = article.querySelector("div p:nth-child(5)").textContent;

                /* console.log("Imagen: ", img);
                console.log("Categoría: ", categoria);
                console.log("Título: ", titulo);
                console.log("Descripción: ", desc);
                console.log("Puntuación: ", puntuacion);
                console.log("Precio: ", precio); */

                let obj = {
                    title: titulo,
                    price: precio,
                    description: desc,
                    category: categoria,
                    image: img,
                    rating: puntuacion
                }

                arrCarrito.push(obj);

                let header = document.querySelector("header");
                let info = document.createElement("p");
                info.textContent = "Articulo: " + titulo + " añadido al carrito";
                header.appendChild(info);

                console.log(obj);
                console.log(arrCarrito);

                //fSeleccion(article);
            });
            //FIN CAMBIO

            fragmento.appendChild(article);

            //CAMBIO
            cont++;
        });

        section.appendChild(fragmento);

        //CAMBIO
        function leerCarrito(carrito){
            carrito.forEach(element => {
                return "Título: " + element.title +
                        "Precio: " + element.price +
                        "Descrippción: " + element.description +
                        "Category: " + element.category;
            });
        }

        function verCarrito(arrCarrito){
            let section = document.getElementById("carrito");
            
            carrito.forEach(element => {
                let div = document.createElement("div");
                section.appendChild(div);

                let pTit = document.createElement("p");
                pTit.textContent = element.title;

                let pDesc = document.createElement("p");
                pDesc.textContent = element.description;

                let pPrec = document.createElement("p");
                pPrec.textContent = element.price;

                let pCat = document.createElement("p");
                pCat.textContent = element.category;
            });
            
        }
        //FIN CAMBIO
        