import { Component, OnInit } from '@angular/core';
import { CityList } from 'src/app/modules/common/models/data.model';
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

  constructor(private _weatherService: WeatherService, private _cityList: CityList) { }

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
  deleteFav(event) {
    this.favorites.cityId = this.favorites.cityId.filter(i => i !== event.id);
    this.cityCurrentWeather = this.cityCurrentWeather.filter(i => i.id !== event.id);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
    this._cityList.cityList.find(i => i.id === event.id).isFav = false;
  }
}
