"use strict";
// exercicio 02
// Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). 
// Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. 
// Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    // Implementação do método calcularArea para o quadrado
    calcularArea() {
        return Math.pow(this.lado, 2);
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach((figura, index) => {
        console.log(`Área da figura ${index + 1}: ${figura.calcularArea()}`);
    });
}
const circulo = new Circulo(5);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(6, 3);
const figuras = [circulo, quadrado, triangulo];
imprimirAreas(figuras);
