import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MaterialModule } from './modules/common/material/material.module';
import { AuthService } from './modules/common/services/auth.service';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { MainModule } from './modules/main/main.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    FavoritesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'WeatherApp'),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
