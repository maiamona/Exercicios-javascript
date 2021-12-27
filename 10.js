



// function numero(base, exp) {
//     console.log(Math.pow(base,exp));
//     // console.log(base ** exp);
// }

// numero(3,2);
// numero(2,2);
// numero(4,4);
// numero(5,2);

function pares(num) {
    for (let i = num; i > 0; i--) {
        if (i % 2 == 0) {
           console.log(`${i} => Par`); 
        }
        
    }
}

pares(10);