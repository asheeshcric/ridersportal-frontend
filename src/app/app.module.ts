import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from "@angular/material";
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material";
import { MatTabsModule } from "@angular/material";

import {ApiService} from "./services/api.service";
import {AuthenticationService} from "./services/authentication.service";
import { AuthGuardService } from "./services/auth-guard.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { UserComponent } from './user/user.component';
import { BuySectionComponent } from './user/buy-section/buy-section.component';
import { BikeblogComponent } from './bikeblog/bikeblog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationbarComponent,
    RegisterComponent,
    LoginComponent,
    AuthorizedComponent,
    UserComponent,
    BuySectionComponent,
    BikeblogComponent
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
    MatSnackBarModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AuthenticationService, ApiService, AuthGuardService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
