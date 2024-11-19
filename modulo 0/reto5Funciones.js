
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

