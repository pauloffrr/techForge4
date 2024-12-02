//exercicio 5
// Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
// Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.
// Implemente os seguintes métodos:
// filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.
// buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.
// obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.


interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
  }
  
  class BibliotecaGestao {
    livros: LivroBiblioteca[];
  
    constructor(livros: LivroBiblioteca[]) {
      this.livros = livros;
    }
  
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
      return this.livros.filter(book => book.genero.toLowerCase() === genero.toLowerCase());
    }
  
    buscarPorAutor(autor: string): LivroBiblioteca[] {
      return this.livros.filter(book => book.autor.toLowerCase() === autor.toLowerCase());
    }
  
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
      return this.livros.filter(book => book.disponivel)
                         .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
  }
  
  const book1: LivroBiblioteca = { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true };
  const book2: LivroBiblioteca = { titulo: 'Bob Esponja', autor: 'Nickelodeon', genero: 'Infantil', disponivel: false };
  const book3: LivroBiblioteca = { titulo: 'John Wick', autor: 'Chad Stahelski', genero: 'Ação', disponivel: true };
  const book4: LivroBiblioteca = { titulo: 'Harry Potter', autor: 'J.K Rowling', genero: 'Fantasia', disponivel: true };
  
  const bibliotecaa = new BibliotecaGestao([book1, book2, book3, book4]);
  
  console.log('Livros do gênero Fantasia:');
  console.log(bibliotecaa.filtrarPorGenero('Fantasia'));
  
  console.log('Livros de JK Rowling:');
  console.log(bibliotecaa.buscarPorAutor('J.K Rowling'));
  
  console.log('Livros disponíveis ordenados:');
  console.log(bibliotecaa.obterLivrosDisponiveisOrdenados());
  