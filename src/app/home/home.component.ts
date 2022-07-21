import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(public router:Router) { }

  myDestroy : Subscription;

  ngOnInit(): void {

    const myobs$ = new Observable((obs)=>{

      console.log("My Observer Starts")

      obs.next("100");
      obs.next("200");
      obs.error('not working')
      obs.next("300");
      setTimeout(()=>{
        obs.next("400")
      }, 1000)
      obs.next("500");
      obs.next("600");
      
    })

    this.myDestroy = myobs$.subscribe({
      complete: () => { console.log("completed") },
      error: (err) => { console.log(err) },    
      next: (sub) => { console.log(sub) } 
    })

    this.myDestroy.unsubscribe()

  }

  goToSettings(){

    this.router.navigate(['/about'])

  }

}
