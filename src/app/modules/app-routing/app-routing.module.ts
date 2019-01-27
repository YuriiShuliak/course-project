import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from '../favorites/components/favorites/favorites.component';
import { MainComponent } from '../main/components/main/main.component';
import { FavoritesGuard } from './favorites.guard';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FavoritesGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
