let string = "Hola Mundo";
console.log(string);
console.log('string', typeof string);

let numero = 10;
console.log(numero);
console.log('numero', typeof numero);

let booleano = true;
console.log(booleano);
console.log('booleano', typeof booleano);

let nullVar = null;
console.log(nullVar);
console.log('nullVar', typeof nullVar);

let array1 = [string, numero, booleano, nullVar];
console.log('array1:',array1);

let vector= [6,7,8,9];
console.log('vector:',vector, vector[2]);

let array2 = [vector[0], vector.length - 1, vector[vector.length-1]];
console.log('array2:',array2);

let objPropio = {
    nombre: 'Juan',
    apellido: 'Perez',
    segundoApellido: 'Gomez',
    edad: 25
};

console.log(`mi nombre es ${objPropio.nombre} mi primer apellido ${objPropio.apellido} mi segundo apellido ${objPropio.segundoApellido} y tengo ${objPropio.edad} años`);