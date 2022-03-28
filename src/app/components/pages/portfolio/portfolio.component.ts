import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public proyects = [1,2,3,4,5,6,7,8,9,10]
  
  constructor() { }

  ngOnInit(): void {
  }

}
