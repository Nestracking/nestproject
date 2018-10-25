import { Component, OnInit } from "@angular/core";
import { HTTPRequestService } from "../httprequest.service";
@Component({
  selector: "app-searchpage",
  templateUrl: "./searchpage.component.html",
  styleUrls: ["./searchpage.component.scss"]
})
export class SearchpageComponent implements OnInit {
  Arrows = [
    { URL: "../../assets/public/images/ArrowUP.png", Value: 1 },
    { URL: "../../assets/public/images/ArrowDown.png", Value: -1 }
  ];
  TriCriteria = [
    { Criteria: "Views", ARROW: this.Arrows[1] },
    { Criteria: "Price", ARROW: this.Arrows[1] },
    { Criteria: "Rating", ARROW: this.Arrows[1] },
    { Criteria: "Sell", ARROW: this.Arrows[1] }
  ];
  SelectedTriCriteria: string;
Stars: number;
PriceRange = '0/2000';
FilterList = [{ 'key': 'CITY', 'value': "All"},
{'key': 'COUNTRY', 'value': "All"},
{'key': 'STARS', 'value': { $gt: 0}},
{'key': 'RESTAURANTS', 'value': "All"},
{'key': 'Price', 'value': { $gt: 0 , $lt: 2000 }},
{'key': 'Theme','value': "All"}];
  constructor(private httprequest: HTTPRequestService) {}

  ngOnInit() {}

  Tri(Criteria: string) {
    console.log(Criteria);
    if (this.SelectedTriCriteria === Criteria) {

      this.TriCriteria.map(element => {

        if (element.Criteria === Criteria && element.ARROW === this.Arrows[1]) {
          element.ARROW = this.Arrows[0];

        } else if (
          element.Criteria === Criteria &&
          element.ARROW === this.Arrows[0]
        ) {
          element.ARROW = this.Arrows[1];
        }
      });

    } else {
      this.SelectedTriCriteria = Criteria;
    }
    this.httprequest.Filtering( this.SelectedTriCriteria, this.FilterList);
  }

  onKey(event: any, filter: string) { // without type info
    switch(filter){
      case 'City':
      this.FilterList[0].value = event.target.value;
      break;
      case 'Country':
      this.FilterList[1].value = event.target.value;
      break;
      case 'Themes':
      this.FilterList[5].value = event.target.value;
      break;
    }
   // HTTP REQUEST avec filter
   // reponse.filter((Lieu)=>{
   // Lieu.includes(CountrySearch)
   //})
  }

  MyStars(nbre: number){
    if( this.Stars >= nbre){
      this.Stars = nbre - 1;
    } else {
      this.Stars = nbre;
    }
    this.FilterList[2].value = { $gt: this.Stars };

    // HTTP REQUEST
  }

  Price(NewPriceRange: any){
    this.PriceRange = NewPriceRange;
   NewPriceRange = NewPriceRange.split('/');
   this.FilterList[4].value = { $gt: parseInt(NewPriceRange[0]) , $lt: parseInt(NewPriceRange[1]) };

    //HTTP REQUEST
  }

  choose(value: string){
    this.FilterList[3].value = value;
    ///HTTP REQUEST
  }
}
