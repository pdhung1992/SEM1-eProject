import {HttpClient} from "@angular/common/http";
import {Adapters} from "../enums/adapters";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

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

  getCategoryDetail(id: any){
    const url = Adapters.BASE_URL+ 'categories/'+ id;
    return this.http.get<any>(url);
  }

  getProducts(id: number): Observable<any>{
    // const url = Adapters.BASE_URL+ 'products?limit='+limit;
    return this.http.get<any>(`${this.BASE_URL}/group5_products/detail?id=${id}`);
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

  searchProducts(name: string){
    const url = Adapters.BASE_URL+ 'products/search?q='+name;
    return this.http.get<any>(url);
  }
}
