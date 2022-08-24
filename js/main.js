// ARRAY DE LIBROS
let books = [
    {id:0, name:"nunca llegamos a las indias", price:2500, category: "ficcion", img:'img/juanS.png'},
    {id:1, name:"en el camino", price:2000, category: "ficcion", img:'img/enElCamino.webp'},
    {id:2, name:"el tunel", price:3000, category: "ficcion", img:'img/tunelS.jpg'},
];

let cart = [];

function renderBooks(){
    let html = "";

    for(let i = 0; i < books.length; i++){
        html = html + `
        <div onclick ="addToCart(${books[i].id});" style="border: 1px solid green; margin: 10px;">
            <img src="${books[i].img}" alt="">
            <p>id: ${books[i].id}</p>
            <p>nombre: ${books[i].name}</p>
            <p>Precio: ${books[i].price}</p>
            <p>Categoria: ${books[i].category}</p>
        </div>
        `;
    }
    document.getElementById("div-products").innerHTML = html
}
// FUNCION CUANDO AGREGO O MUESTO EN/AL CARRITO
function renderCart(){

    let html = "";

    for(let i = 0; i < cart.length; i++){
        html = html + `
        <div style="border: 1px solid green; margin: 10px;">
            <p>id: ${cart[i].id}</p>
            <p>nombre: ${cart[i].name}</p>
            <p>Precio: ${cart[i].price}</p>
            <p>Categoria: ${cart[i].category}</p>
            <span style="cursor:pointer"; onclick="removeFromCart(${i});">BORRAR</span>;
        </div>
        `;
    }
    document.getElementById("div-cart").innerHTML = html
}

function addToCart(id){
    const foundBooks = books.find(item => item.id == id);
    
    cart.push(foundBooks);
    renderCart();
}


function removeFromCart(id){
    cart.splice(id,1);
    renderCart();
}



renderBooks();