"use strict";
// exercicio 4
// Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
//Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
// Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true.
class Biblioteca {
    obterLivrosDisponiveisOrdenados() {
        throw new Error("Method not implemented.");
    }
    buscarPorAutor(arg0) {
        throw new Error("Method not implemented.");
    }
    filtrarPorGenero(arg0) {
        throw new Error("Method not implemented.");
    }
    constructor(livros) {
        this.livros = livros;
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
}
const livro1 = { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', disponivel: true };
const livro2 = { titulo: 'Harry Potter', autor: 'J.K Rowling', disponivel: false };
const livro3 = { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', disponivel: true };
const biblioteca = new Biblioteca([livro1, livro2, livro3]);
const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log(livrosDisponiveis);
