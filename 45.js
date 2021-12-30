// Symbol
class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let golden = new Cachorro('Golden Retrievel')


console.log(Cachorro.prototype[patas]);
console.log(golden[patas]);