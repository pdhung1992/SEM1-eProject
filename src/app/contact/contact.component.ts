import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

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
    if(this.contactForm.invalid){
      alert('Please fully enter all field: Name, E-mail and Message!')
    }
  }
}
