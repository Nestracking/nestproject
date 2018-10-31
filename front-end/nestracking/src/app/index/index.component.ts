import { Component, OnInit } from '@angular/core';
import { HTTPRequestService } from '../httprequest.service';
// import { FilterService } from '../filter.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private httprequest: HTTPRequestService) { }

  ngOnInit() {
    let themeSun= this.httprequest.Filtering([{key : "Views", value: "All"}],'Views',-1).subscribe((reponse) => {
      console.log('reponse',reponse);      
    })
    
    console.log(themeSun);
  }

  
}
