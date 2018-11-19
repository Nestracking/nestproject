import { Component, OnInit } from '@angular/core';
import { JwtValidatorService } from '../jwt-validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
  constructor(public jwtService : JwtValidatorService,private router : Router ) { 
   
  }

  ngOnInit() {
    
    
  }
  onLogout(e){
    e.preventDefault();
    console.log('On logout');
    this.jwtService.logout(); 
    this.router.navigateByUrl('/')
  }
}
