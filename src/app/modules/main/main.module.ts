import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { MaterialModule } from '../common/material/material.module';
import { FavoritesService } from '../common/services/favorites.service';
import { WeatherService } from '../common/services/weather.service';
import { CityList, WindDir } from './../common/models/data.model';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'WeatherApp'),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [WeatherService, CityList, WindDir, FavoritesService],
  exports: [MainComponent]
})
export class MainModule { }
