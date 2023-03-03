import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
      alert('Please fully enter all field: Order ID and E-mail!');
    }
  }
}
