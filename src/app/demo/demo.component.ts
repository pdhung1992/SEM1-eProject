import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  ngOnInit(){
  }
  data: any;
  @Input() endDate: any;

}
