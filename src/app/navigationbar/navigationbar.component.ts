import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {

  constructor(private router: Router, public auth: AuthenticationService) {
  }

  ngOnInit() {
  }

  home_button() {
    console.log('Home button clicked!');
    this.router.navigate(['home']);
  }

  register_button() {
    // this.router.navigate(['register']);
    console.log('Register button clicked!');
    this.router.navigateByUrl('/register');

  }
  login_button() {
    // this.router.navigate(['login']);
    console.log('Login button clicked!');
    this.router.navigateByUrl('/login');
  }

  user_button() {
    console.log('User button clicked!');
    this.router.navigate(['user']);
  }


}
