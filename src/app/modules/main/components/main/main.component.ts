import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ICity, ICityWeather } from 'src/app/modules/common/models/weather.model';
import { WeatherService } from 'src/app/modules/common/services/weather.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showSpinner: boolean = false;
  cityCurrentWeather: ICityWeather;
  isCorrectCity: boolean = false;
  myControl = new FormControl();
  options: ICity[] = [{
    name: 'Kiev',
    id: 703448
  },
  {
    name: 'Lviv',
    id: 702550
  },
  {
    name: 'Odessa',
    id: 4166787
  },
  {
    name: 'Kharkiv',
    id: 706483
  },
  {
    name: 'Kherson',
    id: 706448
  }];
  filteredOptions: Observable<ICity[]>;

  constructor(private _weatherService: WeatherService) {

  }

  ngOnInit() {
    this.getCityWeather('Kiev');
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }
  private _filter(value: string): ICity[] {
    const filterValue = value.toLowerCase();
    let list = this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    console.log(list.length);

    list.length ? this.isCorrectCity = false : this.isCorrectCity = true;
    console.log(this.isCorrectCity);
    return list;
  }
  getCityWeather(cityName: string): void {
    this.showSpinner = true;
    let city = this.options.find(o => o.name === cityName);
    if (!city) {
      alert('No city in database');
      return;
    }

    this._weatherService.getCityWeather(city.id)
      .subscribe(res => {
        this.showSpinner = false;
        this.cityCurrentWeather = res;
        console.log(this.cityCurrentWeather);
      }, err => {
        console.log(err);
      });
  }
  round(value: number): number {
    return Math.round(value);
  }
}


