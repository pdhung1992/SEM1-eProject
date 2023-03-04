import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements  OnInit{

  products: any = [];
  cat: any;
  id:any;
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
    })
    this.productService.getAllProducts(this.cat).subscribe(data=>{
      this.products =  data;
      console.log(this.products);
    })

  }

}
