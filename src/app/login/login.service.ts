import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root' 
  })

  export class LoginService{


    private isVerified: boolean = false;

    changeIsVerified(): void {
        if(this.isVerified)
            this.isVerified = false;
        else 
        this.isVerified = true;
    }

    canActivate(): boolean{
        return this.isVerified;
    }
  }