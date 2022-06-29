//Objetos

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Forma anterior para acceder y sacar un valor dentro del objeto

const precioProducto = producto.precio;
const productoNombre = producto.nombreProducto;

// console.log(precioProducto);
// console.log(productoNombre);

//Agrega un nueva propiedad al objeto
producto.imagen = 'image.jpg';

//Elimina una propiedad del objeto
delete producto.precio;

//Destructuring (crea la variable y extrae el valor en 1 solo paso)
const { precio, nombreProducto } = producto;
console.log(precio);
console.log(nombreProducto);