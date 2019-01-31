import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { MaterialModule } from '../common/material/material.module';
import { WindDir } from '../common/models/data.model';
import { MainComponent } from './../main/components/main/main.component';
import { CardFavoriteComponent } from './components/card-favorite/card-favorite.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  slidesPerView: 1,
  direction: 'horizontal',
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
};

@NgModule({
  declarations: [FavoritesComponent, CardFavoriteComponent],
  imports: [
    CommonModule,
    SwiperModule,
    MaterialModule
  ],
  exports: [FavoritesComponent, CardFavoriteComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    MainComponent,
    WindDir
  ]
})
export class FavoritesModule { }
