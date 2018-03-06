import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from "@angular/material";
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./services/authentication.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ApiService} from "./services/api.service";
import { AuthorizedComponent } from './authorized/authorized.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationbarComponent,
    RegisterComponent,
    LoginComponent,
    AuthorizedComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AuthenticationService, ApiService, HttpClient, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
