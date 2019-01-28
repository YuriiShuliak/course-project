import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WindDir } from 'src/app/modules/common/models/data.model';
import { ICityWeather } from './../../../common/models/weather.model';

@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  styleUrls: ['./card-favorite.component.scss']
})
export class CardFavoriteComponent implements OnInit {

  _currentWeather: ICityWeather;

  @Output()
  deleteFromFav = new EventEmitter();

  @Input()
  set cityCurrentWeather(cityCurrentWeather: ICityWeather) {
    this._currentWeather = cityCurrentWeather;
  }

  constructor(public wDir: WindDir, private router: Router) { }

  ngOnInit() {
    console.log(this._currentWeather);

  }

  deleteFromFavorites() {
    this.deleteFromFav.emit({ id: this._currentWeather.id, name: this._currentWeather.name })
  }
  round(value: number): number {
    return Math.round(value);
  }
  showDetailes() {
    this.router.navigate([''], { queryParams: { 'name': this._currentWeather.name } });
  }
}
