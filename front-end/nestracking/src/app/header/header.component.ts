import { Component, OnInit } from '@angular/core';
import { JwtValidatorService } from '../jwt-validator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 isConnect: any;
 _subscription: any;
  constructor(private jwtService : JwtValidatorService) { 
    this._subscription = jwtService.loggedIn.subscribe((value) => { 
      this.isConnect = value;
    });
  }

  ngOnInit() {
  }
}
