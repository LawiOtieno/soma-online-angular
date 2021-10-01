import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBook(): Observable<any>{

    const url="https://soma-online.herokuapp.com/books"
    
    return this.http.get<any>(url)
 
   }
}
