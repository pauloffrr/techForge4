// exercicio 2
// Implemente uma classe UserManager que gerencie a criação de usuários e envie notificações por email.
// Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
// Em seguida, refatore para dividir a responsabilidade de envio de notificação em uma classe EmailNotification.

class EmailNotification {
    send(email: string): void {
      console.log(`Enviando notificação para o e-mail: ${email}`);
    }
  }
  
  class UserManager {
    users: { name: string; email: string }[] = [];
    emailNotification: EmailNotification;
  
    constructor(emailNotification: EmailNotification) {
      this.emailNotification = emailNotification; 
    }
  
    createUser(name: string, email: string): void {
      const user = { name, email };
      this.users.push(user);
      this.emailNotification.send(user.email); 
      console.log(`Usuário ${name} criado com sucesso.`);
    }
  
    listUsers(): void {
      console.log('Usuários criados:', this.users);
    }
  }
  
  const emailNotification = new EmailNotification();
  const userManager = new UserManager(emailNotification); 
  
  userManager.createUser('João', 'joao@gmail.com');
  userManager.createUser('Maria', 'maria@outlook.com');
  userManager.listUsers();
  