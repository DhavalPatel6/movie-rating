import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }
  login(uname: string, pwd: string) {
    if(uname === 'admin' && pwd === '1234'){
      return 200;
    }
    else{
      return 401;
    }
  }
  logout(){
    this._router.navigate(['login']);
  }
}
