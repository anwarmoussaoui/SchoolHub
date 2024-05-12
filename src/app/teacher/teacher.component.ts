import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'teacher',
  templateUrl :'teacher.component.html',
  styleUrl:'teacher.component.css'
})
export class TeacherComponent {
logOut() {
throw new Error('Method not implemented.');
}
course() {
    this.router.navigate(['teacher'])
}
student() {
    this.router.navigate(['teacher'])
}
    constructor(
        //private loginService: LoginService,
                  private router: Router,
                  ) {
      }
logout() {
this.router.navigate(['/'])
}
  title = 'SchoolHub';
}
