import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loggedUser : boolean = false;


  constructor(private _loginService : LoginService) {
    
  }

  ngOnInit() {
    this.loggedUser = this._loginService.isLoggedUser();
  }

  
}
