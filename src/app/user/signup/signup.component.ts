import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  submited: boolean = false;

  signUpForm: FormGroup =  new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repasword: new FormControl('', Validators.required),
    checkbox: new FormControl(false, Validators.requiredTrue)
  });
  ngOnInit(){
  }
  get f(){
    return this.signUpForm.controls;
  }
  onSignup(){
    this.submited = true;

    if(this.signUpForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fully enter your Username and Password!',
      })
    }
  }
}
