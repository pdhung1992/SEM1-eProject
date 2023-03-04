import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { ProductService } from "../services/product.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent {
  day: number = 0;
  hour: number = 0;
  min: number = 0;
  sec: number = 0;
  desc= '';
  id : any;
  products: any = [];
  histories: any = [];
  categories: any;
  users: any;
  images: any;
  vendors: any;
  carts: any = this.productService.getCarts();
  wishes: any = this.productService.getWish();
  clicked = false;

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService)
  {}
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id = params['id'];
    })
    this.productService.getProducts(this.id).subscribe(data => {
      this.products = data;
      console.log(this.products);

    })
    this.productService.getCategories(this.id).subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    })
    this.productService.getHistories(this.id).subscribe(data => {
      this.histories = data;
      console.log(this.histories);
    })
    this.productService.getUsers(this.id).subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
    this.productService.getImages(this.id).subscribe(data => {
      this.images = data;
      console.log(this.images);
    })
    this.productService.getVendors(this.id).subscribe(data => {
      this.vendors = data;
      console.log(this.vendors);
    })
  }

  x = setInterval(() => {
    console.log(this.products.end_time)
    var endDate: any = new Date(this.products.end_time);
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


  updatePrice(idx: number, price: number){

  }
  upPrice(){

  }

  downPrice(){

  }

  addCart(products: any){
    let cartItem: any = {
      id: products.id,
      name: products.name,
      price: products.buynow_price,
      thumbnail: products.thumbnail
    };
    this.carts.push(cartItem);
    let cartJson = JSON.stringify(this.carts);
    sessionStorage.setItem('cart', cartJson);
    console.log(cartJson);
    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: 'This product has been add to Cart!',
    })
  }
  addWish(products: any){
    let wishItem: any = {
      id: products.id,
      name: products.name,
      price: products.buynow_price,
      thumbnail: products.thumbnail
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

  id1 = "product-desc"
  tabChange(ids: any){
    this.id1 = ids;
    console.log(ids);
  }
}
