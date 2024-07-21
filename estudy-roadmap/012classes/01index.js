class Pedido{
    constructor(data, itens, valor){
        this.data = data;
        this.itens = itens;
        this.valor = valor;
    }
}

let pedido1 = new Pedido(new Date(), ['pizza', 'refri'], 100);
console.log(pedido1);
console.log('Preço pedido:' + pedido1.valor);