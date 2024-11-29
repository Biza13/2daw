//clase de lobro
class Book {
    constructor(titulo, genero, autor){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leidoONo = false;
        this.fechaLectura = undefined;
    }
    //setters
    setLeidoONo(leidoONo){
        this.leidoONo = leidoONo;
    }
    setFechaLectura(fechaLectura){
        this.fechaLectura = fechaLectura
    }

    //getters
    getLeidoONo(){
        return this.leidoONo;
    }
    getFechaLectura(){
        return this.fechaLectura;
    }
}

//clase de lista de libros
class BookList{
    constructor(numLibrosLeidos, numLibrosNoLeidos, sigLibroLeer, libroActual, ultimoLibroLeido, libros){
        this.numLibrosLeidos = numLibrosLeidos; 
        this.numLibrosNoLeidos = numLibrosNoLeidos;
/*         this.sigLibroLeer = sigLibroLeer;
        this.ultimoLibroLeido = ultimoLibroLeido; */
        this.libroActual = libroActual;
        this.libros = libros;
    }

    add(libro){
        this.libros.push(libro);
    }

    finishCurentBook(){
        this.libroActual.leidoONo = true;
        this.libroActual.fechaLectura = Date.now();
        /* this.ultimoLibroLeido = this.libroActual; */ 
    }

    listBook(libros){
        libros.forEach(libro => {
            console.log(libro);
        });
    }
}

function crearLibro (){

}