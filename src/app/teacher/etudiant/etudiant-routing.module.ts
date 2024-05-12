import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant.component';
import { EtudiantEditComponent } from './etudiant.edit.component';

const routes: Routes = [
  {
    path :'', component:EtudiantComponent,
  },
  {
    path :'edit/:etudiant_id', component:EtudiantEditComponent,
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
