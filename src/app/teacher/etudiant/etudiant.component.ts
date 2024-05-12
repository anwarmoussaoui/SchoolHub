import { TeacherService } from './../teacher.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'etudiant',
  templateUrl :'etudiant.component.html'
})

export class EtudiantComponent implements OnInit {
edit(id:number) {
  this.router.navigate(['teacher/edit',id])
;
}
 id=this.route.snapshot.params[':teacher_id'];
  subject=this.route.snapshot.params['subject'] ;
  studentss:any ;
   constructor(private route: ActivatedRoute,
    private router: Router,
    private teacherservice:TeacherService
   ) {
    this.studentss = this.route.snapshot.params['students']; // For route parameters
    // Or use this.route.snapshot.queryParams.value for query parameters
    // Or this.route.snapshot.state.value for route state
  }
  ngOnInit(): void {
    
    
    this.teacherservice.getList().subscribe((data) => {
      this.studentss = data;
      console.log(data);
      })
  }
// In your component file, define an array of student objects


}
