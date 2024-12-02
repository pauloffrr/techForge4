"use strict";
// Exercício 4:
// Crie uma classe Temperatura com um atributo valor (number em Celsius). 
// Adicione métodos para converter o valor para Fahrenheit e Kelvin.
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    // fazendo a conversão para fahrenheit
    paraFahrenheit() {
        return (this.valor * 9) / 5 + 32;
    }
    // fazendo conversão para kelvin
    paraKelvin() {
        return this.valor + 273.15;
    }
}
const temp = new Temperatura(25); // 25°C
console.log(`Temperatura em Celsius: ${temp.valor}°C`);
console.log(`Temperatura em Fahrenheit: ${temp.paraFahrenheit()}°F`);
console.log(`Temperatura em Kelvin: ${temp.paraKelvin()}K`);
