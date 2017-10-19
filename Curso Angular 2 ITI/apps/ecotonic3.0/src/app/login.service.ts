import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Login } from './login.class';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {
  private loggedUser : boolean = false;
  private token : string = "";

  private usuario  = new Subject<string>();
  public usuario$ = this.usuario.asObservable();

  constructor(private _http: HttpClient) { }

  login(user:string, pwd:string) : Observable<any> {
    let login : Login = new Login();

    login.username = user;
    login.password = pwd;
    login.remember = true;

    let stream : Observable<any> = this._http.post(
      "http://localhost:8080/ecotonic/api/login",
      login);

    stream.subscribe((data) => {
      this.loggedUser = true;
      this.token = data.token;
      this.usuario.next(data.user.fullname);
    },
    (error) => {
      this.loggedUser = false;
      this.token = "";
    })

    return stream;
  }

  isLoggedUser() : boolean {
    return this.loggedUser;
  }

  getCurrentUserToken() : string {
    return this.token;
  }

}
