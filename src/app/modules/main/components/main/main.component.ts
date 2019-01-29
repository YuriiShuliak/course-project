import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ICity, ICityWeather, IFavorites } from 'src/app/modules/common/models/weather.model';
import { AuthService } from 'src/app/modules/common/services/auth.service';
import { WeatherService } from 'src/app/modules/common/services/weather.service';
import { CityList, WindDir } from './../../../common/models/data.model';


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
  favorites: IFavorites = { cityId: [] };
  cityName: string = 'Kiev';


  constructor(
    private _weatherService: WeatherService,
    private _cityList: CityList,
    public auth: AuthService,
    private _actRoute: ActivatedRoute,
    private _route: Router,
    public wDir: WindDir,
    private snackBar: MatSnackBar
  ) {
    this._actRoute.queryParams.subscribe(params => {
      if (!params.name) return;
      let city = this._cityList.cityList.find(i => i.name === params.name);
      if (!city && params.name) return this.openSnackBar();
      this.cityName = params.name;
    });
  }

  ngOnInit() {
    this.getFavorites();
    this.showWeather(this.cityName);

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
  getCityWeather(cityName: string) {
    this.showSpinner = true;
    let city = this._cityList.cityList.find(o => o.name === cityName);
    if (!city) {
      this.showSpinner = false;
      this.openSnackBar();
      this._route.navigate(['']);

      return 'error';
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
  showWeather(name) {
    if (!this.getCityWeather(name)) {
      this.getCityForecast(name);
    }
  }
  onEnter(event) {
    if (event.keyCode === 13) {
      this.showWeather(this.myControl.value);
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
    if (!JSON.parse(localStorage.getItem('favorites'))) return;
    this.favorites = JSON.parse(localStorage.getItem('favorites'));

    this.favorites.cityId.forEach(elem => {
      this._cityList.cityList.find(i => i.id === elem).isFav = true;
    });
  }
  toggleMatTooltipText(): string {
    return this.starType === 'star' ? 'Remove from Favorites' : 'Add to Favorites';
  }
  openSnackBar() {
    this.snackBar.open('No city in database', '', { duration: 1500, verticalPosition: 'top' });
  }
}



