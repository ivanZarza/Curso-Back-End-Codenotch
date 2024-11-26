// // Reto 1

// for (let i = 1; i <= 10; i++) {
//   console.log('ejercicio for',i);
// }

// let i1 = 1;
// while (i1 <= 10) {
//   console.log('ejercicio1 while',i1);
//   i1++;
// }

// for (let i = 2; i <= 10; i+=2) {
//   console.log('ejercicio for',i);
// }

// let i2 = 1;
// while (i2 <= 10) {
//   i2%2 === 0 ? console.log('ejercicio2 while',i2) : '';
//   i2++;
// }

// for (let i = 3; i <= 10; i+=3) {
//   console.log('ejercicio for',i);
// }

// let i3 = 1;
// while (i3 <= 10) {
//   i3%3 === 0 ? console.log('ejercicio3 while',i3) : '';
//   i3++;
// }

// Reto 2

// let personas = [
//   persona1 =
//   {
//     nombre: 'Juan',
//     apellido: 'Estevez',
//     anyoNacimiento: 1980,
//     aficiones: ['badminton', 'baloncesto', 'tenis'],
//     dni: { anyoExpedicion: 1998, lugarNacimiento: 'A Coruña' },
//     colorPelo: 'castaño',
//   },
//   persona2 = {
//     nombre: 'Ana',
//     apellido: 'Pena',
//     anyoNacimiento: 1990,
//     aficiones: ['rugby', 'dormir', 'leer'],
//     dni: { anyoExpedicion: 2008, lugarNacimiento: 'Lugo' },
//     colorPelo: 'rubio',
//   },
//   persona3 = {
//     nombre: 'Maria',
//     apellido: 'Juega',
//     anyoNacimiento: 2000,
//     aficiones: ['trabajar', 'rascarse', 'surfear'],
//     dni: { anyoExpedicion: 2001, lugarNacimiento: 'Sevilla' },
//     colorPelo: 'negro',
//   },
//   persona4 = {
//     nombre: 'Pedro',
//     apellido: 'Casquero',
//     anyoNacimiento: 2010,
//     aficiones: ['salir', 'correr', 'saltar'],
//     dni: { anyoExpedicion: 2020, lugarNacimiento: 'Madrid' },
//     colorPelo: 'pelirrojo',
//   }
// ]

// for (let datos in personas[0]) {
//   console.log(datos, personas[0][datos]);
// }
// let elementos = ''
// for(i=0;i<personas.length;i++) {
// elementos = personas[i]
// console.log(elementos);
// }

// let elementosWhile = ''
// let i4 = 0
// while(i4 < personas.length) {
//   elementosWhile = personas[i4]
//   console.log('ELEMENTOSWHILE',elementosWhile);
//   i4++
// }

// for(persona of personas) {
//   console.log('FOR...OF',persona);
// }

// Reto 3

// for(i=0;i<personas.length;i++){
//   if(personas[i].anyoNacimiento >=1978 && personas[i].anyoNacimiento<=2000){
//     console.log(personas[i]);
//     console.log('Tu edad esta entre 40 y 20 años');
//   } else {
//     console.log(personas[i]);
//     console.log('Tu edad no esta entre 40 y 20 años');
//   }
// }

// let i5 = 0
// while(i5 < personas.length){
//   if(personas[i5].anyoNacimiento >=1978 && personas[i5].anyoNacimiento<=2000){
//     console.log('WHILE',personas[i5]);
//     console.log('Tu edad esta entre 40 y 20 años');
//   } else {
//     console.log('WHILE',personas[i5]);
//     console.log('Tu edad no esta entre 40 y 20 años');
//   }
//   i5++
// }

// for(persona of personas){
//   if(persona.anyoNacimiento >=1978 && persona.anyoNacimiento<=2000){
//     console.log('FOR...OF',persona);
//     console.log('Tu edad esta entre 40 y 20 años');
//   } else {
//     console.log('FOR...OF',persona);
//     console.log('Tu edad no esta entre 40 y 20 años');
//   }
// }

// for(i=0;i<personas.length;i++){
// personas[i].aficiones.push('Jugar a la play')
// console.log(personas[i].aficiones);
// }

// for(persona of personas) {
//   persona.aficiones.push('Jugar a la play')
//   console.log('FOR..OF',persona.aficiones);
// }

// // Reto 4

// let facNum = 5
// for(i=facNum;i>1;i--){
//   facNum = facNum * (i-1)
//   console.log(facNum);
// }

// let facNum2 = 5
// let i6 = facNum2
// while(i6 > 1){
//   facNum2 = facNum2 * (i6-1)
//   console.log('WHILE',facNum2);
//   i6--
// }

// let array = [1,2,3,4,5,6,7,8,9,10]
// let array2 = []
// for(i=0;i<array.length;i++){
//   array[i] % 3 === 0 ? console.log(array[i]) : '';
// }

// let suma = 0
// for(i=0;i<=100;i++){
//   suma = suma + i
//   console.log(suma,i);
// }

// let arrayNombres = ['Juan', 'Ana', 'Maria', 'Pepe', 'Pedro']

// let i7 = 0
// while (i7 < arrayNombres.length) {
//   arrayNombres[i7] === 'Pepe' ? console.log('Pepe', i7) : '';
//   i7++
// }

