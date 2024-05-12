import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { CoursComponent } from './cours/cours.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { TeacherComponent } from './teacher.component';


@NgModule({
  declarations: [CoursComponent
    ,EtudiantComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
