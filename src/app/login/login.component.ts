import { LoginService } from './login.service';
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formAuthentication = new FormGroup({
    emailUsername : new FormControl(''),
    password :new FormControl('')
  });
  
  

  constructor(
              private router: Router,
              private formBuilder: FormBuilder,
            private loginService :LoginService) {
  }

  ngOnInit(): void {
  }
  data : any
  onConnect(): void {
    // Handle the connect logic here
    const username = this.formAuthentication.value.emailUsername
    const password = this.formAuthentication.value.password;
    
    this.loginService.login({username, password}).subscribe(
     result => {
console.log(result);
       
        
     }
    );
    if(username==="teacher"){
      this.router.navigate(["teacher",1]);
    }else if(username=="admin"){
      this.router.navigate(["admin"]);

    }else if(username=="student"){
      this.router.navigate(["student",1]);
    }
    
  }


}
