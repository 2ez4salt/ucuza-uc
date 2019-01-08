import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {IonicStorageModule} from '@ionic/storage';
import {FirebaseAuthentication} from '@ionic-native/firebase-authentication'

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from './config';

//Pages
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage, FiltredResults, PurchasePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {TutorialPage} from "../pages/tutorial/tutorial";
import {SignupPage} from "../pages/signup/signup";
import {ForgotPassword, LoginPage} from "../pages/login/login";


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AngularFireDatabaseModule} from "@angular/fire/database";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TutorialPage,
    SignupPage,
    LoginPage,
    ForgotPassword,
    FiltredResults,
    PurchasePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Ocak', 'Subat', 'Mart','Nisan','Mayis','Haziran','Temmuz','Agustos','Eylul','Ekim','Kasim','Aralik'],
      monthShortNames: ['Oca','Sub','Mar','Nis','May','Haz','Tem','Agu','Eyl', 'Eki','Kas','Ara'],
      dayNames: ['Pazartesi','Sali','Carsamba','Persembe','Cuma', 'Cumartesi', 'Pazar'],
      dayShortNames: ['Pzt','Sal','Car','Per','Cum','Cts','Paz'],
      min: [2019-1-8],
      max: [2020-12-31],
      scrollAssist: false
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TutorialPage,
    SignupPage,
    LoginPage,
    ForgotPassword,
    FiltredResults,
    PurchasePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseAuthentication,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {
}
