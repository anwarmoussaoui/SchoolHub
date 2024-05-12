import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";import { Observable } from "rxjs";
;

@Injectable({
    providedIn: 'root'
  })
  export class TeacherService{
    private baseUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) {
}
getList():Observable<any[]>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this.http.get<any[]>(`${this.baseUrl}/students`);
}
getGroup():Observable<any[]>{
  
  return this.http.get<any[]>(`${this.baseUrl}/cours`);
}
//still not finished
saveNote(id:number,note:any): Observable<any> {

  return this.http.put(`${this.baseUrl}/students/${id}`,note);
}
getstudent(id:any):Observable<any[]>{
  
  return this.http.get<any[]>(`${this.baseUrl}/students/${id}`);
}
  }