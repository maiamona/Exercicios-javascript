

// // constructor function
// function EnderecoCliente (rua, bairro, cidade, estado) {
//     this.rua = rua,
//     this.bairro = bairro,
//     this.cidade = cidade,
//     this.estado = estado
// }

// // create an object
// const endereco = new EnderecoCliente('saviana ribeiro', 'popular', 'luanda', 'angolano');


class EnderecoCliente{
    constructor(rua, bairro, cidade, estado) {
            this.rua = rua,
            this.bairro = bairro,
            this.cidade = cidade,
            this.estado = estado
        }

        set novaRua (novaRua2) {
            this.rua = novaRua2;
        }
        set novoBairo (novoBairo2) {
            this.bairro = novoBairo2;
        }
        set novaCidade (novaCidade2) {
            this.cidade = novaCidade2;
        }
        set novoEstado (novoEstado2) {
            this.estado = novoEstado2;
        }
}

 // create an object
let endereco = new EnderecoCliente('Saviana Ribeiro', 'Popular', 'Luanda', 'Angolano');

console.log(endereco);

endereco.novaRua = 'Rua 88';

console.log(endereco);

endereco.novaCidade = 'Lubango';

console.log(endereco);