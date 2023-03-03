import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { ProductService } from "../services/product.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {
  day: number = 0;
  hour: number = 0;
  min: number = 0;
  sec: number = 0;
  vdr:any;
  vendors:any;
  products: any;

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
      alert('Please fully enter all field: Name, E-mail and Message!');
    }
  }
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.vdr = params['vdr'];
      console.log(this.vdr);
    })
    this.productService.getVendors(this.vdr).subscribe(data => {
      this.vendors = data;
      console.log(this.vendors);
    })
    this.productService.getAllProducts(this.vdr).subscribe(data=>{
      this.products =  data;
      console.log(this.products);
    })
  }

  x = setInterval(() => {
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
}
