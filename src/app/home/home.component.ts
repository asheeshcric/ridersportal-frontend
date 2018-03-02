import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public bike1 = "assets/bike-photos/1.jpg";
  public bike2 = "assets/bike-photos/2.jpg";
  public bike3 = "assets/bike-photos/3.jpg";

  constructor() { }

  ngOnInit() {
  }

}
