import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';
import { ProductComponent } from './product/product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    Login2Component,
    ProductComponent,
    ViewProductsComponent,
    AddProductsComponent,
    ShowproductsComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
