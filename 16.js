class CarrinhoDeCompras{
    constructor(itens, qtd, valorTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }
    adicionarItens(item){
let contador = 0;

       for(let itemCarrinho in this.itens){
if (this.itens[itemCarrinho].id == item.id) {
    this.itens[itemCarrinho].qtd += item.qtd;
    contador = 1;
}
       }
if (contador == 0) {
    this.itens.push(item)
}

       this.qtd += item.qtd;
       this.valorTotal += item.preco * item.qtd;
    }
    removerItens(item){
        for(let itemCarrinho in this.itens){
            if (this.itens[itemCarrinho].id == item.id) {
              let obj = this.itens[itemCarrinho];
              let index = this.itens.findIndex(function (obj) {return obj.id == item.id});
              
              this.qtd -= obj.qtd;
              this.valorTotal -= obj.preco * obj.qtd;

              this.itens.splice(index, 1);

             
            }
                   }
    }
    
}

// let compra = new CarrinhoDeCompras('Bananas', 500, 100);



// console.log(compra.adicionarItens(50));
// console.log(compra.removerItens(100));

let carrinho = new CarrinhoDeCompras([
    {
        id: 01,
        nome: "camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);

console.log(carrinho);

carrinho.adicionarItens({id:01, nome: "camisa", qtd:2, preco: 20});

console.log(carrinho);

carrinho.adicionarItens({id:03, nome: "bone", qtd:1, preco: 15});

console.log(carrinho);

carrinho.removerItens({id:01, nome: "camisa", qtd:2, preco: 20});

console.log(carrinho);