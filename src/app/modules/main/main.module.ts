import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../common/material/material.module';
import { WeatherService } from '../common/services/weather.service';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  exports: [MainComponent]
})
export class MainModule { }
