import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  day: number = 0;
  hour: number = 0;
  min: number = 0;
  sec: number = 0;
  img: any = 'test.jpg';
  products: any = [];
  cat: any;
  id:any;
  date:any;
  categories: any = [];

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService) {
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.cat = params['cat'];
      console.log(this.cat);
    })
    this.productService.getCategories(this.cat).subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    })
    this.productService.getAllProducts(this.cat).subscribe(data=>{
      this.products =  data;
      console.log(this.products);
    })
  }

  x = setInterval(() => {
    var i = this.products.id;
    var endDate: any = new Date(this.products[i].end_time);
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
