import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mouseIn(firstElem: HTMLElement, secondElem: HTMLElement, thirdElem: HTMLElement): void {
    firstElem.className = "hiddenHanbeop" ? "hanbeop" : "hiddenHanbeop";
    secondElem.className = "hanbeop" ? "hiddenHanbeop" : "hanbeop";
    thirdElem.className = "hiddenCopyrights" ? "showCopyrights" : "hiddenCopyrights";
  }

  mouseLeave(firstElem: HTMLElement, secondElem: HTMLElement, thirdElem: HTMLElement): void {
    firstElem.className = "hanbeop" ? "hiddenHanbeop" : "hanbeop";
    secondElem.className = "hiddenHanbeop" ? "hanbeop" : "hiddenHanbeop";
    thirdElem.className = "showCopyrights" ? "hiddenCopyrights" : "showCopyrights";
  }

}
