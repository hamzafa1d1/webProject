import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{SearchPageComponent} from "./search-page/search-page.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes: Routes = [
  {path: 'search-page' , component:SearchPageComponent},
  {path:'' , component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
