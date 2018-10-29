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
  // Liste qui référence les flèches pour l'outil de tri, on attribue une Image et une valeur

  TriCriteria = [
    { Criteria: "Views", ARROW: this.Arrows[1] },
    { Criteria: "Price", ARROW: this.Arrows[1] },
    { Criteria: "Rating", ARROW: this.Arrows[1] },
    { Criteria: "Sell", ARROW: this.Arrows[1] }
  ];
  // Tout les outils de tri avec la flêche et la valeur correspondante

  SelectedTriCriteria: string;
  // Critère de Tri Sélectionner
  SelectedOrder = 1;
  // Ordre de tri par défaut

  Stars: number;
  // Une variable pour les étoiles
  PriceRange = "0/2000";
  // Une variable pour l'écart de prix.

  FilterList = [
    { key: "CITY", value: "All" },
    { key: "COUNTRY", value: "All" },
    { key: "STARS", value: { $gte: 0 } },
    { key: "RESTAURANTS", value: "All" },
    { key: "Price", value: { $gte: 0, $lt: 2000 } },
    { key: "Theme", value: "All" }
  ];
  // La liste des filtres avec la valeur associé
  constructor(private httprequest: HTTPRequestService) {}

  ngOnInit() {}

  Tri(Criteria: string, Order: number) {
    // Quand on trie
    console.log(Criteria);
    if (this.SelectedTriCriteria === Criteria) {
      // Si le critère sélectionné l'était déja
      Order = 0 - Order;
      // On inverse l'ordre (-1 devient 1 et 1 devient -1)
      this.TriCriteria.map(element => {
        if (element.Criteria === Criteria && element.ARROW === this.Arrows[1]) {
          element.ARROW = this.Arrows[0];
        } else if (
          element.Criteria === Criteria && element.ARROW === this.Arrows[0]) {
          element.ARROW = this.Arrows[1];
        }
      });
      // On change la flèche associé au critère
    } else {
      this.SelectedTriCriteria = Criteria;
      // Si ce n'était pas sélectionné, on change l'objet sélectionné
    }
    this.SelectedOrder = Order;
    // Ordre de l'objet sélectionner
    this.httprequest.Filtering(
      this.SelectedTriCriteria,
      this.SelectedOrder,
      this.FilterList
    );
    // Requete DB
  }

  onKey(event: any, filter: string) {
    // without type info
    // Quand on entre du texte.
    switch (filter) {
      case "City":
        this.FilterList[0].value = event.target.value;
        break;
      case "Country":
        this.FilterList[1].value = event.target.value;
        break;
      case "Themes":
        this.FilterList[5].value = event.target.value;
        break;
    }
    // On change la valeur du filtre selon le type de filtre qu'on modifie

    this.httprequest.Filtering(
      this.SelectedTriCriteria,
      this.SelectedOrder,
      this.FilterList
    );
    // Requete DB

    // HTTP REQUEST avec filter
    // reponse.filter((Lieu)=>{
    // Lieu.includes(CountrySearch)
    //})
  }

  MyStars(nbre: number) {
    // Quand on sélectionne une étoile
    if (this.Stars >= nbre) {
      this.Stars = nbre - 1;
      // Si l'étoile est déja affiché, on l'efface
    } else {
      this.Stars = nbre;
      // Sinon on l'affiche
    }
    this.FilterList[2].value = { $gte: this.Stars };
    // On change la valeur dans l'objet
    this.httprequest.Filtering(
      this.SelectedTriCriteria,
      this.SelectedOrder,
      this.FilterList
    );
  }

  Price(NewPriceRange: any) {
    // Quand on choisit un écart de prix
    this.PriceRange = NewPriceRange;
    // On le change dans la variable des Prix
    NewPriceRange = NewPriceRange.split("/");
    this.FilterList[4].value = {
      $gte: parseInt(NewPriceRange[0]),
      $lt: parseInt(NewPriceRange[1])
    };
    // On split les valeurs et les intègres dans le Filtre.
    this.httprequest.Filtering(
      this.SelectedTriCriteria,
      this.SelectedOrder,
      this.FilterList
    );
  }

  choose(value: string) {
    // Quand on clique
    this.FilterList[3].value = value;
    // La valeur change
    this.httprequest.Filtering(
      this.SelectedTriCriteria,
      this.SelectedOrder,
      this.FilterList
    );
  }
}
