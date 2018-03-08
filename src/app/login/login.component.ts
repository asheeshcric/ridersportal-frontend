import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from "@angular/material";
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


  constructor(private router: Router, private auth: AuthenticationService, public snackBar: MatSnackBar) { }

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
      log(error);
      if (error) {
        log('snack');
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this.snackBar.open('Incorrect Email or Password', 'CLOSE', {
      duration: 4000,
    });
  }
}
