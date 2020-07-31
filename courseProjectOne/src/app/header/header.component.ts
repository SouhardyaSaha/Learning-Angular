// import { Component, OnInit } from '@angular/core';

@Component({
  
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewEncapsulation, AfterViewInit, Output, EventEmitter, HostListener } from ‘@angular/core’;
import { Router } from ‘@angular/router’;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit, AfterViewInit {
  navbarOpen = false;
  public clicked = false;
  _el: any;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(
    private router: Router,
  ) { }
  ngOnInit() { }
  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }
  @HostListener(‘document: click’, [‘event’])
  private clickedOutside(event): void {
    if (this.clicked) {
      this._el.nativeElement.querySelector(‘.dropdown - menu’).classList.toggle(‘show’);
    }
  }
}