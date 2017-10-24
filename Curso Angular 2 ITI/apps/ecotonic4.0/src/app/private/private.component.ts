import { LoggedUserService } from '../logged-user.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  nombre : String;

  constructor(private _loggedUserService : LoggedUserService) { }

  ngOnInit() {
    this.nombre = this._loggedUserService.fullname;
  }

}
