import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe(
            'Roast Pork Belly with Chile Vinegar',
            'Set it and forget it: This stupid-simple method for pork belly with crackling skin and succulent meat is a total winner. This is a part of Angela Dimayuga\'s Filipino-American Christmas menu.',
            'https://assets.bonappetit.com/photos/5a05d0b82412f963cf27df16/16:9/w_2560,c_limit/roast-pork-belly-with-chile-vinegar.jpg',
            [
                new Ingredient('boneless pork belly', 4),
                new Ingredient('Kosher salt', 1),
                new Ingredient('vegetable oil', 1),
                new Ingredient('bottle unseasoned rice vinegar', 1),
                new Ingredient('garlic cloves, chopped', 12),
                new Ingredient('green Thai chiles, lightly crushed but left whole', 12),
                new Ingredient('serrano chiles, torn into small pieces', 2),
                new Ingredient('bottles hard apple cider', 4),
                new Ingredient('honey', 2),
            ]),
        new Recipe(
            'Crispy Philippine Slow-Roasted Pork Belly (Bellychon)',
            'Allow at least one day for brining and a second day for air-drying, which will ensure a crispy skin',
            'https://www.saveur.com/resizer/lqOF1sW8ZIda_d-h042dzngOkzs=/1034x776/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/GOEBMMI6H7U6CK4CYN4BDI6NSU.jpg',
            [
                new Ingredient('sugar', 1),
                new Ingredient('white vinegar', 1),
                new Ingredient('kosher salt', 1.5),
                new Ingredient('whole black peppercorns', 2),
                new Ingredient('cloves garlic, smashed', 17),
                new Ingredient('bay leaves', 3),
                new Ingredient('whole star anise', 2),
                new Ingredient('pork belly, boneless and butterflied', 4),
                new Ingredient('shallots, peeled', 3),
                new Ingredient('coconut vinegar', 1.5),
                new Ingredient('whole red Thai chile, stemmed', 1),
                new Ingredient('stalks lemongrass', 2),
                new Ingredient('cilantro roots, plus cilantro leaves to garnish', 1.4),
                new Ingredient('canola oil', 1.4),
            ])
      ];

    getRecipes() {
        // since Javascript reference object. So we use slice() to copy the arrays recipes
        return this.recipes.slice();
    }
}
