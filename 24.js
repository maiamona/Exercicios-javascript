// program for a simple calculator
let result2;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number3 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result2 = number1 + number3;
        console.log(`${number1} + ${number3} = ${result2}`);
        break;
    case '-':
        result2 = number1 - number3;
        console.log(`${number1} - ${number3} = ${result2}`);
        break;
    case '*':
        result2 = number1 * number3;
        console.log(`${number1} * ${number3} = ${result2}`);
        break;
    case '/':
        result2 = number1 / number3;
        console.log(`${number1} / ${number3} = ${result2}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}