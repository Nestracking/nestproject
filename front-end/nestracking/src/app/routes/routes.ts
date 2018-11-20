import { Routes } from "@angular/router";
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { IndexComponent } from '../index/index.component';
import { SearchpageComponent } from '../searchpage/searchpage.component';
import { DestinationComponent } from '../destination/destination.component';
import { ContactComponent } from "../contact/contact.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { InscriptionComponent } from "../inscription/inscription.component";
import { LoginComponent } from "../login/login.component";

export const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'searchpage', component: SearchpageComponent },
    { path: 'searchpage/:Country/:Chamber/:StartDate/:EndDate', component: SearchpageComponent },
    { path: 'product/:id', component: DestinationComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'login', component: LoginComponent  },
    { path: '**', component: PageNotFoundComponent },
]