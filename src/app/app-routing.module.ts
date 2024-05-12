import { CoursComponent } from './teacher/cours/cours.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'', component :LoginComponent },
  {path:'student/:id', component :StudentComponent
  },
  {path:'teacher' 
    ,children: [
      {
        path: '',
        loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
      },
    ]
  },
  {path:'admin', component :AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
