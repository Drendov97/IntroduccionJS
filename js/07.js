//Arreglos/Arrays

const numeros = [1, 2, 3, 4, 5];

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
/** Ya no se usan tanto estos métodos porque hay un nuevo enfoque de no modificar el arreglo original para no perder información **/
numeros.push(60); //Agrega datos al final del arreglo
//numeros.unshift(-10, -20); //Agrega datos al principio del arreglo

meses.pop(); //Elimina el ultimo elemento 
meses.shift(); //Elimina el primer elemento
meses.splice(2, 1); //Se mueve a la poisción 2 del arreglo y elimina un elemento 

console.log(numeros);

//Rest Operator o Spread Operator

const newArray = [...meses, "Junio"];