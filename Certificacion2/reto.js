// Reto 1
const color = require('colors');
console.log('Reto 1'.bgMagenta);
let cadena = "Hola Mundo";
let numero = 10;
let booleano = true;

console.log(cadena.green);
console.log(numero.toString().blue);
console.log(booleano.toString().red);

// Reto 2
console.log('Reto 2'.bgMagenta);
let raizCuadrada = Math.sqrt(1369);
console.log(raizCuadrada);

// Reto 3
console.log('Reto 3'.bgMagenta);
let numAleatorio = Math.round(Math.random() * (0,  10))
console.log(numAleatorio);

// Reto 4
console.log('Reto 4'.bgMagenta);
let nombre = 'Nico';
let apellido = 'Zarza';
let texto1 = 'Hola ' + nombre + ' ' + apellido;
let texto2 = `Hola ${nombre} ${apellido}`;

console.log(texto1, ",", texto2);

texto1 = texto1.toUpperCase();
texto2 = texto2.toUpperCase();

console.log(texto1.green, ",", texto2.red);

// Reto 5
console.log('Reto 5'.bgMagenta);
let string = 'Hola codenotch';
let longitud = string.length;
console.log(string[3]);
let palabra = 'codenotch';
console.log(string.includes(palabra).toString().red);