import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BeforeandafterComponent } from "./beforeandafter/beforeandafter.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { ContactComponent } from "./contact/contact.component";
import { MeetthedoctorsComponent } from "./meetthedoctors/meetthedoctors.component";
import { MakeAPaymentComponent } from "./make-a-payment/make-a-payment.component";
import { NavComponent } from "./core/nav.component";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from "./app-routing.module";
import { FooterComponent } from "./core/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BeforeandafterComponent,
    MainpageComponent,
    ContactComponent,
    MeetthedoctorsComponent,
    MakeAPaymentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
