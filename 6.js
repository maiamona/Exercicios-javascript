// function novo() {
//     console.log("hello world");
// }

// novo();


// function pessoa(idade) {
//     console.log(`voce tem ${idade} anos.`);
// }

// pessoa(34);
// pessoa(4);
// pessoa(3);



// function soma(x,y) {
//     let res = x + y;
//     return res;
// }

// console.log(soma(3,4));



function aleatorio(max) {
    const rndInt = Math.floor(Math.random() * max) + 1;
    return rndInt;
}
 
console.log(aleatorio(10));