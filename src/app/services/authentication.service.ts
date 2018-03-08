import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  login(email: string, password: string) {
    const url = `${environment.api}/login`;
    return this.http.post(
      url,
      {email: email, password: password},
    );
  }

  public getToken(): string {
    return localStorage.getItem('auth_token');
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
