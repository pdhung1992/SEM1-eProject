import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
// import {Adapters} from "../../enums/adapters";
// import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  day: number = 0;
  hour: number = 0;
  min: number = 0;
  sec: number = 0;
  desc= '';
  id = 0;
  products: any = [];

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService)
{
  }


  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      console.log(id);
      // this.getProduct();
    })
    this.productService.getProducts(5).subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }
  // getProduct(){
  //
  //   // call api
  //   this.productService.getProductDetail(this.id)
  //     .subscribe(data=>{
  //       this.product = data;
  //     })
  // }

  x = setInterval(() => {
    var endDate: any = new Date("2023-04-22 17:00:00");
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

  currentPrice = 300;
  newPrice = this.currentPrice;
  upPrice(){
    this.newPrice++;
  }
  downPrice(){
    if(this.newPrice > this.currentPrice)
      this.newPrice--;
  }

  id: any = "product-desc"
  tabChange(ids: any){
    this.id = ids;
    console.log(ids);
  }
}
