import {Component, HostListener} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEM1-eProject';
  keyword: string = '';
  carts: any;

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService)
  {}

  submited: boolean = false;

  searchForm: FormGroup =  new FormGroup({
    name: new FormControl(),
  });
  subForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required])
  });
  ngOnInit(){
    this.carts = this.productService.getCarts();
    console.log(this.carts);
  }
  onSearch(){
    location.assign('/search/'+this.searchForm.value.name);
  }
  onSub(){
    this.submited = true;
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Thanks for subscribe us!',
      })
    if(this.subForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your E-mail!',
      })
    }
  }

}
