// exercicio 4
// Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
//Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
// Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true.

interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
  }
  class Biblioteca {
    obterLivrosDisponiveisOrdenados(): any {
        throw new Error("Method not implemented.");
    }
    buscarPorAutor(arg0: string): any {
        throw new Error("Method not implemented.");
    }
    filtrarPorGenero(arg0: string): any {
        throw new Error("Method not implemented.");
    }
    livros: Livro[];
  
    constructor(livros: Livro[]) {
      this.livros = livros;
    }
  
    buscarLivrosDisponiveis(): Livro[] {
      return this.livros.filter(livro => livro.disponivel);
    }
  }
  const livro1: Livro = { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', disponivel: true };
  const livro2: Livro = { titulo: 'Harry Potter', autor: 'J.K Rowling', disponivel: false };
  const livro3: Livro = { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', disponivel: true };
  
  const biblioteca = new Biblioteca([livro1, livro2, livro3]);
  
  const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
  console.log(livrosDisponiveis);
      