import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submited: boolean = false;

  loginForm: FormGroup =  new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  ngOnInit(){
  }
  get f(){
    return this.loginForm.controls;
  }
  onLogin(){
    this.submited = true;
    if(this.loginForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fully enter your Username and Password!',
      })
    }
  }
}
