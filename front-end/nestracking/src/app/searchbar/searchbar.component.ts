import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
DateStart;
DateEnd;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  Date(type: string, event: MatDatepickerInputEvent<Date>) {
    // On récupère une string qui nous dit s'il s'agit de la date de début ou de la date de fin.
    // On récupère également la valeur de la date
    if (type === "Start") {
      this.DateStart = moment(event.target.value).format("DD MM YYYY");
      // On utilise la librairie moment.js pour transformer la date de l'event en une string au format (Jour Mois Année)
    }

    if (type === "End") {
      this.DateEnd = moment(event.target.value).format("DD MM YYYY");
      // On utilise la librairie moment.js pour transformer la date de l'event en une string au format (Jour Mois Année)
    }
    // console.log("this.DateStart = ",this.DateStart);
    // console.log("this.DateEnd = ",this.DateEnd);
  }
  onSubmit(inputValues){
      
    let OurRoute :string = `/searchpage/${inputValues.country}/${inputValues.number}/${this.DateStart}/${this.DateEnd}`;
    console.log(OurRoute);
    this.router.navigate([OurRoute])
  }
}
