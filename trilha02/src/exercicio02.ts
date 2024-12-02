// Exercício 2
// Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). 
// Adicione um método para marcar o livro como lido.

class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;
  
    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
      this.lido = lido;
    }
  
    marcarComoLido(): void {
      this.lido = true;
      console.log(`O livro "${this.titulo}" do(a) autor(a) "${this.autor}" de "${this.paginas}" páginas foi marcado como lido.`);
    }
  }
  
  const meuLivro = new Livro("Harry Potter", "J. K Rowling", 984);
  console.log(meuLivro.lido);
  meuLivro.marcarComoLido();
  console.log(meuLivro.lido); 
  