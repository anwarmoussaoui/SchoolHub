import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";import { Observable } from "rxjs";
;

@Injectable({
    providedIn: 'root'
  })
  export class StudentService{
 
    private baseUrl = 'http://localhost:3000/student';
    constructor(private http: HttpClient) {
    
}
      getCourse():Observable<any[]>{
          return this.http.get<any[]>(`${this.baseUrl}`);
      }
  }