// Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }
}


const producto = new Producto('Monitor Curvo de 50"', 5000);
const producto2 = new Producto('Laptop"', 10000);

console.log(producto);
console.log(producto2);