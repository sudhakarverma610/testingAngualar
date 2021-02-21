import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../Recipe.model';
 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe:Recipe ;
@Output() OnRecipeSelectEvent=new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  OnRecipeSelect(){
    //console.log(this.recipe);
    this.OnRecipeSelectEvent.emit();
  }
}
