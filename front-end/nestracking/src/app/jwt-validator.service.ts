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
  authenticate():boolean{
    var userJwt = localStorage.getItem('JWT');
    let params = new HttpParams();
    console.log('authenticate userJwt : ',userJwt);
    params = params.set('jwt', userJwt);
    console.log('PARAMS',params);
    let jwtValidator = this.http.get(this.ServerAdress + '/jwt/',{ params: params } ).subscribe(response =>{
      let rep : any = response
      console.log('RESPONse jwtVerified',rep);
      console.log('RESPONSE',rep.jwt);
    })
    
    if(jwtValidator){
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
