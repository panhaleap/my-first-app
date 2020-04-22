import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('A Test Recipe', 'This is simply a test2', 'https://www.healthhub.sg/sites/assets/Assets/Categories/Food%20N%20Nutrition/indian-vegetarian-curry-brown-rice.jpg')
      ];

    getRecipes() {
        // since Javascript reference object. So we use slice() to copy the arrays recipes
        return this.recipes.slice();
    }
}
