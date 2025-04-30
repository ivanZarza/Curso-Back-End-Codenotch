const libreriaVector = require('./libreriaVector.js');

let v1 = libreriaVector.crearVector(8, 11);
console.log('V1',v1);
let v2 = libreriaVector.crearVector(8, 11);
console.log('V2',v2);

let sumaVectores  = libreriaVector.sumarVectores(v1, v2);
console.log('SUMAR VECTORES',sumaVectores);

let vectorMultiplicado = libreriaVector.productoNumeroVector(2, v1);
console.log('VECTOR MULTIPLICADO',vectorMultiplicado);

let vectorRestado = libreriaVector.restaVector(v1, v2);
console.log('VECTORES RESTADOS',vectorRestado);

let vectorProducto = libreriaVector.productoVector(v1, v2);
console.log('VECTORES MULTIPLICADOS',vectorProducto);
