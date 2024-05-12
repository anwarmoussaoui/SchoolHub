import { CoursComponent } from './cours/cours.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { TeacherComponent } from './teacher.component';
import { EtudiantEditComponent } from './etudiant/etudiant.edit.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [
  {path:'',component:TeacherComponent,
  children: [
   
    {
      path: ':teacher_id',
      loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule)
    },
    {
      path: 'list/:etudiant', component : EtudiantComponent
    },
    {
      path: 'edit/:etudiant_id', component : EtudiantEditComponent
    },
    
  ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
