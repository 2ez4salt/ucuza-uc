import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
import {AngularFireAuth} from "@angular/fire/auth";
import {TabsPage} from "../tabs/tabs";
import {SignupPageModule} from "../signup/signup.module";
import {SignupPage} from "../signup/signup";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afAuth: AngularFireAuth
              ) {
  }

  ionViewDidLoad(){

  }

  loginAction(email,pass){
    console.log(email,pass)
    try{
      const index = this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      if (index) {
        this.navCtrl.setRoot(TabsPage)
      }
    }
      catch(e){
        console.error(e)
      }
    }

  loginPageSegue(){
    this.navCtrl.setRoot(SignupPage);
  }

  homePageSegue(){
    this.navCtrl.push(HomePage);
  }


}
