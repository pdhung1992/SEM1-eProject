import {Component, HostListener} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "./services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEM1-eProject';
  keyword: string = '';
  totalItem: number = this.productService.getCartTotalQty();

  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService)
  {}

  submited: boolean = false;

  searchForm: FormGroup =  new FormGroup({
    name: new FormControl(),
  });
  subForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required)
  });
  ngOnInit(){

  }
  onSearch(){
    location.assign('/search/'+this.searchForm.value.name);
  }
  onSub(){
    this.submited = true;
    if(this.subForm.invalid){
      alert('Please enter your e-mail!');
    }
  }

}
