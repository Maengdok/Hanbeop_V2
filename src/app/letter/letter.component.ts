import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Letter } from '../models/letter.model';
import { LetterService } from '../services/letter.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  letters?: Letter[];
  currentLetter: Letter = {};
  currentIndex = 0;
  
  @Output() chosenLetter = new EventEmitter<number>();

  constructor(private letterService: LetterService) { }

  ngOnInit(): void {
    this.retrieveLetters();
    this.chosenLetter.emit(this.currentIndex);
  }

  retrieveLetters(): void {
    this.letterService.getAll().subscribe(data => {
      this.letters = data;
    },
    error => {
      console.log(error);
    });
  }

  sendLetter(letter: Letter, index: number, elem: HTMLElement): void {
    if (this.currentIndex != 0) {
      for (let i = 0; i <= 15; i++) {
        if (document.getElementById("letter#" + i.toString())?.classList.contains("selectedLetter")) {
          document.getElementById("letter#" + i.toString())?.classList.replace("selectedLetter", "unselectedLetter"); 
        }
      }
    }

    this.currentLetter = letter;
    this.currentIndex = index + 1;
    elem.className = "unselectedLetter" ? "selectedLetter" : "unselectedLetter";
    this.chosenLetter.emit(this.currentIndex);
  }

  clearLetter(): void {
    if (this.currentIndex != 0 ) {
      for (let i = 0; i <= 15; i++) {
        if (document.getElementById("letter#" + i.toString())?.classList.contains("selectedLetter")) {
          document.getElementById("letter#" + i.toString())?.classList.replace("selectedLetter", "unselectedLetter"); 
        }
      }

      this.currentIndex = 0;
      this.chosenLetter.emit(this.currentIndex);
    }
  }
}
