import { Component, OnInit } from '@angular/core';

import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {log} from "../logger";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginFailed = false;

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    console.log("Login Form is submitted!");
    this.auth.login(this.email, this.password).subscribe(result => {
      log(result);
      localStorage.setItem('auth_token', result['token']);
      localStorage.setItem('user_id', result['user_id']);
      this.router.navigate(['']);
    },
    error => {
      this.loginFailed = true;
      setTimeout(() => this.loginFailed = false, 4000)
    });
  }
}
