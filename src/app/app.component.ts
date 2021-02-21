import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  number: number=1;
  OnNavigationChangedFired(number:number){
    this.number=number;
  }
}
