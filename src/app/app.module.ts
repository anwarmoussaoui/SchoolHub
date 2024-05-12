import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantEditComponent } from './teacher/etudiant/etudiant.edit.component';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,TeacherComponent,StudentComponent,AdminComponent,
    SidebarComponent,HeaderComponent,EtudiantEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
