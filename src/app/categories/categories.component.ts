import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { ProductService } from "../services/product.service";
import Swal from "sweetalert2";
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']

})
export class CategoriesComponent implements  OnInit{
  page =1;
  products: any = [];
  p=[];
  cat: any;
  id:any;
  categories: any = [];
  wishes: any = this.productService.getWish();

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService) {
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.cat = params['cat'];
      this.productService.getCategoryProd(this.cat).subscribe(data=>{
        this.products =  data;
      })
      this.productService.getCategoriesDetail(this.cat).subscribe(data => {
          this.categories = data;
      console.log(this.cat);
      console.log(this.categories)
      console.log(this.products);
    })
    })

  }

  addWish(p: any) {
    let wishItem: any = {
      id: p.id,
      name: p.name,
      price: p.buynow_price,
      thumbnail: p.thumbnail
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
