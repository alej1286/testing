import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { 
    console.log("prueba");
  }

  getData() {
    return this.httpclient.get<Post[]>("http://jsonplaceholder.typicode.com/posts");
  }
}
