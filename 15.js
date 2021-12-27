class ContaBanco {
    constructor(saldo) {
        this.saldo = saldo;
    }
deposito(valor){
    this.saldo += valor;
}
saque(valor){
    this.saldo -= valor;
}
}

let mona = new ContaBanco(20);
mona.deposito(20);

console.log(mona.saldo);

mona.saque(15);

console.log(mona.saldo);

