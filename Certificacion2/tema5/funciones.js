const sum = '+';
const subs = '-';
const mult = '*';
const div = '/';


function calculadora(operacion, num1, num2 = 0) {
  let resultado = 0;
  switch (operacion) {
    case '+':
      resultado = num1 + num2;
      console.log('La suma de los numeros es:', resultado);
      break;
    case '-':
      resultado = num1 - num2;
      console.log('La resta de los numeros es:', resultado);
      break;
    case '*':
      resultado = num1 * num2;
      console.log('La multiplicacion de los numeros es:', resultado);
      break;
    case '/':
      resultado = num1 / num2;
      console.log('La division de los numeros es:', resultado);
      break;
    default:
      console.log('Operacion no valida');
      break;
  }
  return resultado;
}

console.log(calculadora(sum, 8, 11));
console.log(calculadora(subs, 8, 11));
console.log(calculadora(mult, 8, 11));
console.log(calculadora(div, 8, 11));

const calcuArrow = (operacion, num1, num2 = 0) => {
  let resultado = 0;
  switch (operacion) {
    case '+':
      resultado = num1 + num2;
      console.log('La suma de los numeros es:', resultado);
      break;
    case '-':
      resultado = num1 - num2;
      console.log('La resta de los numeros es:', resultado);
      break;
    case '*':
      resultado = num1 * num2;
      console.log('La multiplicacion de los numeros es:', resultado);
      break;
    case '/':
      resultado = num1 / num2;
      console.log('La division de los numeros es:', resultado);
      break;
    default:
      console.log('Operacion no valida');
      break;
  }
  return resultado;
}

let arrayParametros = [sum, 8, 11];
console.log('CALCUARROW',calcuArrow(...arrayParametros));