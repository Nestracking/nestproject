import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPRequestService {
ServerAdress = "http://localhost:8014";
  constructor(private http: HttpClient) { }

  Filtering(TriCriteria: string, Order: number, Filter: any, Dates?: string, Chamber?: string) {
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
<<<<<<< HEAD
    // this.http.get(this.ServerAdress + '/Filter', { params : params }).subscribe((reponse) => {
    //   console.log(reponse);
    // })
    this.http.get(this.ServerAdress + '/Filter', { params : params }).subscribe((reponse) => {
        console.log(reponse);
      })
=======
    this.http.get(this.ServerAdress + '/Filter', { params: params }).subscribe((reponse) => {
      console.log(reponse);
      return reponse;
    })
>>>>>>> bbb714a9460a1bf15fb30db036f00e4ad7c4aad1
  }
}
