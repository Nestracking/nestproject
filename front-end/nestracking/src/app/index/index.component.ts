import { Component, OnInit } from '@angular/core';
import { HTTPRequestService } from '../httprequest.service';
import { consumeBinding } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

ArrayThemes: Array<String>;
themes: any;
ArrayMoment: Array<String>;
moments:any;
  constructor(private httprequest: HTTPRequestService) { 
    // this.themes = object dont les clés correspondent à chaque string présente dans this.ArrayThemes 
    // Et pour chaque clés est attribué l'url de l'image correspondante en provenance de la DataBase
    this.themes ={}
    this.ArrayThemes = ['summer','love','last','history']
    this.moments ={}
    this.ArrayMoment = ['Views','Sell']
  }

  ngOnInit() {
    this.ArrayThemes.forEach((themeValue)=>{
       this.httprequest
        .Filtering([{key : "Theme", value: themeValue}])
        .subscribe((reponse) => {            
          this.themes[`${themeValue}`] = reponse[0].Pictures[0];
        })
    })
    
    this.ArrayMoment.forEach((Moment)=>{
      this.httprequest
      .Filtering([{key : Moment, value: 'All'}],`${Moment}`,-1 )
      .subscribe((reponse) => {            
        this.moments[`${Moment}`] = reponse[0].Pictures[0];
      })
    })
  
      
  }
  

  
  
  
  
}
