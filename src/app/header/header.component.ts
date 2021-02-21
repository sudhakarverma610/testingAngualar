import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() OnNavigationChanged=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  OnSelect(number:number){
    //console.log(number)
    this.OnNavigationChanged.emit(number);
  }
}
