import { Component, OnInit } from '@angular/core';
import { TodosService } from '../providers/todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  todosTachados: Todo[] = [];
  nuevoTitle : string;

  constructor(private todosService: TodosService) {
    console.log('TodosComponent constructor');

    this.todos = [];
    this.todosTachados = [];
    this.nuevoTitle='';
  }

  ngOnInit() {
    console.log('TodosComponent ngOnInit');

    this.todosService.getTodos().subscribe(
      resultado => {
        console.log('Peticion OK %o', resultado);
        this.mapeo(resultado);
      },//resultado

      error => {
        console.warn('Peticion incorrecta %o', error);
      }//error
    );//subscribe
  }

  /**
   * mete los datos del observable en el array
   * @param resultado los datos que vienen del json
   */
  mapeo(resultado: any) {
    let todo: Todo;

    resultado.forEach(el => {
      todo = new Todo(el.title);
      todo.id = el.id;
      todo.userId = el.userId;
      todo.completed = el.completed;

      this.todos.push(todo);
    });
  }

  /**
   * tacha los todos seleccionados metiendolos y sacandolos de un array que se compara en el html con indexof
   * @param i el indice del array
   */
  check(i) {
    console.log(`Click en ${this.todos[i].title}`);
    if (this.todosTachados.indexOf(this.todos[i]) == -1) {
      this.todosTachados.push(this.todos[i]);
    } else {
      this.todosTachados.forEach((el, index)=>{
        if(el.id===this.todos[i].id){
          this.todosTachados.splice(index, 1);
          return false; //break
        }
      });
    }
    //console.log('tachados' + this.todosTachados[0].title);
    console.log('dentro de tachados' + (this.todosTachados.indexOf(this.todos[i]) != -1));

  }

  /**
   * elimina elementos del array
   * @param i indice del array
   */
  eliminarTodo(i): void {
    this.todos.forEach((el, index) => {
      if (el.id === this.todos[i].id) {
        this.todos.splice(index, 1);
        return false; //break
      }
    }
    );//foreach
  }

  nuevoTodo () : void{
    console.log('titulo' + this.nuevoTitle);
    let nuevoTodo = new Todo(this.nuevoTitle);
    this.todos.unshift(nuevoTodo);
    this.nuevoTitle=''; 
    
    this.todosService.nuevoTodo(nuevoTodo);
    
  }
}

