import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public isNavbarCollapsed = true;
  public dinamicIcon = "assets/icons/json.svg";
  constructor() { }

  ngOnInit(): void {
  }

  

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let navbar = document.querySelector('.navbar') as HTMLElement;
    let navbarMobile = document.querySelector('.navbar-nav') as HTMLElement;
    let navigationItemType1 = document.querySelectorAll('.nav-link');
    let navigationItemType2 = document.querySelectorAll('.dropdown-item');
    let navigationItemType3 = document.querySelectorAll('.nav-item');

    
    
    //console.log(window.pageYOffset)
    if (window.pageYOffset > navbar.clientHeight) {
      this.dinamicIcon = "assets/icons/jsonalter.svg";
      navbar.classList.add('navbar-inverse');
      navbarMobile.classList.add('navbar-inverse');
      navigationItemType1.forEach(node=>{
        node.classList.add('text-dark')
      })
      navigationItemType2.forEach(node=>{
        node.classList.add('text-dark')
      })
      navigationItemType3.forEach(node=>{
        node.classList.add('text-dark')
      })
    } else {
      this.dinamicIcon = "assets/icons/json.svg";
      navbar.classList.remove('navbar-inverse');
      navbarMobile.classList.remove('navbar-inverse');
      navigationItemType1.forEach(node=>{
        node.classList.remove('text-dark')
      })
      navigationItemType2.forEach(node=>{
        node.classList.remove('text-dark')
      })
      navigationItemType3.forEach(node=>{
        node.classList.remove('text-dark')
      })
    }
  }

}
