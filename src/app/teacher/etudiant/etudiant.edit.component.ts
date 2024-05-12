import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'etudiant',
  templateUrl :'etudiant.edit.html'
})

export class EtudiantEditComponent {
    student:any={};

noteEdit = new FormGroup({
  note : new FormControl('')
});
edit() { 
  this.studentss = this.route.snapshot.params['etudiant_id']; 
  this.teacherservice.getstudent(this.studentss).subscribe((data) => {
    console.log(data);
    const updatedStudent = {
      id: data[0].id,
      grade: this.noteEdit.value.note, // 
      firstName: data[0].firstName,
      lastName: data[0].lastName
    };
    this.student=updatedStudent
    console.log(this.student);
    })
      /*this.teacherservice.saveNote(this.studentss,this.student).subscribe(
    (response) => {
      console.log('Response:', response);
      
    },
    (error) => {
      console.error('Error:', error);
    }
  );*/
}
   studentss= this.route.snapshot.params['etudiant_id'];
   constructor(private route: ActivatedRoute,
    private teacherservice:TeacherService,
   ) {
  }
  yo(){

  }
   
}
