import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
id: string;
// Mettre any si ça fait chier
// Call les id avec {{id}}
  ngOnInit() {
    let Params = this.route.snapshot.paramMap;
    this.id = Params.get('id');
  }

}
