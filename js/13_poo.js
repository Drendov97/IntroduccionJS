//  POO

/** Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//  Object Constructor

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

//  Prototype Functions: Crea funciones que solo se utilizan en un objeto en específico.

Producto.prototype.formatearProducto = function() {
    return `El Producto: ${this.nombre} tiene un precio de: $${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 50"', 5000);
const producto3 = new Producto('Laptop"', 10000);



console.log(producto2.formatearProducto());
console.log(producto3);