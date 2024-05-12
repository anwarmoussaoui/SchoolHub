import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'student',
  templateUrl:'student-component.html'
})
export class StudentComponent implements OnInit {
  // In your component file, define an array of objects using the any type
cours: any[] = [
  { courseName: 'Mathematics', teacherName: 'Mr. Smith' },
  { courseName: 'Science', teacherName: 'Ms. Johnson' },
  { courseName: 'History', teacherName: 'Mr. Thompson' },
  // Add more courses as needed
];

  id:number=0;
  
listDesCours() {
  this.router.navigate(['student'])
}
  constructor(
   private studentService: StudentService,
              private router: Router,
              private route: ActivatedRoute
              ) {
  }
  ngOnInit(): void {
    this.listdesCours();
    }
logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/'])
}
  listdesCours(){
    this.id=this.route.snapshot.params[':id']
    this.studentService.getCourse().subscribe((data) => {
      this.cours = data;
      })
      
  }
  }

