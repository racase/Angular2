import { LoggedUserService } from './logged-user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Login } from './login.class';

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient,
    private _loggedUserService : LoggedUserService) { }

  login(user:string, pwd:string) : Observable<any> {
    let login : Login = new Login();

    login.username = user;
    login.password = pwd;
    login.remember = true;

    let stream : Observable<any> = this._http.post(
      "https://localhost:443/ecotonic/api/login",
      login);

    return stream;
  }

}
