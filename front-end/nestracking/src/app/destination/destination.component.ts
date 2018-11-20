import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { HTTPRequestService } from '../httprequest.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  
  constructor(private router: Router, private route: ActivatedRoute, private http: HTTPRequestService) {
    this.dataDestination }
id: string;
dataDestination: any;
// Mettre any si ça fait chier
// Call les id avec {{id}}
  ngOnInit() {
    let Params = this.route.snapshot.paramMap;
    this.id = Params.get('id');
    // console.log('this.id = ',this.id);

    this.http.getById(this.id).subscribe(response=>{
      console.log('response = ',response);
      this.dataDestination = response
      console.log('this.data', this.dataDestination);
      return this.dataDestination
    })
    
  }

}
