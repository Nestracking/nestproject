import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtValidatorService {

  ServerAdress = "http://localhost:8014";
  loggedIn : boolean = false;
  admin : boolean = false;

  constructor(private http: HttpClient) {
   
  }
  isLoggedIn():boolean{
    return this.loggedIn;
  }
  isAdmin():boolean{ 
    return this.admin;
  }
  authenticate(userJwt):boolean{
    let params = new HttpParams();
    console.log(userJwt);
    params = params.set('jwt', userJwt);
    console.log(params);
    let authUser = this.http.get(this.ServerAdress + '/user/',{ params: params } )
    
    if(authUser){
      this.loggedIn = true;
      // if(authUser.role === 'admin'){
      //   this.admin = true; 
      // }
      // return true;
    } else{
      return false
    }
  }
  logout() { 
    this.loggedIn = false;
  }
}
