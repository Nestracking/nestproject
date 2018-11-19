import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
DateStart;
DateEnd;
  constructor() { }

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
  }
}
