import { Component, OnInit, Output, AfterViewInit, EventEmitter, DoCheck } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, DoCheck {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test2', 'https://www.healthhub.sg/sites/assets/Assets/Categories/Food%20N%20Nutrition/indian-vegetarian-curry-brown-rice.jpg')
  ];
  @Output() recipeChose = new EventEmitter <Recipe>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
  }

  getRecipe(recipe: Recipe) {
    this.recipeChose.emit(recipe);
  }
}
