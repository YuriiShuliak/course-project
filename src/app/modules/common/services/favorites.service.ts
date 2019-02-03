import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {

  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('favorites');
  }

  toggleFav(email: string, fav: Array<number>) {
    let counter = true;
    this.itemsRef.snapshotChanges()
      .subscribe(rows => {
        if (!counter) return;
        counter = false;
        let user = rows.find(row => row.payload.val().email === email);
        if (user) {
          this.itemsRef.update(user.key, { email: email, favorites: fav });
        } else {
          this.itemsRef.push({ email: email, favorites: fav });
        }
      });
  }
}
