import { Component } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: any = [];
  vendors: any = [];
  id: any;
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
    autoplayHoverPause:false,
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
    autoplayHoverPause:false,
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
}
