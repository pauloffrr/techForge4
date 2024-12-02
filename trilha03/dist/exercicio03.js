"use strict";
// exercicio 03
// Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). 
// A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.
class Pagamento {
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao, validade, cvv) {
        super();
        this.numeroCartao = numeroCartao;
        this.validade = validade;
        this.cvv = cvv;
    }
    processar() {
        if (this.validarCartao()) {
            console.log('Pagamento processado com cartão de crédito.');
        }
        else {
            console.log('Número do cartão inválido.');
        }
    }
    validarCartao() {
        return this.numeroCartao.length === 16;
    }
}
class PagamentoBoleto extends Pagamento {
    constructor(valor) {
        super();
        this.valor = valor;
    }
    processar() {
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`Pagamento processado via boleto. Código do boleto: ${codigoBoleto}`);
    }
    gerarCodigoBoleto() {
        return Math.random().toString(36).substring(2, 10).toUpperCase();
    }
}
