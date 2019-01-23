import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ICity, ICityWeather, IFavorites } from 'src/app/modules/common/models/weather.model';
import { WeatherService } from 'src/app/modules/common/services/weather.service';
import { CityList } from './../../../common/models/data.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showSpinner: boolean = false;
  cityCurrentWeather: ICityWeather;
  cityForecast;
  sortedCityForecast: Array<Array<any>> = [];
  isCorrectCity: boolean = false;
  myControl = new FormControl();
  filteredOptions: Observable<ICity[]>;
  starType: string;
  currentCityId: number = 703448;
  favorites: IFavorites;


  constructor(private _weatherService: WeatherService, private _cityList: CityList) {

  }

  ngOnInit() {
    this.getFavorites();
    this.getCityWeather('Kiev');
    this.getCityForecast('Kiev');
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }
  private _filter(value: string): ICity[] {
    const filterValue = value.toLowerCase();
    let list = this._cityList.cityList.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    list.length ? this.isCorrectCity = false : this.isCorrectCity = true;
    return list;
  }
  getCityWeather(cityName: string): void {
    this.showSpinner = true;
    let city = this._cityList.cityList.find(o => o.name === cityName);
    if (!city) {
      this.showSpinner = false;
      alert('No city in database');
      return;
    }
    this.currentCityId = city.id;
    this.renderStar();
    this._weatherService.getCityWeather(city.id)
      .subscribe(res => {
        this.showSpinner = false;
        this.cityCurrentWeather = res;
      }, err => {
        console.log(err);
      });
  }

  getCityForecast(cityName: string): void {
    this.showSpinner = true;
    let city = this._cityList.cityList.find(o => o.name === cityName);
    if (!city) {
      this.showSpinner = false;
      alert('No city in database');
      return;
    }
    this._weatherService.getCityForecast(city.id)
      .subscribe(res => {
        this.showSpinner = false;
        this.cityForecast = res;
        this.sortByDate(this.cityForecast.list);
      }, err => {
        console.log(err);
      });
  }
  round(value: number): number {
    return Math.round(value);
  }
  onEnter(event) {
    if (event.keyCode === 13) {
      this.getCityWeather(this.myControl.value);
      this.getCityForecast(this.myControl.value);
    }
  }
  sortByDate(array: Array<any>) {
    this.sortedCityForecast = [];
    let date = new Date(array[0].dt * 1000).getDate();
    let j = 0;
    this.sortedCityForecast.push([]);
    this.sortedCityForecast[0].push(array[0]);
    for (let i = 1; i < array.length; i++) {
      let currDate = new Date(array[i].dt * 1000).getDate();
      if (currDate === date) {
        this.sortedCityForecast[j].push(array[i]);
      } else {
        date = new Date(array[i].dt * 1000).getDate();
        j += 1;
        this.sortedCityForecast.push([]);
        this.sortedCityForecast[j].push(array[i]);
      }
    }
  }
  toggleFavorites(): void {
    let city = this._cityList.cityList.find(i => i.id === this.currentCityId);
    city.isFav = !city.isFav;
    city.isFav ? this.starType = 'star' : this.starType = 'star_border';
    let index = this.favorites.cityId.indexOf(city.id);

    index === -1 ? this.favorites.cityId.push(city.id) : this.favorites.cityId.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));



  }
  renderStar(): void {
    let city = this._cityList.cityList.find(i => i.id === this.currentCityId);
    city.isFav ? this.starType = 'star' : this.starType = 'star_border';
  }
  getFavorites(): void {
    if (JSON.parse(localStorage.getItem('favorites'))) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
    }
    console.log(this.favorites);
    this.favorites.cityId.forEach(elem => {
      this._cityList.cityList.find(i => i.id === elem).isFav = true;
    });
  }
  toggleMatTooltipText(): string {
    return this.starType === 'star' ? 'Remove from Favorites' : 'Add to Favorites';
  }
}



