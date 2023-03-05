import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {

  submited: boolean = false;

  trackForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  ngOnInit(){
  }
  onTrack(){
    this.submited = true;
    if(this.trackForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fully enter your Order ID and E-mail!',
      })
    }
  }
}
