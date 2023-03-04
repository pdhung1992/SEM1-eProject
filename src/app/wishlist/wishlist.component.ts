import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishes: any = [];

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService)
  {}

  ngOnInit(){
    this.wishes = this.productService.getWish();
  }
  removeItem(idx: number){
    let _this = this;
    Swal.fire({
      title: 'Are you sure?',
      text: "This product will be removed from your Wishlist!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DC3545',
      cancelButtonColor: '#2695ff',
      confirmButtonText: 'Yes, delete it!'
    }).then(function (isConfirm: any){
      if (isConfirm.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
        _this.wishes.splice(idx,1);
        _this.productService.saveWish(_this.wishes);
      }
    })

  }
}
