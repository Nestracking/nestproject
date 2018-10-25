import { Routes } from "@angular/router";
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { IndexComponent } from '../index/index.component';
import { SearchpageComponent } from '../searchpage/searchpage.component';
import { DestinationComponent } from '../destination/destination.component';
import { ContactComponent } from "../contact/contact.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";


export const routes: Routes = [
    {path:'',redirectTo:'index', pathMatch:'full'},
    {path:'index', component:IndexComponent},
    {path:'searchbar', component:SearchbarComponent},
    {path:'searchpage', component:SearchpageComponent},
    {path:'product', component:DestinationComponent},
    {path:'contact', component:ContactComponent},
    {path: '**', component: PageNotFoundComponent},
]