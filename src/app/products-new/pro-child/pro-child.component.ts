import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-pro-child',
  templateUrl: './pro-child.component.html',
  styleUrls: ['./pro-child.component.css']
})
export class ProChildComponent {

  @Input() products: any;
  day: number = 0;
  hour: number = 0;
  min: number = 0;
  sec: number = 0;
  desc= '';
  id : any;
  histories: any = [];
  categories: any;
  users: any;
  images: any;
  vendors: any;
  carts: any = this.productService.getCarts();
  wishes: any = this.productService.getWish();
  clicked = false;
  submited: boolean = false;
  old: boolean = false;

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService)
  {}

  compare(){
    const now = new Date().getTime();
    const then = new Date(this.products.end_time).getTime()
    if(then <= now){
      this.old = true;
    }
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
      this.day = 0;
      this.hour = 0;
      this.min = 0;
      this.sec = 0;
    }
  }, 1000)

  bidForm: FormGroup =  new FormGroup({
    price: new FormControl(),
  });

  onBid(){
    this.submited = true;
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2695ff',
      cancelButtonColor: '#DC3545',
      confirmButtonText: 'Yes, save my Bid!'
    }).then(function (isConfirm: any){
      if (isConfirm.isConfirmed) {
        Swal.fire(
          'Saved!',
          'Your bid has been saved.',
          'success'
        )
      }
    })
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
}
