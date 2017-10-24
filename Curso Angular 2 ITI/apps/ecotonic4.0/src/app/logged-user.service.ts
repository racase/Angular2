import { Injectable } from '@angular/core';

@Injectable()
export class LoggedUserService {
  fullname : string = "";
  token : string = "";
  isLoggedIn : boolean = false;

  constructor() { }

}
