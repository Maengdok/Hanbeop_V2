import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  letterReceived?: number;
  categoryReceived?: number;

  constructor() { }

  ngOnInit(): void {
  }

  receiveLetter($event: number) {
    this.letterReceived = $event;
  }

  receiveCategory($event: number) {
    this.categoryReceived = $event;
  }
}
