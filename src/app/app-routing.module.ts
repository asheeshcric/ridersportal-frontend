import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from "@angular/router";

import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthorizedComponent } from "./authorized/authorized.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: '', component: AuthorizedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }


