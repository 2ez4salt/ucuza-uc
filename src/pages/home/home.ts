import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Nav, ActionSheetController} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;
  //airports: Array <any> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
    /*
    this.airports = [
      {code: "IST", airportName: "İstanbul Atatürk Havalimanı", province: "İstanbul", country: "Türkiye"},
      {code: "SAW", airportName: "Sabiha Gökçen Havalimanı", province: "İstanbul", country: "Türkiye"},
      {code: "ESB", airportName: "Esenboğa Havalimanı", province: "Ankara", country: "Türkiye"},
      {code: "ADB", airportName: "Adnan Menderes Havalimanı", province: "İzmir", country: "Türkiye"},
      {code: "ADA", airportName: "Şakirpaşa Havalimanı", province: "Adana", country: "Türkiye"},
      {code: "AYT", airportName: "Antalya Havalimanı", province: "Antalya", country: "Türkiye"},
      {code: "BRE", airportName: "Bremen Havalimanı", province: "Bremen", country: "Almanya"},
      {code: "DTM", airportName: "Dortmund Havalimanı", province: "Dortmund", country: "Almanya"},
      {code: "DUS", airportName: "Duesseldorf Havalimanı", province: "Dusseldorf", country: "Almanya"},
      {code: "JFK", airportName: "John F Kennedy Havalimanı", province: "New York", country: "ABD"},
      {code: "WSG", airportName: "County Havalimanı", province: "Washington", country: "ABD"},
      {code: "LAX", airportName: "Los Angeles Havalimanı", province: "Antalya", country: "ABD"},
      {code: "SKG", airportName: "Makedonia Havalimanı", province: "Selanik", country: "Yunanistan"},
      {code: "MED", airportName: "Madinah Havalimanı", province: "Medine", country: "Suudi Arabistan"},
    ]
  */
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
