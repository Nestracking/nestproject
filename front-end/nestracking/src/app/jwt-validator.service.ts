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
    params = params.set('jwt', userJwt);
    console.log('userJwt', userJwt);
    let jwtValidator = this.http.get(this.ServerAdress + '/jwt/',{ params: params } ).subscribe(response =>{
      console.log('response = ', response);
      let rep : any = response
      return rep
    })

    if(jwtValidator){
      this.loggedIn = true;
    } else{
      return false
    }
   this.loggedIn = true
   return this.loggedIn
  }
  logout() { 
    this.loggedIn = false;
  }
}
