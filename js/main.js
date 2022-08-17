
// ----- ---- ---- ---- INCORPORAR NUEVOS LIBROS EN UN ARRAY MEDIANTE METODO PUSH. ----- ---- --- 

class libro{
    constructor(nombre, categoria, autor, precio, disponibilidad, anio) {
        this.nombre = nombre
        this.categoria = categoria
        this.autor = autor
        this.precio = precio
        this.disponibilidad = disponibilidad
        this.anio = anio

    }
    
}

let libro1 = new libro("nunca llegamos a las indias", "ficcion", "juan sklar", 2500, true, 1990)
let libro2 = new libro("en el camino", "ficcion", "kerouac", 2000, false, 1990)
let libro3 = new libro("el tunel", "ficcion", "sabato", 3000, true, 1990)

const libreria = []

libreria.push(libro1)
libreria.push(libro2)
libreria.push(libro3)

// METODO FIND PARA BUSQUEDA DE LIBRO POR DISPONIBILIDAD 

let disponibles = libreria.filter(libro=>libro.disponibilidad == true);

console.log(disponibles);


// ---- --- -- FUNCION PARA AGREGAR LIBROS LADO DEL USUARIO ---- --- --- 

function agregarLibro(){
    let nombreLibroNuevo = prompt("Ingrese Nombre");
    let categoriaNueva = prompt("Ingrese Categoria");
    let autorNuevo = prompt("Ingrese autor");
    let precioNuevo = Number(prompt("Ingrese precio"));
    let disponibilidadNueva = confirm("Ingrese si esta disponible");
    let anioNuevo = Number(prompt("Ingrese anio"));
    let libroNuevo = new libro(nombreLibroNuevo, categoriaNueva, autorNuevo, precioNuevo, disponibilidadNueva, anioNuevo)
    // console.log(libroNuevo);
    libreria.push(libroNuevo)
    console.log(libreria);
}

let cargarLibro = prompt("Desea agregar un libro?").toLocaleUpperCase();


while(cargarLibro == "SI"){
    agregarLibro();
    cargarLibro = prompt("Desea agregar un libro?").toLocaleUpperCase()
}







// ---- ---- ----- --  CARRITO DE LIBROS. ---- ---- --- -- 
// let precioMasVendidos = 3500;
// let precioNovedades = 2800; 
// let precioRecomendados = 2000;

// function compra (){
//     let preguntaLibro = prompt("¿Que libro desea?")

//     while(preguntaLibro == ""){
//         alert("Por favor ingrese el nombre de un libro");
//         preguntaLibro = prompt("¿Que libro desea?");
//     }

//     if (preguntaLibro === "Nunca llegamos a las indias" || preguntaLibro === "en el camino" ||preguntaLibro === "el tunel") {
//         let cantida = parseInt(prompt("¿Cuantos desea?"))
//         alert("Su monto es de " + "$" + cantida * precioMasVendidos);
//     } else if (preguntaLibro === "demasiada felicidad" || preguntaLibro === "olimpia" ||preguntaLibro === "los dias de la revolucion"){
//         let cantida = parseInt(prompt("¿Cuantos desea?"))
//         alert("Su monto es de " + "$" + cantida * precioNovedades);
//     } else if (preguntaLibro === "psicopolitica" || preguntaLibro === "¿donde estoy?" ||preguntaLibro === "filosofia a martillazos"){
//         let cantida = parseInt(prompt("¿Cuantos desea?"))
//         alert("Su monto es de " + "$" + cantida * precioRecomendados);
//     }
//     alert("Gracias por su compra");
// }

// compra(); 
