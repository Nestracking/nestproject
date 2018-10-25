import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPRequestService {
ServerAdress = "http://localhost:8014";
  constructor(private http: HttpClient) { }

  Filtering(TriCriteria: string, FilterQuery: any, Dates?: string, Chamber?: string) {
    let params = new HttpParams();

  FilterQuery = FilterQuery.map((obj)=>{
   return JSON.stringify(obj);
  })
  FilterQuery.join('+');
    console.log();


    

    params = params.set('Filter', 'bog');
    params = params.set('Sort', TriCriteria);

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
    this.http.get(this.ServerAdress + '/Filter', { params : params }).subscribe((reponse) => {
      console.log(reponse);
    })
  }
}
