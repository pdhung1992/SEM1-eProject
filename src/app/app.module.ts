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
import { SitemapComponent } from './sitemap/sitemap.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: "AuctionsTable - Home"},
  {path: 'login', component: LoginComponent, title: "AuctionsTable - Login"},
  {path: 'signup', component: SignupComponent, title: "AuctionsTable - Sign Up"},
  {path: 'products/:id', component: ProductsNewComponent, title: "AuctionsTable - Products"},
  {path: 'categories/:cat', component: CategoriesComponent, title: "AuctionsTable - Categories"},
  {path:'contact', component: ContactComponent, title: "AuctionsTable - Contact Us"},
  {path: 'cart', component: CartComponent, title: "AuctionsTable - Cart"},
  {path: 'checkout', component: CheckoutComponent, title: "AuctionsTable - Checkout"},
  {path: 'wishlist', component: WishlistComponent, title: "AuctionsTable - Wishlist"},
  {path: 'introduce', component: IntroduceComponent, title: "AuctionsTable - About Us"},
  {path: 'vendors', component: VendorsComponent, title: "AuctionsTable - Vendors"},
  {path: 'faq', component: FaqsComponent, title: "AuctionsTable - Faqs"},
  {path: 'policy', component: PoliciesComponent, title: "AuctionsTable - Policies"},
  {path: 'track', component: TrackingComponent, title: "AuctionsTable - Tracking"},
  {path: 'stores/:vdr', component: StoresComponent, title: "AuctionsTable - Stores"},
  {path: 'announcements', component: AnnouncementsComponent, title: "AuctionsTable - Announcements"},
  {path:'search/:key', component: SearchComponent, title: "AuctionsTable - Search"},
  {path: 'sitemap', component: SitemapComponent}
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
    SitemapComponent,
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
