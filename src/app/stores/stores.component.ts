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

}
