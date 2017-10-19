import { Observable } from 'rxjs/Observable';
import { Usuarios } from './usuarios';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  private usuarios : Subject<any> = new Subject<any>();
  public usuarios$ = this.usuarios.asObservable();

  constructor() { }

  obtenerUsuarios() : Observable <Usuarios[]> {
      this.usuarios.next(
        new Usuarios('Rafa Carmona', 10 , 5, 125, 'url')
      );

      this.usuarios.next(
        new Usuarios('Dani Carmona', 5 , 5, 100, 'url')
      );

      this.usuarios.next(
        new Usuarios('Pedro Ramirez', 4 , 5, 189, 'url')
      );

      this.usuarios.next(
        new Usuarios('Juan Ortiz', 96 , 5, 300, 'url')
      );

      this.usuarios.next(
        new Usuarios('Kondogbia ', 15 , 5, 258, 'url')
      );

  }

}
