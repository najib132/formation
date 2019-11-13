import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-Favorite') isSelected:boolean = false;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  myFavorite(){
    this.isSelected=!this.isSelected;
    this.click.emit({newState:this.isSelected});
  }

}
