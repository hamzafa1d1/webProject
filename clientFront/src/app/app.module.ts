import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MembersComponent } from './members/members.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchPageComponent } from './search-page/search-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {
  NgxMatTimepickerDirective,
  NgxMatTimepickerModule,
} from 'ngx-mat-timepicker';
import { NgxMatTimepickerAdapter } from 'ngx-mat-timepicker/lib/services/ngx-mat-timepicker-adapter';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { StatisticsComponent } from './landingPageStatistics/statistics/statistics.component';
import{FacebookModule} from "ngx-facebook";
import {FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MembersComponent,
    SignInComponent,
    ContactUsComponent,
    SearchPageComponent,
    NavBarComponent,
    ChangePasswordComponent,
    ProductComponent,
    FooterComponent,
    BusDetailsComponent,
    StatisticsComponent,
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxMatTimepickerModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    FacebookModule.forRoot(),
  ],

  providers: [
    {
      provide:'SocialAuthServiceConfig' ,
      useValue: {
        autoLogin : false ,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('677480357395708'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
