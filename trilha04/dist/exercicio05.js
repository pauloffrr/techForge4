"use strict";
class BibliotecaGestao {
    constructor(livros) {
        this.livros = livros;
    }
    filtrarPorGenero(genero) {
        return this.livros.filter(book => book.genero.toLowerCase() === genero.toLowerCase());
    }
    buscarPorAutor(autor) {
        return this.livros.filter(book => book.autor.toLowerCase() === autor.toLowerCase());
    }
    obterLivrosDisponiveisOrdenados() {
        return this.livros.filter(book => book.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}
const book1 = { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true };
const book2 = { titulo: 'Bob Esponja', autor: 'Nickelodeon', genero: 'Infantil', disponivel: false };
const book3 = { titulo: 'John Wick', autor: 'Chad Stahelski', genero: 'Ação', disponivel: true };
const book4 = { titulo: 'Harry Potter', autor: 'J.K Rowling', genero: 'Fantasia', disponivel: true };
const bibliotecaa = new BibliotecaGestao([book1, book2, book3, book4]);
console.log('Livros do gênero Fantasia:');
console.log(bibliotecaa.filtrarPorGenero('Fantasia'));
console.log('Livros de JK Rowling:');
console.log(bibliotecaa.buscarPorAutor('J.K Rowling'));
console.log('Livros disponíveis ordenados:');
console.log(bibliotecaa.obterLivrosDisponiveisOrdenados());
