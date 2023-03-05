import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import Swal from "sweetalert2";

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
  wishes: any = this.productService.getWish();
  r=[];
  page=1;

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

  addWish(r: any) {
    let wishItem: any = {
      id: r.id,
      name: r.name,
      price: r.buynow_price,
      thumbnail: r.thumbnail
    };
    this.wishes.push(wishItem);
    let wishJson = JSON.stringify(this.wishes);
    sessionStorage.setItem('wish', wishJson);
    console.log(wishJson);
    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: 'This product has been add to Wishlist!',
    })
  }
}
