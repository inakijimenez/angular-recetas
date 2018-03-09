import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT = 'http://localhost:3000';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) {
    console.log('TodosService constructor');
  }

  getTodos(): Observable<any> {
    let url = END_POINT + '/todos?userId=2';
    console.log(`TodosService getTodos ${url}`);

    return this.http.get(url);
  }

  nuevoTodo (todo){
    let url = END_POINT + '/todos/';
    console.log(todo);
    this.http.post(url, todo);
  }
}
