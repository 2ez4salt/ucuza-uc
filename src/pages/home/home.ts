import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ActionSheetController, ModalController, Nav, AlertController} from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database/'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  axax = [];


  @ViewChild(Nav) nav: Nav;
  selectedOption: any = "Nereden";
  selectedOption2: any = "Nereye";

  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController,
              public modalCtrl: ModalController,
              public afD: AngularFireDatabase,
              public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    this.afD.list('/').valueChanges().subscribe((datas) => {
      console.table("datas", datas)
      this.axax = datas;
      console.log(this.axax)
    }, (err) => {
      console.log("probleme : ", err)
    });

  }



  neredenActionSheet() {
    var self = this;
    let airports = [
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
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Lütfen kalkış için bir havalimanı seçin',
    });

    airports.forEach(airports => {
      actionSheet.addButton({
        text: airports.airportName,
        handler: function () {
          self.selectedOption = this.text;
        }
      })
    });

    actionSheet.present();
  }

  nereyeActionSheet() {
    var self = this;
    let airports2 = [
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
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Lütfen iniş için bir havalimanı seçin',
    });

    airports2.forEach(airports2 => {
      actionSheet.addButton({
        text: airports2.airportName,
        handler: function () {
          self.selectedOption2 = this.text;
        }
      })
    });

    actionSheet.present();
  }

  sonucAction(gidis) {
    // console.log(this.selectedOption, this.selectedOption2)
    // console.log(gidis)

    var filtredFlights = this.axax.filter(item => item.departure_airport == this.selectedOption && item.arrival_airport == this.selectedOption2 && item.departure_date == gidis)
    //selectedOption'dan sonra && koyup arraydan gelen veriyi date timedan gelen gidise esitleyeceksin.
    if (filtredFlights.length == 0) {
      // console.log("Hata")
      const alert = this.alertCtrl.create({
        title: 'Uçuş Listelenemiyor',
        subTitle: 'Ya yanlış filtreleme yaptınız yada aradığınız uçuş bulunmamaktadır! Belki iki ülke arasında savaş çıkmıştır',
        buttons: ['Tamam']
      });
      alert.present();
    }
     else {
      console.table(filtredFlights)
      let profileModal = this.modalCtrl.create(FiltredResults, {filtred: filtredFlights});
      profileModal.present();
    }
  }

}

@Component({
  selector: 'page-home',
  templateUrl: 'filtredResults.html'
})
export class FiltredResults {
  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController,
              public modalCtrl: ModalController,
              public navParams: NavParams) {

  }

  filtredFlights = this.navParams.get("filtred")


}
