import { BeforeandafterComponent } from './beforeandafter/beforeandafter.component';
import { ContactComponent } from './contact/contact.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MakeAPaymentComponent } from './make-a-payment/make-a-payment.component';
import { MeetthedoctorsComponent } from './meetthedoctors/meetthedoctors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
  { path: 'beforeandafter', component: BeforeandafterComponent },
  { path: 'main', component: MainpageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'doctors', component: MeetthedoctorsComponent },
  { path: 'payments', component: MakeAPaymentComponent },
  { path: '',   component: MainpageComponent  },
  { path: '**', component: MainpageComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
