"use strict";
// exercicio 3
// Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.
// Implemente a validação e o envio de email na mesma classe.
// Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
class ContactValidator {
    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }
}
class EmailSender {
    constructor(contactValidator) {
        this.contactValidator = contactValidator;
    }
    sendEmail(email, message) {
        if (this.contactValidator.validateEmail(email)) {
            console.log(`Enviando e-mail para ${email}: ${message}`);
        }
        else {
            console.log(`E-mail inválido: ${email}`);
        }
    }
}
const contactValidator = new ContactValidator();
const emailSender = new EmailSender(contactValidator);
emailSender.sendEmail('joao@yahoo.com', 'Olá João, seu pedido foi enviado!');
emailSender.sendEmail('gabriel.com', 'Olá João, seu pedido foi enviado!');
