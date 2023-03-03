import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 carts: any = [];

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService)
  {}

  ngOnInit(){
    this.carts = this.productService.getCarts();
  }
  removeItem(idx: number){
    let _this = this;
    Swal.fire({
      title: 'Are you sure?',
      text: "This product will be removed from your Cart!",
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
        _this.carts.splice(idx,1);
        _this.productService.saveCarts(_this.carts);
      }
    })

}
}
