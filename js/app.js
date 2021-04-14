let myUserProfile = new UserProfile();

myUserProfile.load();

console.log("Mi darkmode es: " + myUserProfile.darkmode);

let myInput = 'n';//prompt("Quiere pasar a darkmode? [S]i o [N]o");

if( myInput.toLowerCase() == "s"){
    myUserProfile.darkmode = true;
    myUserProfile.save();
}

// salida en modo objeto del DOM
console.dir(document);

// Salida en modo texto del html
console.log(document);

console.dir(document.body.children);

for (const element of document.body.children) {
    console.dir(element);
}

/*
let myTempObj = {id: 0, marca:"CocaCola", precio:120, inflacion: 1000 } //tramedatos(URL); //

let myProducto = new Producto( myTempObj.id, myTempObj.marca, myTempObj.precio );

localStorage.setItem("producto", JSON.stringify(myProducto));

let myTempObj2 = {id: 0, marca:"Pepsi", precio:120, inflacion: 1000 } //tramedatos(URL); //

let myProducto2 = new Producto( myTempObj2.id, myTempObj2.marca, myTempObj2.precio );

let myCarrito = [] // Que pasa si en lugar de usar un array uso objeto carrito?

let storedCarrito = sessionStorage.getItem("carrito");

if( storedCarrito != null){
    // primero cargo como array

    let tempMyCarrito = JSON.parse(storedCarrito); // Estoy un array de ojbetos que NO son Producto

    for (const producto of tempMyCarrito) {
        let loadedProduct = new Producto(producto.id, producto.marca, producto.precio)
        myCarrito.push(loadedProduct);
    }

} else{
    myCarrito.push(myProducto);
    myCarrito.push(myProducto2);
}



sessionStorage.setItem("carrito", JSON.stringify(myCarrito));
*/