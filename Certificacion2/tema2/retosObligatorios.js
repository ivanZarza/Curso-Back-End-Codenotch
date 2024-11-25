// //Reto1 
// let cadena = "Buenos dias";
// let numero = 8;
// let booleano = true;
// let array1 = [cadena, numero, booleano];
// console.log(array1);

// //Reto2
// let mapa = new Map();
// mapa.set('numero',1);
// mapa.set(1,1);
// mapa.set('string','Mi string');
// mapa.set(2,'Mi string');
// mapa.set('booleano',true);
// mapa.set(3,true);
// mapa.set('array',[1,2,3,4]);
// mapa.set(4,['Juan', 'Pepe', 'Ana', 'Maria']);

// // Reto 3
// console.log(mapa);
// console.log(mapa.size);
// console.log(mapa.get(3));
// mapa.delete('string')
// console.log(mapa);

// // Reto4

// let set = new Set();
// set.add(1);
// set.add('1');      
// set.add('Saludo'); 
// set.add([1,2,3,4]);
// set.add(1);

// console.log(set);
// console.log(set.size);
// console.log(set.has(2));
// set.delete('1');
// console.log(set);

// Reto5

// let arrayA = ['Nico', 'Adri', 'Jose', 'Mounir', 'Sergio'];
// let arrayB = ['Violeta', 'Cristina', 'Ana', 'Maria', 'Laura'];
// let arrayC = ['azul', 'rojo', 'verde', 'amarillo', 'naranja'];
// let matriz = [arrayA, arrayB, arrayC];
// console.log(matriz[2]);
// console.log(matriz[2][4]);
// console.log(matriz[2][4][1]);
// let arrayNumeros = [1, 2, 3, 4, 5];
// let arrayQuitada= matriz.splice(2, 1, arrayNumeros)[0];
// console.log('matriz', matriz);
// console.log('arrayQuitada', arrayQuitada);
// let booleanoPrueba = true
// let stringQuitado = matriz[1].splice(3,1, booleanoPrueba)[0];
// console.log('stringQuitado', stringQuitado);
// console.log('matriz', matriz);
// matriz[0].push('Pepe');
// console.log('matriz', matriz);
// let primerElemento = matriz[0].shift();
// console.log('primerelemento', primerelemento);
// console.log('matriz', matriz);
// matriz[1].pop();
// console.log('matriz', matriz);
// matriz[0].sort();
// console.log('matriz[0]', matriz[0]);

//Reto 6

// let persona = {
// nombre: 'Nico',
// edad: 6,
// esVaron: true,
// aficiones: ['futbol', 'baloncesto', 'tenis'],
// dni: {
// numero: 12345678,
// fechaDeExpedicion: '10/01/2018',
// }
// }
// console.log(persona.nombre);
// console.log(persona.aficiones);
// console.log(persona.aficiones[1]);
// console.log(persona.dni);
// console.log(persona.dni.fechaDeExpedicion);
// persona.dni.fechaDeExpedicion = '10/01/2019';
// console.log(persona.dni.fechaDeExpedicion);
// persona.aficiones.splice(1, 1);
// console.log(persona.aficiones);
// persona.aficiones.push('padel');
// console.log(persona.aficiones);
// 
// //Reto 7

// let direccion = {
//     calle: 'Calle Mayor',
//     numero: 12,
//     piso: 3,
//     puerta: 'derecha',
// }
// let direccion2 = direccion;
// let direccion3 = {...direccion};
// direccion2.ciudad = 'A Coruña';
// console.log(direccion);
// console.log(direccion2);
// console.log(direccion3);
// // direccion2 y direccion uno hacen referencia al mismo punto en la memoria, al añadirle la propiedad ciudad, se añade tambien a direccion
// // en el caso de direccion3, al hacer una copia de direccion, no se añade la propiedad ciudad a direccion3
// // por que crea un valor nuevo en un espacio en la memoria

// let arrayDeNombres = ['Nico', 'Adri', 'Jose', 'Mounir', 'Sergio'];
// let arrayDeNombres2 = arrayDeNombres;
// let arrayDeNombres3 = [...arrayDeNombres];
// arrayDeNombres.push('Pepe');
// console.log(arrayDeNombres);
// console.log(arrayDeNombres2);
// console.log(arrayDeNombres3);
// // arrayDeNombres2 y arrayDeNombres hacen referencia al mismo punto en la memoria, al añadirle un nuevo nombre a arrayDeNombres, se añade tambien a arrayDeNombres2
// // en el caso de arrayDeNombres3, al hacer una copia de arrayDeNombres, no se añade el nuevo nombre a arrayDeNombres3
// // por que crea un valor nuevo en un espacio en la memoria

// direccion3.pais = 'Galicia';
// direccion4 = {...direccion,...direccion3};
// console.log(direccion4);

// // Reto 8

let Familia = {
  nombre: 'Nico',
  apellidos: ['Zarza', 'Garcia'],
  edad: 6,
  padres: [
    {
      nombre: 'Ivan',
      apellidos: ['Zarza', 'Estevez'],
      edad: 45,
      padres: [
        {
          nombre: 'Jose',
          apellidos: ['Zarza', 'Estebans'],
          edad: 70,
        },
        {
          nombre: 'Maria',
          apellidos: ['Estevez', 'Garcia'],
          edad: 71,
        }
      ]
    },
    {
      nombre: 'Iria',
      apellidos: ['Estevez', 'Garcia'],
      edad: 43,
      padres: [{
        nombre: 'Juan',
        apellidos: ['Estevez', 'Garcia'],
        edad: 72,
      },
      {
        nombre: 'Ana',
        apellidos: ['Garcia', 'Garcia'],
        edad: 73,
      }]}]}

console.log(Familia.padres[1].padres[0].nombre);
console.log(Familia.padres[0].padres[0].apellidos[1]);
console.log(Familia.padres[1].edad + Familia.padres[0].padres[0].edad);
Familia.padres[0].padres[0].edad = Familia.padres[0].padres[1].edad;
console.log(Familia.padres[0].padres[1].edad);
Familia.padres[1].padres[1].apellidos.push(Familia.padres[0].padres[0].apellidos[1]);
console.log(Familia.padres[1].padres[1].apellidos);
Familia.padres[1].apellidos.splice(0, 1);
console.log(Familia.padres[0].padres[0].apellidos[1].slice(-1));
console.log(Familia);

// Reto 9

console.log(Familia.padres[1].padres[1].apellidos[1].includes('Martinez'));
console.log(Familia.padres[0].padres[0].apellidos.includes('Perez'));
Familia.padres[1].padres[1].apellidos[1] = Familia.padres[1].padres[1].apellidos[1].replace(/r/g, 'z')
console.log(Familia.padres[1].padres[1].apellidos[1]);


