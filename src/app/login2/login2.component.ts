import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  token : any = 'token'
  role : any = 'user'

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log("token", this.token)
    localStorage.setItem('token', this.token)
    localStorage.setItem('role',this.role)
    this.route.navigate(['/home'])

  }

}
