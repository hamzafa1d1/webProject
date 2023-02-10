import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MembersComponent } from './members/members.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import{MatFormField} from "@angular/material/form-field";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import{HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {NgxMatTimepickerDirective, NgxMatTimepickerModule} from "ngx-mat-timepicker";
import {NgxMatTimepickerAdapter} from "ngx-mat-timepicker/lib/services/ngx-mat-timepicker-adapter";

@NgModule({
  declarations: [

    AppComponent,
    LandingPageComponent,
    MembersComponent,
    SignInComponent,
    ContactUsComponent,
    SearchPageComponent,
    NavBarComponent,
  ],
  imports: [ NgxMatTimepickerModule, HttpClientModule, BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatCardModule, MatInputModule, MatOptionModule, MatSelectModule, MatGridListModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
