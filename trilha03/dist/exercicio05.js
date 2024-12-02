"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    calcularSalarioComBonus() {
        return this.salario + this.calcularBonus();
    }
    getNome() {
        return this.nome;
    }
    getSalario() {
        return this.salario;
    }
}
class Gerente extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
    }
    calcularBonus() {
        return this.getSalario() * 0.10;
    }
}
class Operario extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
    }
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalariosComBonus(funcionarios) {
    funcionarios.forEach(funcionario => {
        console.log(`${funcionario.getNome()}: Salário com bônus é R$ ${funcionario.calcularSalarioComBonus().toFixed(2)}`);
    });
}
const gerente = new Gerente('Carlos', 5000);
const operario = new Operario('João', 3000);
const funcionarios = [gerente, operario];
calcularSalariosComBonus(funcionarios);
