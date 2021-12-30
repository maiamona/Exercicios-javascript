// GETTER E SETTER
class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
    get verRaca(){//pucha os valores por meio dos GETTERS
        return `A raça é ${this.raca}`;
    }
    set novaRaca(value){//alteramos os valores por meio dos SETTERS
        this.raca = value;
    }
}

let golden2 = new Cachorro('Pastor Alemão');
console.log(golden2.raca);
console.log(golden2.verRaca);

golden2.novaRaca = 'Golden';
console.log(golden2.raca);
console.log(golden2.verRaca);

