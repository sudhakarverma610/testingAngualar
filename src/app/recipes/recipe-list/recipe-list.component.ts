import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe.model';
 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() onRecipeChangedEvent=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe("name1","descitpion","https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
    new Recipe("name2","decr 2","https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg")
  ];
  constructor() { }

  ngOnInit(): void { 
  }
  OnRecipeSelectChanged(recipe:Recipe){
    //console.log(recipe);
    this.onRecipeChangedEvent.emit(recipe);
  }

}
