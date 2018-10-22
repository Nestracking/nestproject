import { Component, OnInit } from "@angular/core";

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

  constructor() {}

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
    //FAIRE HTTP REQUEST
  }
}
