import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private _loginService: LoginService){

  }


  login(): void{
    this._loginService.changeIsVerified();
    
  }
  
  
}
