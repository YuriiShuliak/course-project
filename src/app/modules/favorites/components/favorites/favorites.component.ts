import { Component, OnInit } from '@angular/core';
import { ICityWeather, IFavorites } from 'src/app/modules/common/models/weather.model';
import { WeatherService } from 'src/app/modules/common/services/weather.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  showSpinner: boolean = false;
  favorites: IFavorites = { cityId: [] };
  cityCurrentWeather: ICityWeather[] = [];

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.getFavorites();
    this.favorites.cityId.forEach(i => this.getCityWeather(i));
  }

  getFavorites(): void {
    if (!JSON.parse(localStorage.getItem('favorites'))) return;
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
  }
  getCityWeather(cityId: number): void {
    this.showSpinner = true;
    this._weatherService.getCityWeather(cityId)
      .subscribe(res => {
        this.showSpinner = false;
        this.cityCurrentWeather.push(res);
      }, err => {
        console.log(err);
      });
  }
}
