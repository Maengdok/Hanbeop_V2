import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GrammarService } from '../services/grammar.service';
import { Grammar } from '../models/grammar.model';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-grammar-details',
  templateUrl: './grammar-details.component.html',
  styleUrls: ['./grammar-details.component.scss']
})
export class GrammarDetailsComponent implements OnInit {

  categories?: Category[];

  @Input() currentGrammar: Grammar = {
    id: '',
    title: '',
    meaning: '',
    phrasing: '',
    example: '',
    category: '',
    letter: '',
  };

  constructor(private grammarService: GrammarService, private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGrammar(this.route.snapshot.params.currentGrammar);
    this.retrieveCategories();
  }
  
  getGrammar(id: string): void {
    this.grammarService.get(id).subscribe(data => {
      this.currentGrammar = data;
    },
    error => {
      console.log(error);
    });
  };

  retrieveCategories(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    },
    error => {
      console.log(error);
    });
  };

}
