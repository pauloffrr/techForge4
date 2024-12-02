"use strict";
// Exercício 1:
// Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). 
// Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
class ContaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`);
        }
        else {
            console.log("Valor de depósito inválido, tente novamente.");
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso. Novo saldo é de: R$${this.saldo}`);
        }
        else if (valor > this.saldo) {
            console.log("Saldo insuficiente para o saque.");
        }
        else {
            console.log("Valor de saque inválido.");
        }
    }
    consultarSaldo() {
        console.log(`O saldo atual de ${this.titular} é R$${this.saldo}`);
    }
}
const conta = new ContaBancaria("João", 1000);
conta.consultarSaldo();
conta.depositar(500);
conta.sacar(200);
conta.consultarSaldo();
