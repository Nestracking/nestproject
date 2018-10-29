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
  Filtering(TriCriteria: string, Order: number, Filter: any, Chamber: number, DateStart: any, DateEnd: any) {

    // Set query criterias

    let params = new HttpParams();
    // On crée un params
let ParsableFilter ="";
// On créer une variable vide, params filter
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
// Les filtres sont sorti sous forme de prix et les intègre au params
    // Set sort criterias

console.log(ParsableFilter);
  if(TriCriteria === "" || TriCriteria === undefined){
    params = params.set('Sort', "None");
  }else{
    params = params.set('Sort', TriCriteria + '/' + Order);
  }
  // On ajoute le critère de tri en params, s'il n'y en a pas, ça vaut none, sinon, on le parse en String
    params = params.set('DateStart', DateStart)
    params = params.set('DateEnd', DateEnd)


   params = params.set('Chamber', Chamber.toString());
    // Si les variables ne sont pas la, elles valent None
    console.log(TriCriteria)
    console.log(Chamber)

    this.http.get(this.ServerAdress + '/Filter', { params: params }).subscribe((reponse) => {
      console.log(reponse);
      return reponse;
    })

  }
}
