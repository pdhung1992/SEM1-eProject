import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent {
  vendors: any;
  page = 1;

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService)
  {}
  ngOnInit(){
    this.productService.getVendors(this.productService).subscribe(data => {
      this.vendors = data;
      console.log(this.vendors);
    })
  }
}
