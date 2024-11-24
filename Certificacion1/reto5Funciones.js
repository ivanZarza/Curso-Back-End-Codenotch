
function saludar(nombre = 'mundo') {
    console.log(`Hola ${nombre}`);
}

saludar();
saludar('Nico');

let numAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1));
}

let num = numAleatorio(1, 10);

console.log(num);

function numeroPar(num) {
    if (num % 2 === 0) {
        console.log('Es par');;
    } else {
        console.log('Es impar');
    }
}

numeroPar(684);

function reverso(string) {
    return string.split('').reverse().join('');
}

console.log(reverso('hola mundo'))

function revertirOrdenPalabras(frase) {
    return frase.split(' ').reverse().join(' ');
}

console.log(revertirOrdenPalabras('hola mundo'))

