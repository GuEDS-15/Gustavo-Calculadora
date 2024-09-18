const ask = require("readline-sync");

let input = ask.question('Digite o tipo de calculo (soma, subtracao, multiplicacao, divisao, mod): ');
let sabo
let op

let num1 = parseFloat(ask.question('digite o primeiro numero: '));
let num2 = parseFloat(ask.question('digite o segundo numero: '));




        switch (input) {
            case 'soma':
                sabo = num1 + num2;
                break;
            case 'subtracao':
                sabo = num1 - num2;
                break;
            case 'multiplicacao':
                sabo = num1 * num2;
                break;
            case 'divisao':
                if (num2 !== 0) {
                    sabo = num1 / num2;
                } else {
                    console.log('Divisão por zero não é permitida.');
                    return;
                }
                break;
            case 'mod':
                sabo = num1 % num2;
                break;
            default:
                console.log('Tipo de cálculo inválido.');
}

console.log(`Tipo é ${input} e o resultado do cálculo é ${sabo}.`);
