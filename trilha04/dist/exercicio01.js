"use strict";
//exercicio 1
// Crie uma interface chamada Produto que tenha as propriedades id (número), nome (string) e preco (número).
// Em seguida, crie uma classe ItemLoja que implemente essa interface.
// No construtor da classe, atribua valores às propriedades id, nome e preco.
class ItemLoja {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}
const item1 = new ItemLoja(1, 'Camiseta', 39.99);
console.log(item1);
