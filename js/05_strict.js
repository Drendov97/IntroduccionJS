"use strict"; //Corre JS en modo estricto, es decir, no te permite hacer malas prácticas de programación

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); //No permite agregar, modificar ni eliminar propiedades al objeto
Object.seal(producto); //No permite agregar ni eliminar pero SI permite modificar propiedades

producto.imagen = 'image.jpg';

console.log(producto);