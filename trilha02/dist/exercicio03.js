"use strict";
// Exercício 3:
// Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). 
// Adicione um método para calcular o valor total em estoque (preço * quantidade).
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularValorTotalEmEstoque() {
        return this.preco * this.quantidade;
    }
}
const produto = new Produto("Notebook", 3500, 10);
console.log(`Valor total em estoque: R$ ${produto.calcularValorTotalEmEstoque().toFixed(2)}`);
