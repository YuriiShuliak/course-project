import { Component, OnInit } from '@angular/core';
import { CityList } from 'src/app/modules/common/models/data.model';
import { ICityWeather, IFavorites } from 'src/app/modules/common/models/weather.model';
import { AuthService } from 'src/app/modules/common/services/auth.service';
import { FavoritesService } from 'src/app/modules/common/services/favorites.service';
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

  constructor(
    private _weatherService: WeatherService,
    private _cityList: CityList,
    public auth: AuthService,
    private db: FavoritesService
  ) { }

  ngOnInit() {
    this.auth.afAuth.user.subscribe(res => {
      if (!res) return;
      this.getFavorites(res);
    });
  }

  getFavorites(res): void {
    let counter = true;
    this.db.itemsRef.snapshotChanges().subscribe(rows => {
      if (counter) {
        counter = false;
        let user = rows.find(row => row.payload.val().email === res.email);
        if (!user.payload.val().favorites) return;
        this.favorites.cityId = user.payload.val().favorites;
        this.favorites.cityId.forEach(i => this.getCityWeather(i));
      }
    });
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
  deleteFav(event): void {
    this.favorites.cityId = this.favorites.cityId.filter(i => i !== event.id);
    this.cityCurrentWeather = this.cityCurrentWeather.filter(i => i.id !== event.id);
    this.db.toggleFav(this.auth.afAuth.auth.currentUser.email, this.favorites.cityId);
    this._cityList.cityList.find(i => i.id === event.id).isFav = false;
  }
}
