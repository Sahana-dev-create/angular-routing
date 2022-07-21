import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  getToken(){

    console.log("getToken", !!localStorage.getItem('token'))
    return !!localStorage.getItem('token')

    
  }

  getRole(){
    return localStorage.getItem('role')
  }
}
