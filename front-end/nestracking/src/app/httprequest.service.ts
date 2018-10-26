import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPRequestService {
ServerAdress = "http://localhost:8014";
  constructor(private http: HttpClient) { }

  /**
   * Cette méthode est appelée depuis XXX, et 
   * est chargée de construire et exécuter la requête de filtrage/tri des réservations
   * 
   * @param TriCriteria 
   * @param Order 
   * @param Filter 
   * @param Dates 
   * @param Chamber 
   */
  Filtering(TriCriteria: string, Order: number, Filter: any, Dates?: string, Chamber?: string) {

    // Set query criterias

    let params = new HttpParams();
let ParsableFilter ="";
    Filter.forEach(obj => {
      if(obj.key === "STARS"){
        ParsableFilter += '{"key":'+ `"${obj.key}"` + ',"value":{"$gte":' + `${obj.value.$gte}`+ '}},';
      }else if(obj.key === "Price"){
        ParsableFilter += '{"key":' + `"${obj.key}"` + ',"value":{"$gte":' + `${obj.value.$gte}` + ',"$lt":'+ `${obj.value.$lt}`+'}},';
      }
      else {
        ParsableFilter += '{"key":' + `"${obj.key}"` + ',"value":' + `"${obj.value}"` + '},';
      }
    });
    ParsableFilter = ParsableFilter.substr(0, ParsableFilter.length-1);
    params = params.set('Filter', ParsableFilter);

    // Set sort criterias

console.log(ParsableFilter);
  if(TriCriteria === "" || TriCriteria === undefined){
    params = params.set('Sort', "None");
  }else{
    params = params.set('Sort', TriCriteria + '/' + Order);
  }
    if (Dates === undefined) {
      Dates = "None";
    }
    params = params.set('Dates', Dates);

    if (Chamber === undefined) {
      Chamber = "None";
    }
   params = params.set('Chamber', Chamber);

    console.log(TriCriteria)
    console.log(Chamber)

    this.http.get(this.ServerAdress + '/Filter', { params: params }).subscribe((reponse) => {
      console.log(reponse);
      return reponse;
    })

  }
}
