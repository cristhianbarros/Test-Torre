import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a
        class="navbar-brand"
        [routerLink]="['/', 'home', 'welcome']"
        routerLinkActive="router-link-active"
        >Torre Test App</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a
              class="nav-link"
              [routerLink]="['/', 'home', 'welcome']"
              routerLinkActive="router-link-active"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              [routerLink]="['/', 'home', 'people']"
              routerLinkActive="router-link-active"
              >People</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              [routerLink]="['/', 'home', 'opportunities']"
              routerLinkActive="router-link-active"
              >Jobs</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              (click)="logout()"
              >LogOut</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet> `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.router.navigate(['/', 'home', 'welcome']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/', 'home', 'welcome']);
  }
}
