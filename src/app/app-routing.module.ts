import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { Login2Component } from './login2/login2.component';
import { RoleGuardGuard } from './auth-guard/role-guard.guard';
import { AuthGuardGuard } from './auth-guard/auth-guard.guard';
import { ProductComponent } from './product/product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ChildGuardGuard } from './auth-guard/child-guard.guard';
import { DeactivateGuardGuard } from './auth-guard/deactivate-guard.guard';
import { ResolveGuardGuard } from './auth-guard/resolve-guard.guard';

const routes: Routes = [
  {
    path:'',
    component : Login2Component
  },
  {
  path:'home',
  component : HomeComponent,
  // canActivate : [AuthGuardGuard],
  resolve : {
    productList : ResolveGuardGuard
  }
  },
  {
    path:'about',
    component:AboutComponent,
    canActivate : [AuthGuardGuard],
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate : [RoleGuardGuard],
  },
  {
    path:'products',
    component:ProductComponent,
    children:[
      {
        path:'view-products',
        component:ViewProductsComponent,       
      },
      {
        path:'add-products',
        component:AddProductsComponent,
        canDeactivate:[DeactivateGuardGuard]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
