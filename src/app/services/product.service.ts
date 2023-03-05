import {HttpClient} from "@angular/common/http";
import {Adapters} from "../enums/adapters";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import * as url from "url";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL = 'http://localhost:5555/api';
  constructor(private http: HttpClient) {
  }

  getCategories(cat: any): Observable<any>{
    // const url = Adapters.BASE_URL+ 'products/categories';
    return this.http.get<any>(`${this.BASE_URL}/group5_categories/`);
  }
  getCategoriesDetail(id: any): Observable<any>{
    // const url = Adapters.BASE_URL+ 'products/categories';
    return this.http.get<any>(`${this.BASE_URL}/group5_categories/detail?id=${id}`);
  }

  getCategoryProd(cat: any){
    return this.http.get<any>(`${this.BASE_URL}/group5_products/category?name=${cat}`);
  }

  getProducts(id: number): Observable<any>{
    // const url = Adapters.BASE_URL+ 'products?limit='+limit;
    return this.http.get<any>(`${this.BASE_URL}/group5_products/detail?id=${id}`);
  }
  searchProducts(key: string){
    // const url = Adapters.BASE_URL+ 'products/search?name='+name;
    return this.http.get<any>(`${this.BASE_URL}/group5_products/search?name=${key}`);
  }
  getAllProducts(id: number): Observable<any>{
    // const url = Adapters.BASE_URL+ 'products?limit='+limit;
    return this.http.get<any>(`${this.BASE_URL}/group5_products/`);
  }
  // getProductDetail(id: number){
  //   const url = Adapters.BASE_URL+ 'products/'+ id;
  //   return this.http.get<any>(url);
  // }
  getHistories(cat: any): Observable<any>{
    // const url = Adapters.BASE_URL+ 'products/categories';
    return this.http.get<any>(`${this.BASE_URL}/group5_histories/`);
  }
  getUsers(cat: any): Observable<any>{
    // const url = Adapters.BASE_URL+ 'products/categories';
    return this.http.get<any>(`${this.BASE_URL}/group5_users/`);
  }
  getImages(cat: any): Observable<any>{
    // const url = Adapters.BASE_URL+ 'products/categories';
    return this.http.get<any>(`${this.BASE_URL}/group5_images/`);
  }
  getVendors(cat: any): Observable<any>{
    // const url = Adapters.BASE_URL+ 'products/categories';
    return this.http.get<any>(`${this.BASE_URL}/group5_vendors/`);
  }
  getVendorsDetail(id: any): Observable<any>{
    // const url = Adapters.BASE_URL+ 'products/categories';
    return this.http.get<any>(`${this.BASE_URL}/group5_vendors/detail?id=${id}`);
  }
  getVendorProd(vdr: any){
    return this.http.get<any>(`${this.BASE_URL}/group5_products/vendor?name=${vdr}`);
  }

  getCarts(){
    let cartJson = sessionStorage.getItem('cart');
    if(cartJson){
      return JSON.parse(cartJson);
    }
    else{
      return [];
    }
  }
  saveCarts(carts: any){
    let wishJson = JSON.stringify(carts);
    sessionStorage.setItem('cart', wishJson);
  }
  getCartTotalQty(){
    let carts: any = this.getCarts();
    let total: number = 0;
    carts.forEach(() => {
      total += 1;
    });
    return total;
  }
  getWish(){
    let wishJson = sessionStorage.getItem('wish');
    if(wishJson){
      return JSON.parse(wishJson);
    }
    else{
      return [];
    }
  }
  saveWish(wishes: any){
    let wishJson = JSON.stringify(wishes);
    sessionStorage.setItem('wish', wishJson);
  }
}
