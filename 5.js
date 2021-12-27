// let num = 0;

// while (num <= 10) {
//     console.log(num);
//     num++;
// }


// for (let i = 100; i >= 50; i--) {
//     console.log(i);
    
// }



// for (let i = 0; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(`o numero ${i} é Par`);
//     } else {
//         console.log(`o numero ${i} é Impar`);   
//     }
    
// }




let num = 17;
let divisoes = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
       divisoes++; 
    }
    
}

if (divisoes == 2) {
    console.log(`o numero ${num} é Primo`);
} else {
    console.log(`o numero ${num} não é Primo`);
}



function primeNumbers(num) {
    let numbers = new Array();
    for (var i = 0; i <= num; i++) {
      if (isPrime(i)){
        numbers.push(i);
      }
    }
    return numbers;
  }

  function isPrime(num) {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;
  }
  
  console.log(primeNumbers(num));