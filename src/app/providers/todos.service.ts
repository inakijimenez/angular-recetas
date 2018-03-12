import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todo';

const END_POINT = 'http://localhost:3000';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) {
    console.log('TodosService constructor');
  }

  getTodos(): Observable<any> {
    let url = END_POINT + '/todos/';
    console.log(`TodosService getTodos ${url}`);

    return this.http.get(url);
  }

  postTodo (todo: Todo): Observable<any>{
    let url = END_POINT + '/todos/';
    
    return this.http.post(url, todo);
  }

  deleteTodo(todo: Todo): Observable<any>{
    let url = END_POINT + '/todos/' + todo.id;

    return this.http.delete(url);
  }
}
