import { Component, OnInit, Input } from '@angular/core';

import { Grammar } from '../models/grammar.model';
import { GrammarService } from '../services/grammar.service';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent implements OnInit {

  grammars?: Grammar[];
  orderedGrammars?: Grammar[];
  currentGrammar: Grammar = {};
  currentIndex = 0;
  isSelected = 0; 

  @Input() selectedLetter?: string;
  @Input() selectedCategory?: string;

  constructor(private grammarService: GrammarService) { }

  ngOnInit(): void {
    this.retrieveGrammars();
    this.retrieveGrammarsWithLetter(this.selectedLetter);
    this.retrieveGrammarsWithCategory(this.selectedCategory);
    this.retrieveGrammarsWithLetterAndCategory(this.selectedLetter, this.selectedCategory);
  }

  retrieveGrammars(): void {
    this.grammarService.getAll().subscribe(data => {
      this.grammars = data;
    },
    error => {
      console.log(error);
    });
  }

  retrieveGrammarsWithLetter(letter: any): void {
    this.grammarService.findByLetter(letter).subscribe(data => {
      this.orderedGrammars = data;
    },
    error => {
      console.log(error);
    });
  }

  retrieveGrammarsWithCategory(category: any): void {
    this.grammarService.findByCategory(category).subscribe(data => {
      this.orderedGrammars = data;
    },
    error => {
      console.log(error);
    });
  }

  retrieveGrammarsWithLetterAndCategory(letter: any, category: any): void {
    this.grammarService.findByLetterAndCategory(letter, category).subscribe(data => {
      this.orderedGrammars = data;
    },
    error => {
      console.log(error);
    });
  }

  setActiveGrammar(grammar: Grammar, index: number, firstElem: HTMLElement, secondElem: HTMLElement): void {
    if (firstElem.className == "showList" && secondElem.className == "hideGrammar") { 
      this.currentGrammar = grammar;
      this.currentIndex = index;
      this.isSelected = 1;
      firstElem.className = "hideList";
      secondElem.className = "showGrammar";
    }
    else {
      firstElem.className = "showList";
      secondElem.className = "hideGrammar";
      this.setActiveGrammar(grammar, index, firstElem, secondElem);
    }
  }

  hideDiv(firstElem: HTMLElement, secondElem: HTMLElement): void {
    this.currentGrammar = {};
    this.currentIndex = -1;
    this.isSelected = 0;
    firstElem.className = "hideGrammar";
    secondElem.className = "showList";
  }
}
