//Combinar dos Objetos

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1Kg",
    altura: "30Cm",
}

const newProduct = {...producto, ...medidas }

console.log(newProduct);