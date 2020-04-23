import { Component, OnInit, Input, EventEmitter, DoCheck } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
