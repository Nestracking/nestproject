import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
 FilterList =[
    { key: "CITY", value: "All" },
    { key: "COUNTRY", value: "All" },
    { key: "STARS", value: { $gte: 0 } },
    { key: "RESTAURANTS", value: "All" },
    { key: "Price", value: { $gte: 0, $lt: 2000 } },
    { key: "Theme", value: "All" }
  ];
  constructor() { }
 /**
   * Cette méthode est appelée depuis XXX, et 
   * est chargée de construire et exécuter la requête de filtrage/tri des réservations
   * 
   * @param type 
   * @param value
   */
  FilterBuilder(type: string, value: any){

    if(type === undefined || value === undefined){
  let Index = this.FilterList.map(function(obj) { return obj.key; }).indexOf(type);
  this.FilterList[Index] = value;
    }

return this.FilterList;
  }

  ChamberBuilder(value: number){

  }

  DatesBuilder(value: any){

  }

}
