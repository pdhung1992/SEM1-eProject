import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { ProductService } from "../services/product.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {

  vdr:any;
  vendors:any;
  products: any;
  p=[];
  page=1;
  wishes: any = this.productService.getWish();

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService) {
  }
  submited: boolean = false;

  sMessForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mess: new FormControl('', Validators.required),
  });
  onSMess(){
    this.submited = true;
    if(this.sMessForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fully enter your Name, E-mail and Message!',
      })
    }
  }
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.vdr = params['vdr'];
      this.productService.getVendorProd(this.vdr).subscribe(data=>{
        this.products =  data;
      })
      this.productService.getVendorsDetail(this.vdr).subscribe(data => {
        this.vendors = data;
        console.log(this.vdr);
        console.log(this.vendors)
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
