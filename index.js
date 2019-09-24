class TodoManager {

    constructor(todos) {
        this.todos = todos;
    }

    getCompleted() {
        return this.todos.filter((todo) => todo.is_completed);
    }

    getPending() {
        return this.todos.filter((todo) => !todo.is_completed);
    }

    getFirst() {
        return this.todos[0];
    }

    getLast() {
        return this.todos[this.todos.length - 1];
    }

    getCount() {
        return this.todos.length;
    }

    markAsCompleted(todoTitle) {
        // Using {title} instead of todo in callback because you can destruct objects
        let todoItem = this.todos.find(({title}) => title === todoTitle);
        todoItem.is_completed = true;
    }
}


//sample usage
const initialTodos = [{
    title: "Learn JavaScript",
    is_completed: true
}, {
    title: "Practice flashcards",
    is_completed: false
}];
const todoManager = new TodoManager(initialTodos);

/* console.log(todoManager.getCompleted()); //returns completed todos
console.log(todoManager.getPending()); //returns todos that are not completed
console.log(todoManager.getFirst());
console.log(todoManager.getLast());
console.log(todoManager.getCount());
todoManager.markAsCompleted("Practice flashcards"); //receives a title, finds todo with that title and marks it as completed
todoManager.add({
    title: "Recap flashcards",
    is_completed: true
});
//when is_completed is not defined, it should default to false
todoManager.add({
    title: "Get some rest"
});
console.log(todoManager.allCompleted()); //returns true when all todo items are completed
console.log(todoManager.allPending()); //returns true when all todo items are pending
console.log(todoManager.exportCsv()); //returns Comma Separated Values of titles "Todo title, Another todo title" */


todoManager.markAsCompleted("Practice flashcards");
