import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICityWeather } from '../models/weather.model';


@Injectable()

export class WeatherService {

  constructor(private _http: HttpClient) { }

  getCityWeather(cityId: number): Observable<ICityWeather> {
    return this._http.get<ICityWeather>(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&APPID=7f829abc82dba9bb4c84ff50f59fbc17`);
  }

}
