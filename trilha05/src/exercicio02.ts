// ex 2
// Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript
// Crie duas subclasses WarehouseInventory e StoreInventory.
// WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
// StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
// Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.

abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
  
    abstract removeItem(item: string): void;
  
    abstract getInventory(): Record<string, number>;
  }
  
  class WarehouseInventory extends Inventory {
    private inventory: Record<string, number>;
  
    constructor() {
      super();
      this.inventory = {};
    }
  
    addItem(item: string, quantity: number): void {
      if (this.inventory[item]) {
        this.inventory[item] += quantity;
      } else {
        this.inventory[item] = quantity;
      }
      console.log(`Adicionado ${quantity} unidade(s) de ${item}.`);
    }
  
    removeItem(item: string): void {
      if (this.inventory[item]) {
        delete this.inventory[item];
        console.log(`Item ${item} removido.`);
      } else {
        console.log(`Item ${item} não encontrado.`);
      }
    }
  
    getInventory(): Record<string, number> {
      return this.inventory;
    }
  }
  
  class StoreInventory extends Inventory {
    private inventory: Record<string, number>;
  
    constructor() {
      super();
      this.inventory = {};
    }
  
    addItem(item: string, quantity: number): void {
      if (this.inventory[item]) {
        const newQuantity = this.inventory[item] + quantity;
        if (newQuantity <= 10) {
          this.inventory[item] = newQuantity;
          console.log(`Adicionado ${quantity} unidade(s) de ${item}.`);
        } else {
          console.log(`Não é possível adicionar mais de 10 unidades de ${item}.`);
        }
      } else {
        if (quantity <= 10) {
          this.inventory[item] = quantity;
          console.log(`Adicionado ${quantity} unidade(s) de ${item}.`);
        } else {
          console.log(`Não é possível adicionar mais de 10 unidades de ${item}.`);
        }
      }
    }
  
    removeItem(item: string): void {
      if (this.inventory[item]) {
        delete this.inventory[item];
        console.log(`Item ${item} removido.`);
      } else {
        console.log(`Item ${item} não encontrado.`);
      }
    }
  
    getInventory(): Record<string, number> {
      return this.inventory;
    }
  }
  
  
  const warehouse = new WarehouseInventory();
  warehouse.addItem('Item1', 50);
  warehouse.addItem('Item2', 30);
  warehouse.removeItem('Item1');
  console.log('Inventário do armazém:', warehouse.getInventory());
  
  const store = new StoreInventory();
  store.addItem('ProdutoA', 5);
  store.addItem('ProdutoB', 10);
  store.addItem('ProdutoB', 6); 
  store.removeItem('ProdutoA');
  console.log('Inventário da loja:', store.getInventory());
  