"use strict";
// exer 1
// Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].
// Crie duas subclasses: Project e DailyTasks.
// Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
// DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
// Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.
class TaskManager {
}
class Project extends TaskManager {
    constructor() {
        super();
        this.tasks = new Set();
    }
    addTask(task) {
        if (!this.tasks.has(task)) {
            this.tasks.add(task);
            console.log(`Tarefa '${task}' adicionada ao projeto.`);
        }
        else {
            console.log(`A tarefa '${task}' já existe no projeto.`);
        }
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
class DailyTasks extends TaskManager {
    constructor() {
        super();
        this.tasks = new Set();
    }
    addTask(task) {
        if (!this.tasks.has(task)) {
            this.tasks.add(task);
            console.log(`Tarefa diária '${task}' adicionada.`);
        }
        else {
            console.log(`A tarefa diária '${task}' já foi adicionada.`);
        }
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
const project = new Project();
project.addTask('Desenvolver o frontend');
project.addTask('Planejar reunião de equipe');
project.addTask('Desenvolver o frontend');
console.log('Tarefas do Projeto:');
console.log(project.listTasks());
const dailyTasks = new DailyTasks();
dailyTasks.addTask('Exercício');
dailyTasks.addTask('Estudar TypeScript');
dailyTasks.addTask('Exercício');
console.log('Tarefas Diárias:');
console.log(dailyTasks.listTasks());
