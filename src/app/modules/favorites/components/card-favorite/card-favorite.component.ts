import { Component, Input, OnInit } from '@angular/core';
import { ICityWeather } from './../../../common/models/weather.model';

@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  styleUrls: ['./card-favorite.component.scss']
})
export class CardFavoriteComponent implements OnInit {

  _currentWeather: ICityWeather;

  @Input()
  set cityCurrentWeather(cityCurrentWeather: ICityWeather) {
    this._currentWeather = cityCurrentWeather;
  }

  constructor() { }

  ngOnInit() {
  }

}
