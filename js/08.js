//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Celular', precio: 8000 },
    { nombre: 'SmartTV', precio: 15000 },
    { nombre: 'Tablet', precio: 1000 },
    { nombre: 'Teclado geimer', precio: 900 },
];

/*
//forEach
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Sí existe Marzo');
    }
});

//Includes
const resultado = meses.includes('Marzo');
console.log(resultado);


//Some es ideal para arreglos de objetos

const respuesta = carrito.some(producto => producto.nombre === 'Celular');

console.log(respuesta);

//Reduce hace un recopilado de todos los números dentro de un objeto

const resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);
*/

//Filter

const resultado = carrito.filter(producto => producto.precio >= 1000);

console.log(resultado);