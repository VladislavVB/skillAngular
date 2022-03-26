import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string;
  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isComplited = true;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('Текст введи сучара');
    }
  }
  done(id: number) {
    this.todos[id].isComplited = !this.todos[id].isComplited;
  }
  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
