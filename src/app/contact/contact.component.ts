import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  submited: boolean = false;

  contactForm: FormGroup =  new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    mess: new FormControl('',Validators.required)
  });
  ngOnInit(){
  }
  get f(){
    return this.contactForm.controls;
  }
  onContact(){
    this.submited = true;
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your message have been sent!',
    })
    if(this.contactForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fully enter your Name, E-mail and Message!',
      })
    }
  }
}
