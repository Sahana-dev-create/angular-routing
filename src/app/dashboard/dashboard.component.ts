import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  myDestroy:Subscription

  constructor() { }

  ngOnInit(): void {

    // const myInt$ = interval(1000).pipe(take(5))

    const of$ = of(1,2,3,4,5,6,7,8,9).pipe(map(m => m*100))

    of$.subscribe((sub)=>{
      console.log(sub)
    })

    // myInt$.subscribe((sub)=>{
    //   console.log(sub)
    // })
  }

  ngOnDestroy(): void {

    // this.myDestroy.unsubscribe()
      
  }

}
