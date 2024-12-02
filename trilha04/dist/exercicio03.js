"use strict";
//exercicio 3
// Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string).
// Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja.
// Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, caso exista; caso contrário, retorne undefined
class Loja {
    constructor(produtos) {
        this.produtos = produtos;
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
const produto1 = { codigo: 101, nome: 'Camiseta' };
const produto2 = { codigo: 102, nome: 'Calça' };
const produto3 = { codigo: 103, nome: 'Tênis' };
const loja = new Loja([produto1, produto2, produto3]);
const produtoEncontrado = loja.buscarProdutoPorCodigo(102);
console.log(produtoEncontrado);
const produtoNaoEncontrado = loja.buscarProdutoPorCodigo(105);
console.log(produtoNaoEncontrado);
