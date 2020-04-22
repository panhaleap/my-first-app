import { Component, OnInit, Output, AfterViewInit, EventEmitter, DoCheck } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, DoCheck {
  recipes: Recipe[];
  @Output() recipeChose = new EventEmitter <Recipe>();

  constructor(private recipesService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  ngDoCheck() {
  }
}
