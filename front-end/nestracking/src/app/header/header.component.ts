import { Component, OnInit } from '@angular/core';
import { JwtValidatorService } from '../jwt-validator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 isConnect;
  constructor(private jwtService : JwtValidatorService) { }

  ngOnInit() {
    console.log(this.jwtService.isLoggedIn());
    if(this.jwtService.isLoggedIn() === true){
      this.isConnect = 'Connecté';
    }else{
      this.isConnect = 'Déconnecté'
    }
  }

}
