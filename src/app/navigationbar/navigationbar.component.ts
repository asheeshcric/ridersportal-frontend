import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {
  constructor(private router: Router ) { }

  ngOnInit() {
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
}
