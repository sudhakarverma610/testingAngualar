import { Component, OnInit } from '@angular/core';
import { Recipe } from './Recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipe:Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  OnRecipeEventChanged(Recipe: Recipe){
    //console.log("from ")
    this.recipe=Recipe;
    console.log(Recipe);
  }

}
