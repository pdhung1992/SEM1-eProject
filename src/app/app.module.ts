import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {RouterModule, Routes} from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { IntroduceComponent } from './about/introduce/introduce.component';
import { VendorsComponent } from './vendors/vendors.component';
import { FaqsComponent } from './about/faqs/faqs.component';
import { PoliciesComponent } from './about/policies/policies.component';
import { TrackingComponent } from './tracking/tracking.component';
import { StoresComponent } from './stores/stores.component';
import { AnnouncementsComponent } from './about/announcements/announcements.component';
import { ProductsNewComponent } from './products-new/products-new.component';
import { SearchComponent } from './search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CatChildComponent } from './categories/cat-child/cat-child.component';
import { StoreChildComponent } from './stores/store-child/store-child.component';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { PriceChangeComponent } from './products-new/price-change/price-change.component';
import {SearchChildComponent} from "./search/search-child/search-child.component";
import {NgxPaginationModule} from 'ngx-pagination';



const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: "Home"},
  {path: 'login', component: LoginComponent, title: "Login"},
  {path: 'signup', component: SignupComponent, title: "Sign Up"},
  {path: 'products/:id', component: ProductsNewComponent, title: "Products"},
  {path: 'categories/:cat', component: CategoriesComponent, title: "Categories"},
  {path:'contact', component: ContactComponent, title: "Contact Us"},
  {path: 'cart', component: CartComponent, title: "Cart"},
  {path: 'checkout', component: CheckoutComponent, title: "Checkout"},
  {path: 'wishlist', component: WishlistComponent, title: "Wishlist"},
  {path: 'introduce', component: IntroduceComponent, title: "About Us"},
  {path: 'vendors', component: VendorsComponent, title: "Vendors"},
  {path: 'faq', component: FaqsComponent, title: "Faqs"},
  {path: 'policy', component: PoliciesComponent, title: "Policies"},
  {path: 'track', component: TrackingComponent, title: "Tracking"},
  {path: 'stores/:vdr', component: StoresComponent, title: "Stores"},
  {path: 'announcements', component: AnnouncementsComponent, title: "Announcements"},
  {path:'search/:key', component: SearchComponent, title: "Search"},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CategoriesComponent,
    ContactComponent,
    CartComponent,
    CheckoutComponent,
    WishlistComponent,
    IntroduceComponent,
    VendorsComponent,
    FaqsComponent,
    PoliciesComponent,
    TrackingComponent,
    StoresComponent,
    AnnouncementsComponent,
    ProductsNewComponent,
    SearchComponent,
    CatChildComponent,
    StoreChildComponent,
    HomeChildComponent,
    PriceChangeComponent,
    SearchChildComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    CarouselModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
