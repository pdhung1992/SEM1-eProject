import { Component, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../services/product.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-store-child',
  templateUrl: './store-child.component.html',
  styleUrls: ['./store-child.component.css']
})
export class StoreChildComponent {

  @Input() products: any;
  now: any;
  old: boolean = false;
  wishes: any = this.productService.getWish();

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService) {
  }

  compare(){
    const now = new Date().getTime();
    const then = new Date(this.products.end_time).getTime()
    if(then <= now){
      this.old = true;
    }
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
