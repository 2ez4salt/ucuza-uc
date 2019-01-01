import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  /*
    airports: Array<any> = [
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
  //TODO: 1) Slideların en sonunda 2 buton var. "Devam et" butonu HomePage e yönleniyor. nav.Ctrl.push metodu ile.
  // Bu da HomePage sayfasındaki navbarda "Geri" fonksiyonu ile beraber geliyor. Gelmesin. HomePage direk root olsun.

  //TODO: 2)Slide'ın sonundaki "Giriş Yap" butonu LoginPage'e yönlenmiyor. Yönlensin.

}
