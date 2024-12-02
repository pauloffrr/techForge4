"use strict";
// ex 1
// Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.
// Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
// Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }
    addItem(item, price) {
        this.items.push({ item, price });
        this.calculateTotalPrice();
    }
    calculateTotalPrice() {
        this.totalPrice = this.items.reduce((total, currentItem) => total + currentItem.price, 0);
    }
    getTotalPrice() {
        return this.totalPrice;
    }
    getItems() {
        return this.items;
    }
}
class Payment {
    constructor(cart) {
        this.status = "Pendente";
        this.cart = cart;
    }
    process() {
        if (this.cart.getTotalPrice() > 0) {
            this.status = "Pago";
            console.log("Pagamento processado com sucesso!");
        }
        else {
            console.log("O valor do pedido é zero, não é possível processar o pagamento.");
        }
    }
    getStatus() {
        return this.status;
    }
}
class Shipping {
    constructor(payment) {
        this.status = "Não enviado";
        this.payment = payment;
    }
    shipOrder() {
        if (this.payment.getStatus() === "Pago") {
            this.status = "Enviado";
            console.log("Pedido enviado!");
        }
        else {
            console.log("O pagamento não foi realizado, não é possível enviar o pedido.");
        }
    }
    getStatus() {
        return this.status;
    }
}
class Order {
    constructor() {
        this.cart = new Cart();
        this.payment = new Payment(this.cart);
        this.shipping = new Shipping(this.payment);
    }
    addItem(item, price) {
        this.cart.addItem(item, price);
    }
    processPayment() {
        this.payment.process();
    }
    updateShippingStatus() {
        this.shipping.shipOrder();
    }
    displayOrderSummary() {
        console.log("Itens do pedido:", this.cart.getItems());
        console.log("Preço total:", this.cart.getTotalPrice());
        console.log("Status do pagamento:", this.payment.getStatus());
        console.log("Status do envio:", this.shipping.getStatus());
    }
}
const order = new Order();
order.addItem("Produto 1", 50);
order.addItem("Produto 2", 100);
order.processPayment();
order.updateShippingStatus();
order.displayOrderSummary();
