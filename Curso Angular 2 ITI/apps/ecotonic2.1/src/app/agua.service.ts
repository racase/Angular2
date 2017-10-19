import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agua } from './agua.class';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AguaService {

  constructor(private http : HttpClient) { }

  public getAll() : Observable<Agua[]> {
     let observableResponse : Observable<Agua[]> 
     = this.http.
        get("http://localhost:3000/agua");

     return observableResponse;
  }

  public createAgua(miAgua : Agua) : Observable<any> {
    let response : Observable<any> = this.http.
      post("http://localhost:3000/agua", miAgua);

    return response;

  }
}
