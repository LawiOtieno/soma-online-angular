import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  getUser(): Observable<any>{

   const url="https://soma-online.herokuapp.com/users"
   
   return this.http.get<any>(url)

  }
}
