import {Component, ViewChild} from '@angular/core';
import {NavController, Nav, ActionSheetController} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  @ViewChild(Nav) nav: Nav;
  selectedOption: any = "Nereden";
  selectedOption2: any = "Nereye";
  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController) {

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
        text: airports.code +' - '+ airports.airportName,
        handler: function() {
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
        text: airports2.code + ' - ' + airports2.airportName,
        handler: function() {
          self.selectedOption2 = this.text;
        }
      })
    });

    actionSheet.present();
  }

  sonucAction(gidis,gelis){
    console.log(this.selectedOption,this.selectedOption2)
    console.log(gidis,gelis)
  }

}
