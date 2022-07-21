import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuardGuard implements Resolve<any> {

  /*
  constructor(private service : productservice){}

  products : any;

 
  */

  productList ={
    productId : 1,
    productName : 'soap',
    productQuantity : 20
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  

    return this.productList

    // this.service.getproducts().subscribe({
    //   next : (data) => {
  
    //    return this.products = data
  
    //   }
    // })

   

  }

  
}
