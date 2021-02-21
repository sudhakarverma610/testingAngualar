import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ingredient } from 'src/app/Shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @Output() OnAddedIngredentEvent=new EventEmitter<ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  OnAddIngredient(inputName,inputAmount){
    console.log(inputName.value);
    this.OnAddedIngredentEvent.emit(new ingredient(inputName.value,inputAmount.value));

  }

}
