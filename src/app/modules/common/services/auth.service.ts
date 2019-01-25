import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable()

export class AuthService {

  isAuth = false;
  constructor(public afAuth: AngularFireAuth) {

  }


  login() {
    this.isAuth = true;

    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  logout() {
    this.isAuth = false;
    this.afAuth.auth.signOut();
  }
}
