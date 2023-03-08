import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-change',
  templateUrl: './price-change.component.html',
  styleUrls: ['./price-change.component.css']
})
export class PriceChangeComponent {

  @Input() bidPrice: any;
  @Input() newPrice: any;


  upPrice(){
    this.newPrice++;
  }

  downPrice(){
    if(this.newPrice> this.bidPrice + 1){
      this.newPrice--;
    }
  }
}
