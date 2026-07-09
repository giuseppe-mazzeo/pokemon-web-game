import { Inventario } from "./inventario.js";

export class Loja {
    constructor() {
        this.inventario = new Inventario();
        
        this.inventario.itens.pokeball  = 20;
        this.inventario.itens.greatball = 5;
        this.inventario.itens.ultraball = 0;
        this.inventario.itens.potion    = 10;
        this.inventario.itens.revive    = 3;

        this.preco = {
            pokeball:  100,
            greatball: 250,
            ultraball: 500,
            potion:    200,
            revive:    500
        };
        
    }

    comprar(item, jogador) {
        let itemRequisitado = this.inventario.itens[item];
        const itemRequisitadoPreco = this.preco[item];
        
        if (itemRequisitado === 0) {
            return `Lamentamos, mas infelizmente não temos mais o item ${item}.`;
        }

        if (jogador.dinheiro < itemRequisitadoPreco) {
            return `Está com o bolso furado? Falta-te dinheiro para comprar ${item}.`;
        }

        this.inventario.itens[item] = --itemRequisitado;
        jogador.dinheiro -= itemRequisitadoPreco;
        
        if (itemRequisitado === 0) {
            return `Que sorte a sua! Acabou de comprar a nossa última unidade de ${item}.`
        }
        return 'Compra feita com sucesso!'
    }
}