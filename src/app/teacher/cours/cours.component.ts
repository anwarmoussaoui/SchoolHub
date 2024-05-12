import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'cours',
  templateUrl: './cours.component.html',
  styleUrl :'./cours.component.css'
})
export class CoursComponent implements OnInit {
  groups: any[] = [
  ];
   id:number=0;
etud_list(id:number) {
  this.id=this.route.snapshot.params[':teacher_id']
  this.router.navigate(['teacher/list',id])
}
    constructor(
        private teacherservice:TeacherService,
                  private router: Router,
                  private route:ActivatedRoute
                  ) {
      }
  ngOnInit(): void {
    this.id=this.route.snapshot.params[':teacher_id']
    this.teacherservice.getGroup().subscribe((data) => {
      console.log(data)
      this.groups = data;
      })
  }
logout() {
this.router.navigate(['/'])
}
  title = 'SchoolHub';
}
