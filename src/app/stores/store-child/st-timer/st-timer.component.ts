import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-st-timer',
  templateUrl: './st-timer.component.html',
  styleUrls: ['./st-timer.component.css']
})
export class StTimerComponent {

  @Input() endDate: any;

  day= 0;
  hour= 0;
  min= 0;
  sec= 0;

  x = setInterval(() => {
    var endDate: any = new Date(this.endDate);
    var today: any = new Date();
    var distance = endDate - today;
    this.day = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hour = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    this.min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    this.sec = Math.floor(distance % (1000 * 60) / (1000));
    if (distance < 0){
      clearInterval(this.x);
    }
  }, 1000)
}
