import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-store-child',
  templateUrl: './store-child.component.html',
  styleUrls: ['./store-child.component.css']
})
export class StoreChildComponent {

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
