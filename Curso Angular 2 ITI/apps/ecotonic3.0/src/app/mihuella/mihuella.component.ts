import { UsuariosService } from './../usuarios.service';
import { Usuarios } from './../usuarios';
import { Subscription } from 'rxjs/Subscription';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mihuella',
  templateUrl: './mihuella.component.html',
  styleUrls: ['./mihuella.component.css']
})
export class MihuellaComponent implements AfterViewInit, OnDestroy {

  listaUsuarios: Usuarios [];
  subscription: Subscription;
  
  constructor( private _userService : UsuariosService) { }

  ngAfterViewInit() {
    this.subscription = this._userService.usuarios$.subscribe(usuarios => { 
      this.listaUsuarios = usuarios;
      console.log(this.listaUsuarios);
     });  
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
