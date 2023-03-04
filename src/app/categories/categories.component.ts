import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { ProductService } from "../services/product.service";
declare var $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements  OnInit{
  products: any = [];
  cat: any;
  id:any;
  date:any;
  categories: any = [];
  i: number = 0;
  day=0;
  hour=0;
  min=0;
  sec=0;

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
    })
    this.productService.getAllProducts(this.cat).subscribe(data=>{
      this.products =  data;
      console.log(this.products);
    })

  }

  // x = setInterval(() => {
  //   var endDate: any = new Date(this.endDate);
  //   var today: any = new Date();
  //   var distance = endDate - today;
  //   this.day = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   this.hour = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  //   this.min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  //   this.sec = Math.floor(distance % (1000 * 60) / (1000));
  //   if (distance < 0){
  //     clearInterval(this.x);
  //   }
  // }, 1000)
  // x = setInterval(() => {
  //   console.log(this.products[this.i].end_time);
  //   console.log(this.i);
  //   var endDate: any = new Date(this.products[this.i].end_time);
  //   var today: any = new Date();
  //   var distance = endDate - today;
  //   this.products[this.i].days = (Math.floor(distance / (1000 * 60 * 60 * 24)));
  //   this.products[this.i].hours = (Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
  //   this.products[this.i].mins = (Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)));
  //   this.products[this.i].secs = (Math.floor(distance % (1000 * 60) / (1000)));
  //   this.i++;
  //   if (distance < 0 || this.i >= 150){
  //     clearInterval(this.x);
  //   }
  // }, 1000)
}
