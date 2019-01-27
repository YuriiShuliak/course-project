import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable()

export class AuthService {

  isAuth: boolean;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(res => {
      this.isAuth = !!res;
    })
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.isAuth = false;
    this.afAuth.auth.signOut();
  }
}
