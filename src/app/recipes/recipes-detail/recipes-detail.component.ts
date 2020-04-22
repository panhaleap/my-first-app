import { Component, OnInit, Input, EventEmitter, DoCheck } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit, DoCheck {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('Recipe Detail', this.recipe);
  }
}
