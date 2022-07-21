import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route:Router ) { }

  myDestroy : Subscription;

  username : string = '';

  @Output() outputData:EventEmitter<string> = new EventEmitter<string>()

  clickme() {
    console.log('it does nothing', this.username);
  }

  ngOnInit(): void {

    const mysub$ = new Observable((obs)=>{
      console.log("Observer starts")
      obs.next('100');
      setTimeout(()=>{

        obs.next('200')

      }, 1000)
      obs.next('300');
      // obs.complete();
      setTimeout(()=>{

        obs.next('400')

      }, 1000)
      obs.next('500');

    })

    this.myDestroy = mysub$.subscribe({
      complete: () => { console.log("completed")  },
      error: (error) => { console.log("Error" + error) },    
      next: (sub) => { console.log(sub) }     
  });

  this.myDestroy.unsubscribe();

  mysub$.subscribe({
    complete: () => {  },
    error: () => {  },    
    next: () => {  }     
});

  }

 


  goToDashboard(){
    this.route.navigate(['/dashboard'])

  }

  onchangedata(event:string){

    console.log(event)

    this.outputData.emit(event)

  }

  
}
