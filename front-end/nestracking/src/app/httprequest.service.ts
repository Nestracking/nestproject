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
  Filtering(Filter: any,TriCriteria?: string, Order?: number, Chamber?: number, DateStart?: any, DateEnd?: any) {

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

console.log('ParsableFilter',ParsableFilter);
console.log(TriCriteria);
  if(TriCriteria === "" || TriCriteria === undefined){
    params = params.set('Sort', "None");
  }else{
    params = params.set('Sort', TriCriteria + '/' + Order);
  }
  // On ajoute le critère de tri en params, s'il n'y en a pas, ça vaut none, sinon, on le parse en String
  if (Chamber !== undefined){
    params = params.set('DateStart', DateStart)
    params = params.set('DateEnd', DateEnd)
   params = params.set('Chamber', Chamber.toString());
  }
    // Si les variables ne sont pas la, elles valent None
    console.log('TriCriteria',TriCriteria)
    console.log('Chamber',Chamber)

   return this.http.get(this.ServerAdress + '/filter/', { params: params });

  }
// ------USER REQUESTS--------------
UserCreate(userDatas){
  console.log(userDatas);
  return this.http.post(this.ServerAdress + '/user/', userDatas)
}

UserConnect(userDatas){
  console.log(userDatas);
  let params = new HttpParams();
 params = params.set('user', userDatas.user);
 params = params.set('password', userDatas.password);
  return this.http.get(this.ServerAdress + '/user/',{ params: params } )
}
getById(id){
  console.log('id = ',id);
  let params = new HttpParams();
  params = params.set('id', id);
  console.log('params = ', params);
  return this.http.get(this.ServerAdress + '/byId/', { params: params });
}

}
