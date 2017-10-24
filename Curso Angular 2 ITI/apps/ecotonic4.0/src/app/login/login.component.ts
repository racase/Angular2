import { LoggedUserService } from '../logged-user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordIntroducido : string;
  usuarioIntroducido : string;


  constructor(private router: Router,
    private loginService : LoginService,
    private loggedUserService : LoggedUserService) { }

  ngOnInit() {
  }

  doLogin() {
    console.log("Parametros recibidos " + this.usuarioIntroducido + "-" + this.passwordIntroducido);

    this.loginService.login(
      this.usuarioIntroducido,
      this.passwordIntroducido).subscribe((data) => {
        if(data.token) {
          this.loggedUserService.isLoggedIn = true;
          this.loggedUserService.token = data.token;
          this.loggedUserService.fullname = data.user.fullname;
          
          this.router.navigate(['private']);
        }
        else {
          console.log("Error, no autenticado");
        }
      },
      (error) => {
        console.log("No autorizado");
      })
  }

}
