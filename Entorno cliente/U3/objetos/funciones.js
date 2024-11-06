function Personas(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

}

function Telefono(numero){
    this.numero = numero;
    this.llamadas = 0;

    this.llamar = function() {
        this.llamadas++;
    }
}

function Punto(x,y){
    this.x = x;
    this.y = y;
}

function Recta(punto1, punto2){
    this.punto1 = punto1;
    this.punto2 = punto2;
}

function Casas(calle, numero, cp){
    this.calle = calle;
    this.numero = numero;
    this.cp = cp;

    this.setNumero = function(nuevNum){
        this.numero = nuevNum;
    }

    this.setCalle = function(nuevCalle){
        this.calle = nuevCalle
    }

    this.setCp = function(nuevCp){
        this.cp = nuevCp;
    }

    this.imprimeCalle = function(){
        console.log(this.calle);
    }

    this.imprimeNumero = function(){
        console.log(this.numero);
    }

    this.imprimeCp = function(){
        console.log(this.cp);
    }

    console.log("Nueva casa en calle " + this.calle + ", nº: " + this.numero + ", CP: " + this.cp);
}

function Alumno(id, nombre, notaMedia){
    this.id = id;
    this.nombre = nombre;
    this.notaMedia = notaMedia;
}

function Colegio(nombre, aulas, alumnos){
    this.nombre = nombre;
    this.aulas = aulas;
    this.alumnos = alumnos;

    this.arrAlumnos = [];

    for(let i = 0; i<alumnos; i++){
        let nombreAlumno = "Alumno" + (i+1);
        let alumno = new Alumno (i, nombreAlumno, 5.00);
        this.arrAlumnos.push(alumno);
    }

    this.consultarNotaMedia = function(id){
        let alumnoSolicitado = this.arrAlumnos.find(alumno=>alumno.id == id);
        if (alumnoSolicitado.id == id){
            console.log("La nota media de " + alumnoSolicitado.nombre + " es de " + alumnoSolicitado.notaMedia);
        }else{
            console.log("no se ha encontrado un alumno con ese id");
        }
    }

    this.modificarNotaMedia = function(id, nuevaNota){
        let alumnoSolicitado = this.arrAlumnos.find(alumno=>alumno.id == id);
        if (alumnoSolicitado.id == id){
            alumnoSolicitado.notaMedia = nuevaNota;
            console.log("La nota media de " + alumnoSolicitado.nombre + " se ha actualizado a " + alumnoSolicitado.notaMedia);
        }else{
            console.log("no se ha encontrado un alumno con ese id");
        }
    }
    console.log("Colegio " + this.nombre + " creado");
}