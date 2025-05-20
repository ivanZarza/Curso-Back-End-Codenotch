const colors = require('colors');
const date = new Date();
// // Reto 1
// let semaforo = 'verde';
// let pasanCoches = false;

// if (semaforo === 'verde' && pasanCoches === false) {
//   console.log('Cruzar la calle');
// } else if (semaforo === 'verde' && pasanCoches === true) {
//   console.log('Esperar a que pasen los coches');
// } else if (semaforo === 'ambar') {
//   console.log('Cruza con cuidado');
// } else if (semaforo === 'rojo') {
//   console.log('Espera');
// }

// let cruzarCalle = (semaforo === 'verde' && pasanCoches === false) ? 'Cruzar la calle' :
//   (semaforo === 'verde' && pasanCoches === true) ? 'Esperar a que pasen los coches' :
//     (semaforo === 'ambar') ? 'Cruza con cuidado' :
//       (semaforo === 'rojo') ? 'Espera' :
//         'No se puede cruzar';

// console.log(cruzarCalle);

// // Reto 2
// let ingrediente = 'pulpo';

// switch (ingrediente) {
//   case 'merluza':
//     console.log('Merluza al horno');
//     break;
//   case 'pollo':
//     console.log('Pollo al horno');
//     break;
//   case 'atun':
//     console.log('Marmitako');
//     break;
//   case 'ternera':
//     console.log('Hamburguesa');
//     break;
//   case 'macarrones':
//     console.log('Macarrones con tomate');
//     break;
//   case 'lechuga':
//     console.log('Ensalada');
//     break;
//   case 'pavo':
//     console.log('Dia de accion de gracias');
//     break;
//   case 'cerdo':
//     console.log('Churrasco');
//     break;
//   case 'percebes':
//     console.log('Percebes');
//     break;
//   case 'pulpo':
//     console.log('Pulpo a la gallega');
//     break;
//   default:
//     console.log('Imposible proponer receta');
// }

// // Reto 3
// let platos = 3;
// let dj = true;
// let horaBarraLibre = 1;
// let coctelBienvenida = false;

// if ((platos >= 3 && dj === true && horaBarraLibre >= 2) ||
//   (coctelBienvenida === true && platos >= 2 && horaBarraLibre >= 1)) {
//   console.log('El restaurantes es apto para la celebracion'.green);
// } else {
//   console.log('El restaurante NO es apto para la celebracion'.red);
// }

let personas = [
    persona1 =
    {
      nombre: 'Juan',
      apellido: 'Estevez',
      anyoNacimiento: 1980,
      aficiones: ['badminton', 'baloncesto', 'tenis'],
      dni: { anyoExpedicion: 1998, lugarNacimiento: 'A Coruña' },
      colorPelo: 'castaño',
    },
    persona2 ={
      nombre: 'Ana',
      apellido: 'Pena',
      anyoNacimiento: 1990,
      aficiones: ['rugby', 'dormir', 'leer'],
      dni: { anyoExpedicion: 2008, lugarNacimiento: 'Lugo' },
      colorPelo: 'rubio',
    },
    persona3 ={
      nombre: 'Maria',
      apellido: 'Juega',
      anyoNacimiento: 2000,
      aficiones: ['trabajar', 'rascarse', 'surfear'],
      dni: { anyoExpedicion: 2001, lugarNacimiento: 'Sevilla' },
      colorPelo: 'negro',
    },
    persona4 ={
      nombre: 'Pedro',
      apellido: 'Casquero',
      anyoNacimiento: 2010,
      aficiones: ['salir', 'correr', 'saltar'],
      dni: { anyoExpedicion: 2020, lugarNacimiento: 'Madrid' },
      colorPelo: 'pelirrojo',
    }
]

if (personas[0].colorPelo ==='castaño') {
  console.log(personas[0].nombre);
} 
if (personas[1].colorPelo ==='castaño') {
  console.log(personas[1].nombre);
} 
if (personas[2].colorPelo ==='castaño') {
  console.log(personas[2].nombre);
} 
if (personas[3].colorPelo ==='castaño') {
  console.log(personas[3].nombre);
} 
const anyoActual = date.getFullYear()
console.log(anyoActual);

if(anyoActual - personas[0].anyoNacimiento >= 30)
  console.log(anyoActual - personas[0].anyoNacimiento);

if(anyoActual - personas[1].anyoNacimiento >= 30)
  console.log(anyoActual - personas[1].anyoNacimiento);

if(anyoActual - personas[2].anyoNacimiento >= 30)
  console.log(anyoActual - personas[2].anyoNacimiento);

if(anyoActual - personas[3].anyoNacimiento >= 30)
  console.log(anyoActual - personas[3].anyoNacimiento);

if(personas[0].colorPelo === 'negro' && anyoActual - personas[0].dni.anyoExpedicion > 20 )
  console.log(personas[0].dni.lugarNacimiento);

if(personas[1].colorPelo === 'negro' && anyoActual - personas[1].dni.anyoExpedicion > 20 )
  console.log(personas[1].dni.lugarNacimiento);

if(personas[2].colorPelo === 'negro' && anyoActual - personas[2].dni.anyoExpedicion > 20 )
  console.log(personas[2].dni.lugarNacimiento);

if(personas[3].colorPelo === 'negro' && anyoActual - personas[3].dni.anyoExpedicion > 20 )
  console.log(personas[3].dni.lugarNacimiento);


