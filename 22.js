// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let number2 = parseInt(prompt('Enter a number: '));

while(number2 >= 0) {

    // add all positive numbers
    sum += number2;

    // take input again if the number is positive
    number2 = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);