import {Component, OnInit} from '@angular/core';
import {environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fname: string;
  lname: string;
  email: string;
  password: string;
  contact: string;
  address: string;
  bike_model: string;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Form Submitted!");
    this.register().subscribe(result => {
      console.log(result);
    });
  }

  register() {
    const url = `${environment.api}/register`;
    return this.http.post(
      url,
      {fname: this.fname, lname: this.lname, email: this.email, password: this.password,
      address: this.address, contact: this.contact, bike_model: this.bike_model}
    )
  }
}
