import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  date = new Date();
  routingTitle: string = 'Favorites';
  routingLink: string = '/favorites';

  constructor(private router: Router) { }

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
}
