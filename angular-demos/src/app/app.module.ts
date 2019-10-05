import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FetchDetailsComponent } from './components/fetch-details/fetch-details.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    TopBarComponent,
    CartComponent,
    ShippingComponent,
    FetchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'userDetails', component: FetchDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
