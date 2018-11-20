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

  constructor(private router: Router, private route: ActivatedRoute, private http: HTTPRequestService) { }
id: string;
// Mettre any si ça fait chier
// Call les id avec {{id}}
  ngOnInit() {
    let Params = this.route.snapshot.paramMap;
    this.id = Params.get('id');
    console.log('this.id = ',this.id);

    this.http.getById(this.id).subscribe(response=>{
      console.log('response = ',response);
      return response
    })
  }

}
