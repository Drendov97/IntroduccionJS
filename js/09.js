//Declaración de Funciones

function sumar() {
    console.log(10 + 10);
}

sumar();

const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

//  IIFE Tiene la característica de que no se puede acceder a las variables (que estan contenida dentro de ella) desde otro archivo o función

(function() {
    console.log('Esto es una función');
})