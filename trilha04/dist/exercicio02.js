"use strict";
// exercicio 2
// Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string).
// Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".
class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}
const meuTexto = new Texto('Hello World', 'Fazendo um Hello World diferente :P');
console.log(meuTexto.exibir());
