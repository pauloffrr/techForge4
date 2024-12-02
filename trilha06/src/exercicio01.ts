// ex 1
// Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.
// Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
// Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.

class Cart {
    items: { item: string; price: number }[] = [];
    totalPrice: number = 0;
  
    addItem(item: string, price: number): void {
      this.items.push({ item, price });
      this.calculateTotalPrice();
    }
  
    calculateTotalPrice(): void {
      this.totalPrice = this.items.reduce((total, currentItem) => total + currentItem.price, 0);
    }
  
    getTotalPrice(): number {
      return this.totalPrice;
    }
  
    getItems(): { item: string; price: number }[] {
      return this.items;
    }
  }
  class Payment {
    cart: Cart;
    status: string = "Pendente"; 
  
    constructor(cart: Cart) {
      this.cart = cart;
    }
  
    process(): void {
      if (this.cart.getTotalPrice() > 0) {
        this.status = "Pago";
        console.log("Pagamento processado com sucesso!");
      } else {
        console.log("O valor do pedido é zero, não é possível processar o pagamento.");
      }
    }
  
    getStatus(): string {
      return this.status;
    }
  }
  class Shipping {
    payment: Payment;
    status: string = "Não enviado"; 
  
    constructor(payment: Payment) {
      this.payment = payment;
    }
  
    shipOrder(): void {
      if (this.payment.getStatus() === "Pago") {
        this.status = "Enviado";
        console.log("Pedido enviado!");
      } else {
        console.log("O pagamento não foi realizado, não é possível enviar o pedido.");
      }
    }
  
    getStatus(): string {
      return this.status;
    }
  }
  class Order {
    cart: Cart;
    payment: Payment;
    shipping: Shipping;
  
    constructor() {
      this.cart = new Cart();
      this.payment = new Payment(this.cart);
      this.shipping = new Shipping(this.payment);
    }
  
    addItem(item: string, price: number): void {
      this.cart.addItem(item, price);
    }
  
    processPayment(): void {
      this.payment.process();
    }
  
    updateShippingStatus(): void {
      this.shipping.shipOrder();
    }
  
    displayOrderSummary(): void {
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
        