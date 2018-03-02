import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http"
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

import {environment} from "../../environments/environment";
import {catchError} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {logError} from "../logger";


@Injectable()
export class ApiService {
  httpOptions: any;

  constructor(private http: HttpClient, private auth: AuthenticationService, private router: Router) { }

  createAuthorizationHeader() {
    const token = this.auth.getToken();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      })
    };
  }

  get(endpoint, params) {
    this.createAuthorizationHeader();
    this.httpOptions.params = params;
    const url = `${environment.api}/${endpoint}`;
    return this.http.get(url, this.httpOptions).pipe(
        catchError(this.handleError)
    );
  }

  post(endpoint, data) {
    this.createAuthorizationHeader();
    const url = `${environment.api}/${endpoint}`;
    return this.http.post(url, data, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  put(endpoint, data) {
    this.createAuthorizationHeader();
    const url = `${environment.api}/${endpoint}`;
    return this.http.put(url, data, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let message = '';
    let messageStatus = '';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      logError(`An error occurred: ${error.error.message}`);
      message = error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      logError(
        `Backend returned code ${error.status},
        body was: ${error.error.detail}`
      );
      messageStatus = error.status.toString();
      message = error.error.detail;
    }
    // Return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      [message, messageStatus]
    );
  }
}
