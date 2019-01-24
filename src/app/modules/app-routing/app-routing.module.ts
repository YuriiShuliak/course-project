import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from '../favorites/components/favorites/favorites.component';
import { MainComponent } from '../main/components/main/main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
