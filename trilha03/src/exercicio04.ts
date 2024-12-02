// exercicio 4
// Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. 
// Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). 
// Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.

abstract class Animal {
    private energia: number;
  
    constructor(energiaInicial: number) {
      this.energia = energiaInicial;
    }
  
    abstract comer(): void;
  
    statusEnergia(): void {
      console.log(`Nível de energia: ${this.energia}`);
    }
  
    protected getEnergia(): number {
      return this.energia;
    }
  
    protected setEnergia(novaEnergia: number): void {
      this.energia = novaEnergia;
    }
  }
  
  class Leao extends Animal {
    constructor(energiaInicial: number) {
      super(energiaInicial);
    }
  
    comer(): void {
      console.log('Leão está caçando...');
      this.setEnergia(this.getEnergia() - 10);  
      console.log('Caça concluída.');
      this.setEnergia(this.getEnergia() + 20);  
      console.log('Leão recuperou energia após caçar.');
    }
  }
  
  class Passaro extends Animal {
    constructor(energiaInicial: number) {
      super(energiaInicial);
    }
  
    comer(): void {
      console.log('Pássaro está se alimentando...');
      this.setEnergia(this.getEnergia() + 10);  
      console.log('Pássaro se alimentou e recuperou energia.');
    }
  }
  const leao = new Leao(50);  
const passaro = new Passaro(30);  

leao.statusEnergia();  
passaro.statusEnergia();  

leao.comer();  
passaro.comer();  

leao.statusEnergia();  
passaro.statusEnergia();  
