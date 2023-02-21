import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {RouterModule, Routes} from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
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
import { DemoComponent } from './demo/demo.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path:'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'vendors', component: VendorsComponent},
  {path: 'faq', component: FaqsComponent},
  {path: 'policy', component: PoliciesComponent},
  {path: 'track', component: TrackingComponent},
  {path: 'stores', component: StoresComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'demo', component: DemoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CategoriesComponent,
    ProductsComponent,
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
    DemoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CarouselModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
