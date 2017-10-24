import { HuellaUser } from './huella-user';
import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HuellaService {

  private huellaUsuariosSource : Subject<HuellaUser> = new Subject<HuellaUser>();
  public huellaUsuarios$ = this.huellaUsuariosSource.asObservable();

  private huellaUsuariosArraySource : Subject<HuellaUser[]> = new Subject<HuellaUser[]>();
  public huellaUsuariosArray$= this.huellaUsuariosArraySource.asObservable();
  
  constructor() { 
    
  }

  public obtenerArray() : Observable<HuellaUser[]> {
    let array : HuellaUser[] = [];

    array.push(new HuellaUser("Francisco Javier Barrena", 80, 120, 75,
      "http://frikivision.com/img/chikilicuatre.jpg"));

    array.push(new HuellaUser(
      "Carlos Soriano", 100, 60, 45,
      "http://1.bp.blogspot.com/-Um93cDGdmqo/V_qqnj0WAeI/AAAAAAAAHVw/BiEpzesfTH0mwM6Vnn8wFjO-Kx0CPDdeACK4B/s1600/Frikis%2Bal%2Bpoder%2B3.png"));
    array.push(new HuellaUser("Daniel Machancoses", 40, 160, 25,
      "http://frikivision.com/img/leonardoDantes.jpg"));
    array.push(new HuellaUser("Pau Riquelme", 150, 20, 35,
      "http://1.bp.blogspot.com/-EIqqVOCuIcE/T5HfIXEk05I/AAAAAAAAARk/NzQrgFJ5itI/s200/einstein.jpg"));
    
    this.huellaUsuariosArraySource.next(array);

    return this.huellaUsuariosArray$;
  }

  public obtenerTodasLasHuellasDeUsuarios() : Observable<HuellaUser> {
    this.huellaUsuariosSource.next(
      new HuellaUser("Francisco Javier Barrena", 80, 120, 75,
      "http://frikivision.com/img/chikilicuatre.jpg")
    );

    this.huellaUsuariosSource.next(
      new HuellaUser("Carlos Soriano", 100, 60, 45,
      "http://1.bp.blogspot.com/-Um93cDGdmqo/V_qqnj0WAeI/AAAAAAAAHVw/BiEpzesfTH0mwM6Vnn8wFjO-Kx0CPDdeACK4B/s1600/Frikis%2Bal%2Bpoder%2B3.png")
    );

    this.huellaUsuariosSource.next(
      new HuellaUser("Daniel Machancoses", 40, 160, 25,
      "http://frikivision.com/img/leonardoDantes.jpg")
    );

    this.huellaUsuariosSource.next(
      new HuellaUser("Pau Riquelme", 150, 20, 35,
      "http://1.bp.blogspot.com/-EIqqVOCuIcE/T5HfIXEk05I/AAAAAAAAARk/NzQrgFJ5itI/s200/einstein.jpg")
    );

    return this.huellaUsuarios$;
  }

}
