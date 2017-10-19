import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;
  remember: boolean;
  
  constructor( private router: Router , private _logingService: LoginService ) { }

  ngOnInit() {
  }

  doLogin(): void {
    this._logingService.doLogin(this.user, this.pass).subscribe(
     (data) => {
        if(data.token){
          this.router.navigate(['private']);
        } 
     },
     (error) => {
        console.log("No autorizado", error);
     } 
    );
  }

}
