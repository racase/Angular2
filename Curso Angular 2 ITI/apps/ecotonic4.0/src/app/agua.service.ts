import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agua } from './agua.class';
import { Observable } from "rxjs/Observable";
import { LoginService } from './login.service';
import { HttpHeaders } from "@angular/common/http";
import { LoggedUserService } from './logged-user.service';

@Injectable()
export class AguaService {

  constructor(private http : HttpClient,
    private _loggedUserService : LoggedUserService) { }

  public getAll() : Observable<Agua[]> {
     let observableResponse : Observable<Agua[]> 
     = this.http.
        get(
          "https://localhost:443/ecotonic/api/agua",
          {
            headers: new HttpHeaders().set(
              'Authorization', 
              this._loggedUserService.token
            )
          }
        );

     return observableResponse;
  }

  public createAgua(miAgua : Agua) : Observable<any> {
    let response : Observable<any> = this.http.
      post("http://localhost:3000/agua", miAgua);

    return response;

  }
}
