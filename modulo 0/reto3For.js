let array1 = []
console.log('array1:',array1);

for (let i = 0; i < 10; i++) {
    array1.push(Math.random() * 101);
}

console.log('array1:',array1);

let array2 = [];

for (let i = 0; i < 10; i++) {
    array2.push(Math.floor(Math.random() * 101));
}

console.log('array2:',array2);