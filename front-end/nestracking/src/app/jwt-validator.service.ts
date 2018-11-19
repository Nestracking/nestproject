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
  authenticate(){
    var userJwt = localStorage.getItem('JWT');
    let params = new HttpParams();
    params = params.set('jwt', userJwt);
    console.log('userJwt', userJwt);
    let jwtValidator = this.http.get(this.ServerAdress + '/jwt/',{ params: params } ).subscribe(response =>{
      console.log('response = ', response);
      let rep : any = response
      console.log('response.validity = ', rep.Validity);
      if(rep.Validity === true){
        this.loggedIn = true;
        console.log(this.loggedIn);
        return this.loggedIn
      } else {
        this.loggedIn = false
        return this.loggedIn
      }
      
    })

   
  }
  logout() { 
    this.loggedIn = false;
  }
}
