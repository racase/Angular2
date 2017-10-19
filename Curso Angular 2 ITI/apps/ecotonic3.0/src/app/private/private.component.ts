import { Login } from './../login.class';
import { LoginService } from './../login.service';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
})
export class PrivateComponent implements AfterViewInit, OnDestroy {

  ususarioLogeado: string;
  subscription: Subscription;
  
  constructor( private _loginService : LoginService) { }

  ngAfterViewInit() {
    this.subscription = this._loginService.usuario$.subscribe(ususarioLogeado => { 
      this.ususarioLogeado = ususarioLogeado;
     });  
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
