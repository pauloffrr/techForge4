// exercicio 02
// Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). 
// Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. 
// Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.

abstract class FiguraGeometrica {
    abstract calcularArea(): number;
  }
  
  class Circulo extends FiguraGeometrica {
    raio: number;
  
    constructor(raio: number) {
      super();
      this.raio = raio;
    }
  
    calcularArea(): number {
      return Math.PI * Math.pow(this.raio, 2);
    }
  }
  
  class Quadrado extends FiguraGeometrica {
    lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    // Implementação do método calcularArea para o quadrado
    calcularArea(): number {
      return Math.pow(this.lado, 2);
    }
  }
  
  class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
  }
  function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura, index) => {
      console.log(`Área da figura ${index + 1}: ${figura.calcularArea()}`);
    });
  }
  const circulo = new Circulo(5);  
    const quadrado = new Quadrado(4);  
    const triangulo = new Triangulo(6, 3);  

    const figuras: FiguraGeometrica[] = [circulo, quadrado, triangulo];

    imprimirAreas(figuras);  