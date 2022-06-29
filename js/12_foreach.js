const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Celular', precio: 8000 },
    { nombre: 'SmartTV', precio: 15000 },
    { nombre: 'Tablet', precio: 1000 },
    { nombre: 'Teclado geimer', precio: 900 },
];

//  forEach

carrito.forEach(function(producto) {
    console.log(producto.precio);
});

//  forEach arrow mode

//carrito.forEach(producto => console.log(producto.nombre));

// map sirve para crear un nuevo arreglo sacando los elementos del antiguo arreglo y poniendolos en el nuevo

const arreglo = carrito.map(producto => `${producto.nombre} - precio: $${producto.precio}`);

console.log(arreglo);