import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @ViewChild('loader') loader:ElementRef | undefined; 

  private timesRun = 0;
  
  timer(){
    var interval = setInterval(() =>{
    this.timesRun += .5;
    if(this.timesRun === 1.5){
        clearInterval(interval);
        this.loader?.nativeElement.classList.add('hide');
        console.log("Hide")
    }
    //do whatever here..
}, 2000);
  }

  constructor() { }

  ngOnInit(): void {
    this.timer()
  }

}
