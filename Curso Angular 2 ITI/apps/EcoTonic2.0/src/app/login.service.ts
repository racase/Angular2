import { Login } from './login';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import "rxjs/Rx";


@Injectable()
export class LoginService {

  apiUrl:string = environment.apiUrl;
  private loggedUser : boolean = false;
  private token: string = "";

  constructor( private _http: HttpClient) { 

  }

  doLogin (usuario: string, pass: string) : Observable<any>{
    let login: Login = new Login();

    login.username = usuario;
    login.password = pass;
    login.remember = true;

    let stream : Observable<any> =  this._http.post(this.apiUrl + 'login', login);

    stream.subscribe(
      (data)=> {
        this.loggedUser = true;
        this.token = data.token;
      },
      (error) => { 
        this.loggedUser = false;
      }
    );

    return stream;
  }

  isLoggedUser() : boolean {
    return this.loggedUser;
  }

  getCurrentUserToken() : string {
    return this.token;
  }

}
