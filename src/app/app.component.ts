import { Component, DoCheck } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { AuthService } from './modules/common/services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  date = new Date();
  routingTitle: string = 'Favorites';
  routingLink: string = '/favorites';

  constructor(
    public auth: AuthService,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'logout',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/logout.svg")
    );
    this.matIconRegistry.addSvgIcon(
      'login',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/login.svg")
    );
  }

  ngDoCheck() {
    if (this.router.url === '/favorites') {
      this.routingTitle = 'Close';
      this.routingLink = '/';
    } else {
      this.routingTitle = 'Favorites';
      this.routingLink = '/favorites';
    }
  }
  routingToggle() {
    if (this.routingTitle === 'Favorites') {
      this.routingTitle = 'Close';
      this.routingLink = '';
      return;
    }
    this.routingTitle = 'Favorites';
    this.routingLink = '/favorites';
  }
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
