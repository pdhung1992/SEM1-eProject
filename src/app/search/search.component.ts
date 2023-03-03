import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  day: number = 0;
  hour: number = 0;
  min: number = 0;
  sec: number = 0;
  key:any;
  result:any;
  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService)
  {}
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.key = params['key'];
    });
    this.productService.searchProducts(this.key).subscribe(data=>{
        this.result =  data;
        console.log(this.result);
      })
  }
  x = setInterval(() => {
    var endDate: any = new Date(this.result.end_time);
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
