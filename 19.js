// saldoContaCorrente = saldoCC, saldoContaPoupanca = saldoCP

class ContaBancaria{
    constructor(saldoCC, saldoCP, juros){//juros em porcentagem
this.saldoCC = saldoCC;
this.saldoCP = saldoCP;
this.juros = juros;
    }

    deposito(valor){
        this.saldoCC += valor;
    }
    saque(valor){
        this.saldoCC -= valor;
    }

    transferenciaCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }
    transferenciaCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }

    jurosAniversario(){
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }
}

class CantaEspecial extends ContaBancaria{
    constructor(saldoCC, saldoCP, juros){
super(saldoCC, saldoCP, juros*2)
    }
}

let conta = new ContaBancaria(1000, 5000, 1);

console.log(conta);

conta.saque(500);

console.log(conta);

conta.deposito(5000);

console.log(conta);

conta.transferenciaCP(3000);// poupar

console.log(conta);

conta.jurosAniversario();

console.log(conta);

let conta2 = new CantaEspecial(10000, 50000, 1);

console.log(conta2);

conta2.saque(500);

console.log(conta2);

conta2.jurosAniversario();

console.log(conta2);