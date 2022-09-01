// CONSTRUCTOR PARA IR SUMANDO NUEVOS LIBROS
class libro{
    constructor(id,nombre, precio, categoria, autor,img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.autor = autor
        this.img = img

    }
    
}

// ARRAY DE LIBROS
const libreria = [];

// AGRAGANDO LIBROS AL ARRAY
let libro1 = new libro(0,"los catorce cuadernos",2500,"ficcion",'Juan Sklar','./img/losCatorce.jpg');
let libro2 = new libro(1,"¿Donde estoy?",3500,"ensayo",'Bruno Latour', './img/Latour.jpg');
let libro3 = new libro(2,'Aniquilacion',3000,"ficcion",'Michel Houellebecq', './img/aniquilaAa.jpg');
let libro4 = new libro(3,'Soy una tonta por quererte',2800,"ficcion",'Camila Sosa Villada', './img/VilladaSoyUna.jpg');
let libro5 = new libro(4,'Cronicas Marcianas',2500,"ficcion",'Ray Bradbury', './img/Marciano.jpg');
let libro6 = new libro(5,'Los peligros de fumar en la cama',1800,"ficcion",'Mariana Enriquez','./img/peligro.jpg');
let libro7 = new libro(6,'El Tercer Reich',2500,"ficcion",'Roberto Bolaño','./img/elTercerRe.jpeg');
let libro8 = new libro(7,'Chocolate sin grasa',3800,"ensayo",'Slavoj Zizek','./img/sinGrasa.jpg');
let libro9 = new libro(8,'No me acuerdo de nada',3500,"ensayo",'Nora Ephron','./img/nadaaa.jpg');
let libro10 = new libro(9,'Indigno de ser humano',3600,"ficcion",'Osamu Dazai','./img/NoHumano.jpg');
let libro11 = new libro(10,'El fin del amor',1800,"ensayo",'Tamara Tenenbaum','./img/Tamara.jpg');
let libro12 = new libro(11,'El tunel',1500,"ficcion",'Ernesto Sabato','./img/TunelSabatiano.jpg');
let libro13 = new libro(12,'Una cuestion personal',1800,"ficcion",'Kenzaburo Oe','./img/CuestionOe.jpg');

libreria.push(libro1, libro2, libro3, libro4, libro5,libro6,libro7, libro8, libro9, libro10, libro11, libro12, libro13);


let carrito = [];

document.addEventListener("DOMContentLoaded",() => {
    renderLibros(libreria)
    carrito = JSON.parse( localStorage.getItem('carrito') ) || []
    renderCart()
});

function renderLibros(){
    let html = "";

    for(let i = 0; i < libreria.length; i++){
        html = html + `
        <div class="card" style="width: 18rem;"> 
            <img src="${libreria[i].img}" alt="">
                <div class="card-body">
                    <h5 class="card-title"> ${libreria[i].nombre}</h5>
                    <p class="card-text">$ ${libreria[i].precio}</p>
                    <button class="btn btn-primary" onclick="addToCart(${libreria[i].id})">AÑADIR AL CARRITO</button>
                </div>
        </div>
        `;
    }

    document.getElementById('contenedor-Libros').innerHTML = html
}

// FUNCION CARRITO
function renderCart(){

    let html = "";

    for(let i = 0; i < carrito.length; i++){
        html = html + `
        <div style="border: 1px solid green; margin: 10px;">
            <p>nombre: ${carrito[i].nombre}</p>
            <p>Precio: ${carrito[i].precio}</p>
            <span style="cursor:pointer"; onclick="removeFromCart(${i});">BORRAR</span>;
        </div>
        `;

        
    }
    document.getElementById("librosEnCarrito").innerHTML = html;

    almacenarEnStorage()
    
}


function addToCart(id){
    const foundBooks = libreria.find(item => item.id == id);
    
    carrito.push(foundBooks);
    renderCart();
}

function removeFromCart(id){
    carrito.splice(id,1);
    renderCart();
}

function almacenarEnStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

renderLibros();




// ARRAY DE LIBROS
// let books = [
//     {id:0, name:"nunca llegamos a las indias", price:2500, category: "ficcion", img:'img/juanS.png'},
//     {id:1, name:"en el camino", price:2000, category: "ficcion", img:'img/enElCamino.webp'},
//     {id:2, name:"el tunel", price:3000, category: "ficcion", img:'img/tunelS.jpg'},
// ];

// let cart = [];

// function renderBooks(){
//     let html = "";

//     for(let i = 0; i < books.length; i++){
//         html = html + `
//         <div onclick ="addToCart(${books[i].id});" style="border: 1px solid green; margin: 10px;">
//             <img src="${books[i].img}" alt="">
//             <p>id: ${books[i].id}</p>
//             <p>nombre: ${books[i].name}</p>
//             <p>Precio: ${books[i].price}</p>
//             <p>Categoria: ${books[i].category}</p>
//         </div>
//         `;
//     }
//     document.getElementById("div-products").innerHTML = html
// }
// // FUNCION CUANDO AGREGO O MUESTO EN/AL CARRITO
// function renderCart(){

//     let html = "";

//     for(let i = 0; i < cart.length; i++){
//         html = html + `
//         <div style="border: 1px solid green; margin: 10px;">
//             <p>id: ${cart[i].id}</p>
//             <p>nombre: ${cart[i].name}</p>
//             <p>Precio: ${cart[i].price}</p>
//             <p>Categoria: ${cart[i].category}</p>
//             <span style="cursor:pointer"; onclick="removeFromCart(${i});">BORRAR</span>;
//         </div>
//         `;
//     }
//     document.getElementById("div-cart").innerHTML = html
// }

// function addToCart(id){
//     const foundBooks = books.find(item => item.id == id);
    
//     cart.push(foundBooks);
//     renderCart();
// }


// function removeFromCart(id){
//     cart.splice(id,1);
//     renderCart();
// }



// renderBooks();