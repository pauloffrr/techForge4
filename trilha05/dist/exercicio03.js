"use strict";
// exercicio 3
// Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos abstratos addFavorite(item: string): void e getFavorites(): string[].
// Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
// MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método sort para arrays em JavaScript
// BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. 
class FavoriteManager {
}
class MoviesFavoriteManager extends FavoriteManager {
    constructor() {
        super();
        this.favorites = new Set();
    }
    addFavorite(item) {
        this.favorites.add(item);
        console.log(`Filme '${item}' adicionado aos favoritos.`);
    }
    getFavorites() {
        const sortedFavorites = Array.from(this.favorites).sort();
        return sortedFavorites;
    }
}
class BooksFavoriteManager extends FavoriteManager {
    constructor() {
        super();
        this.favorites = [];
    }
    addFavorite(item) {
        this.favorites.unshift(item);
        console.log(`Livro '${item}' adicionado aos favoritos.`);
    }
    getFavorites() {
        return this.favorites;
    }
}
const movieManager = new MoviesFavoriteManager();
movieManager.addFavorite('Inception');
movieManager.addFavorite('The Matrix');
movieManager.addFavorite('Interstellar');
movieManager.addFavorite('The Matrix');
console.log('Filmes favoritos:', movieManager.getFavorites());
const bookManager = new BooksFavoriteManager();
bookManager.addFavorite('1984');
bookManager.addFavorite('Brave New World');
bookManager.addFavorite('Fahrenheit 451');
bookManager.addFavorite('1984');
console.log('Livros favoritos:', bookManager.getFavorites());
