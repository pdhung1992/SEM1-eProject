import { Component } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: any = [];
  vendors: any = [];
  id: any;
  wishes: any = this.productService.getWish();
  p=[];

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService) {
  }

  ngOnInit(){
    this.productService.getAllProducts(this.id).subscribe(data=>{
      this.products =  data;
      console.log(this.products);
    })
    this.productService.getVendors(this.productService).subscribe(data => {
      this.vendors = data;
      console.log(this.vendors);
    })
  }


  itemOptions: OwlOptions = {
    loop: true,
    margin: 20,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    autoplayHoverPause:true,
    navText: ['<div ><i class="bi bi-chevron-left"></i></div>', '<div class="btn-primary"><i class="bi bi-chevron-right"></i></div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  vendorOptions: OwlOptions = {
    loop: true,
    margin: 20,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    autoplayHoverPause:true,
    navText: ['<div ><i class="bi bi-chevron-left"></i></div>', '<div class="btn-primary"><i class="bi bi-chevron-right"></i></div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
    nav: true
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
