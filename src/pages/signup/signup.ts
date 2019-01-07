import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "@angular/fire/auth";
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public alertCtrl: AlertController) {
  }

  async signUpAction(email, pass) {

    this.afAuth.auth.createUserWithEmailAndPassword(email, pass).then(auth => {
      let alert = this.alertCtrl.create({
        title: 'Başarılı',
        subTitle: "Artık ucuza bilet alabilirsiniz",
        buttons: ['Tamam']
      });
      alert.present();
    })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Başarısız',
          subTitle: "Tekrar Deneyiniz",
          buttons: ['Tamam']
        });
        alert.present();
      })
  }
}
