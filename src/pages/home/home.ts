import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ActionSheetController,ModalController,Nav} from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database/'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  axax=[];


  @ViewChild(Nav) nav: Nav;
  selectedOption: any = "Nereden";
  selectedOption2: any = "Nereye";
  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController,
              public modalCtrl:ModalController,
              public afD:AngularFireDatabase) {

  }

  ionViewDidLoad(){
    this.afD.list('/').valueChanges().subscribe((datas) => {
      console.table("datas", datas)
      this.axax= datas;
      console.log(this.axax)
    },(err)=>{
      console.log("probleme : ", err)
    });

  }

  Seferler= [
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 242,
      "Kod": "TK89702",
      "available_seats": 13
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 82,
      "Kod": "TK30351",
      "available_seats": 52
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 297,
      "Kod": "TK23849",
      "available_seats": 49
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 382,
      "Kod": "TK85307",
      "available_seats": 15
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 243,
      "Kod": "TK31696",
      "available_seats": 32
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 328,
      "Kod": "TK78471",
      "available_seats": 0
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 282,
      "Kod": "TK32682",
      "available_seats": 59
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 257,
      "Kod": "TK39819",
      "available_seats": 11
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 94,
      "Kod": "TK27932",
      "available_seats": 44
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 235,
      "Kod": "TK30988",
      "available_seats": 21
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 356,
      "Kod": "TK39381",
      "available_seats": 40
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 155,
      "Kod": "TK47125",
      "available_seats": 23
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 89,
      "Kod": "TK33096",
      "available_seats": 6
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 220,
      "Kod": "TK84860",
      "available_seats": 5
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 282,
      "Kod": "TK89556",
      "available_seats": 0
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 103,
      "Kod": "TK18611",
      "available_seats": 34
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 82,
      "Kod": "TK48137",
      "available_seats": 4
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 205,
      "Kod": "TK46737",
      "available_seats": 4
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 447,
      "Kod": "TK75599",
      "available_seats": 23
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "8.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 226,
      "Kod": "TK20619",
      "available_seats": 9
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 183,
      "Kod": "TK27526",
      "available_seats": 6
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 185,
      "Kod": "TK18456",
      "available_seats": 2
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 138,
      "Kod": "TK11263",
      "available_seats": 26
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 174,
      "Kod": "TK38228",
      "available_seats": 40
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 184,
      "Kod": "TK65777",
      "available_seats": 49
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 210,
      "Kod": "TK67501",
      "available_seats": 32
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 474,
      "Kod": "TK25556",
      "available_seats": 22
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 228,
      "Kod": "TK39478",
      "available_seats": 51
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 454,
      "Kod": "TK69766",
      "available_seats": 52
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 351,
      "Kod": "TK35028",
      "available_seats": 26
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 251,
      "Kod": "TK97424",
      "available_seats": 0
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "1:00",
      "Fiyat": 114,
      "Kod": "TK79357",
      "available_seats": 14
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 483,
      "Kod": "TK15039",
      "available_seats": 42
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 495,
      "Kod": "TK93422",
      "available_seats": 37
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 339,
      "Kod": "TK10414",
      "available_seats": 38
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 352,
      "Kod": "TK92589",
      "available_seats": 20
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 441,
      "Kod": "TK92647",
      "available_seats": 60
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 80,
      "Kod": "TK71794",
      "available_seats": 51
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 260,
      "Kod": "TK15337",
      "available_seats": 47
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "9.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 301,
      "Kod": "TK19453",
      "available_seats": 40
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 476,
      "Kod": "TK87929",
      "available_seats": 43
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "1:00",
      "Fiyat": 367,
      "Kod": "TK12275",
      "available_seats": 16
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 347,
      "Kod": "TK71158",
      "available_seats": 42
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 435,
      "Kod": "TK92816",
      "available_seats": 20
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 285,
      "Kod": "TK33897",
      "available_seats": 52
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 346,
      "Kod": "TK88589",
      "available_seats": 9
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 268,
      "Kod": "TK31851",
      "available_seats": 27
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 429,
      "Kod": "TK93961",
      "available_seats": 3
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 343,
      "Kod": "TK47477",
      "available_seats": 33
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 185,
      "Kod": "TK49822",
      "available_seats": 57
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 170,
      "Kod": "TK62856",
      "available_seats": 23
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 145,
      "Kod": "TK91960",
      "available_seats": 7
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 496,
      "Kod": "TK23591",
      "available_seats": 43
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 103,
      "Kod": "TK23268",
      "available_seats": 58
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 388,
      "Kod": "TK01039",
      "available_seats": 37
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 225,
      "Kod": "TK54400",
      "available_seats": 57
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 442,
      "Kod": "TK27116",
      "available_seats": 26
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 197,
      "Kod": "TK87655",
      "available_seats": 45
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 487,
      "Kod": "TK00098",
      "available_seats": 30
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "10.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 112,
      "Kod": "TK15666",
      "available_seats": 55
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 449,
      "Kod": "TK10432",
      "available_seats": 53
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 198,
      "Kod": "TK75535",
      "available_seats": 60
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 144,
      "Kod": "TK38014",
      "available_seats": 43
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 487,
      "Kod": "TK96933",
      "available_seats": 45
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 368,
      "Kod": "TK59522",
      "available_seats": 45
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 329,
      "Kod": "TK76791",
      "available_seats": 55
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 375,
      "Kod": "TK13263",
      "available_seats": 52
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 213,
      "Kod": "TK87618",
      "available_seats": 39
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 111,
      "Kod": "TK62117",
      "available_seats": 48
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 469,
      "Kod": "TK30454",
      "available_seats": 45
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 372,
      "Kod": "TK96331",
      "available_seats": 57
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 358,
      "Kod": "TK12339",
      "available_seats": 40
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 447,
      "Kod": "TK39046",
      "available_seats": 50
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 244,
      "Kod": "TK76789",
      "available_seats": 25
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 275,
      "Kod": "TK94332",
      "available_seats": 37
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 135,
      "Kod": "TK26827",
      "available_seats": 56
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 479,
      "Kod": "TK61778",
      "available_seats": 20
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 316,
      "Kod": "TK03775",
      "available_seats": 5
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 291,
      "Kod": "TK58436",
      "available_seats": 18
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "11.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 451,
      "Kod": "TK83207",
      "available_seats": 17
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 373,
      "Kod": "TK40303",
      "available_seats": 31
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 347,
      "Kod": "TK44897",
      "available_seats": 6
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 322,
      "Kod": "TK24827",
      "available_seats": 49
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 465,
      "Kod": "TK79631",
      "available_seats": 25
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 128,
      "Kod": "TK56365",
      "available_seats": 38
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 203,
      "Kod": "TK19558",
      "available_seats": 58
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 267,
      "Kod": "TK65926",
      "available_seats": 11
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 279,
      "Kod": "TK23485",
      "available_seats": 20
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 182,
      "Kod": "TK03923",
      "available_seats": 59
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 274,
      "Kod": "TK83661",
      "available_seats": 18
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 173,
      "Kod": "TK14309",
      "available_seats": 4
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 220,
      "Kod": "TK19253",
      "available_seats": 39
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 471,
      "Kod": "TK10756",
      "available_seats": 34
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 409,
      "Kod": "TK54977",
      "available_seats": 38
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 141,
      "Kod": "TK58546",
      "available_seats": 32
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 424,
      "Kod": "TK33505",
      "available_seats": 4
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 241,
      "Kod": "TK23222",
      "available_seats": 59
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 370,
      "Kod": "TK33601",
      "available_seats": 0
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 272,
      "Kod": "TK75229",
      "available_seats": 43
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "12.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 453,
      "Kod": "TK83354",
      "available_seats": 24
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 198,
      "Kod": "TK16720",
      "available_seats": 43
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 207,
      "Kod": "TK57672",
      "available_seats": 51
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 331,
      "Kod": "TK10286",
      "available_seats": 60
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 297,
      "Kod": "TK90659",
      "available_seats": 60
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 195,
      "Kod": "TK71804",
      "available_seats": 34
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 394,
      "Kod": "TK20479",
      "available_seats": 39
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 474,
      "Kod": "TK39815",
      "available_seats": 10
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 96,
      "Kod": "TK75258",
      "available_seats": 8
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 369,
      "Kod": "TK54631",
      "available_seats": 14
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 222,
      "Kod": "TK84715",
      "available_seats": 42
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 465,
      "Kod": "TK23109",
      "available_seats": 34
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 229,
      "Kod": "TK30319",
      "available_seats": 28
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 305,
      "Kod": "TK29093",
      "available_seats": 33
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 394,
      "Kod": "TK54809",
      "available_seats": 59
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 112,
      "Kod": "TK54904",
      "available_seats": 40
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 406,
      "Kod": "TK34096",
      "available_seats": 18
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 304,
      "Kod": "TK01949",
      "available_seats": 58
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 307,
      "Kod": "TK83328",
      "available_seats": 53
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 187,
      "Kod": "TK60122",
      "available_seats": 51
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "13.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 482,
      "Kod": "TK51497",
      "available_seats": 24
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 254,
      "Kod": "TK96683",
      "available_seats": 19
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 159,
      "Kod": "TK69555",
      "available_seats": 59
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 403,
      "Kod": "TK22706",
      "available_seats": 4
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 190,
      "Kod": "TK59573",
      "available_seats": 26
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 415,
      "Kod": "TK85219",
      "available_seats": 25
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 472,
      "Kod": "TK45354",
      "available_seats": 43
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 361,
      "Kod": "TK50221",
      "available_seats": 55
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 86,
      "Kod": "TK51212",
      "available_seats": 45
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 255,
      "Kod": "TK31018",
      "available_seats": 54
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 210,
      "Kod": "TK76340",
      "available_seats": 34
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 111,
      "Kod": "TK01394",
      "available_seats": 32
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 494,
      "Kod": "TK93460",
      "available_seats": 23
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 163,
      "Kod": "TK71936",
      "available_seats": 54
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 145,
      "Kod": "TK68207",
      "available_seats": 57
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 437,
      "Kod": "TK84072",
      "available_seats": 24
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 411,
      "Kod": "TK64162",
      "available_seats": 52
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 108,
      "Kod": "TK54404",
      "available_seats": 34
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 176,
      "Kod": "TK06460",
      "available_seats": 4
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 321,
      "Kod": "TK22544",
      "available_seats": 8
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "14.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 244,
      "Kod": "TK79053",
      "available_seats": 44
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 302,
      "Kod": "TK25977",
      "available_seats": 41
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 288,
      "Kod": "TK77388",
      "available_seats": 20
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 421,
      "Kod": "TK07904",
      "available_seats": 44
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 435,
      "Kod": "TK30794",
      "available_seats": 0
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 471,
      "Kod": "TK68301",
      "available_seats": 53
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 174,
      "Kod": "TK71630",
      "available_seats": 33
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 404,
      "Kod": "TK48741",
      "available_seats": 59
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 372,
      "Kod": "TK18582",
      "available_seats": 17
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 131,
      "Kod": "TK87260",
      "available_seats": 13
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 482,
      "Kod": "TK93579",
      "available_seats": 46
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 349,
      "Kod": "TK82765",
      "available_seats": 5
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 261,
      "Kod": "TK21186",
      "available_seats": 0
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 500,
      "Kod": "TK72483",
      "available_seats": 5
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 232,
      "Kod": "TK20956",
      "available_seats": 4
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 222,
      "Kod": "TK99800",
      "available_seats": 39
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 177,
      "Kod": "TK04806",
      "available_seats": 10
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 307,
      "Kod": "TK70570",
      "available_seats": 8
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 107,
      "Kod": "TK15345",
      "available_seats": 59
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 101,
      "Kod": "TK71701",
      "available_seats": 60
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "15.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 211,
      "Kod": "TK48994",
      "available_seats": 54
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 400,
      "Kod": "TK32382",
      "available_seats": 5
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 317,
      "Kod": "TK16342",
      "available_seats": 12
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 211,
      "Kod": "TK44674",
      "available_seats": 58
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 471,
      "Kod": "TK34189",
      "available_seats": 19
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 359,
      "Kod": "TK53112",
      "available_seats": 30
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 89,
      "Kod": "TK88641",
      "available_seats": 36
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 438,
      "Kod": "TK76695",
      "available_seats": 51
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 187,
      "Kod": "TK86260",
      "available_seats": 49
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 421,
      "Kod": "TK06792",
      "available_seats": 32
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 461,
      "Kod": "TK34504",
      "available_seats": 41
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 166,
      "Kod": "TK77103",
      "available_seats": 38
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 90,
      "Kod": "TK20794",
      "available_seats": 33
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 362,
      "Kod": "TK65415",
      "available_seats": 33
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 300,
      "Kod": "TK66698",
      "available_seats": 35
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 350,
      "Kod": "TK20417",
      "available_seats": 46
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 288,
      "Kod": "TK08541",
      "available_seats": 47
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 194,
      "Kod": "TK07300",
      "available_seats": 6
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 479,
      "Kod": "TK02564",
      "available_seats": 5
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 135,
      "Kod": "TK06893",
      "available_seats": 29
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "16.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 305,
      "Kod": "TK34501",
      "available_seats": 41
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 344,
      "Kod": "TK51071",
      "available_seats": 0
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "1:00",
      "Fiyat": 297,
      "Kod": "TK19074",
      "available_seats": 8
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "1:00",
      "Fiyat": 134,
      "Kod": "TK89517",
      "available_seats": 59
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 355,
      "Kod": "TK84380",
      "available_seats": 16
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 235,
      "Kod": "TK47700",
      "available_seats": 55
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 240,
      "Kod": "TK54880",
      "available_seats": 12
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 322,
      "Kod": "TK80521",
      "available_seats": 55
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 299,
      "Kod": "TK69415",
      "available_seats": 0
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 437,
      "Kod": "TK59477",
      "available_seats": 22
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 96,
      "Kod": "TK24656",
      "available_seats": 56
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 130,
      "Kod": "TK64495",
      "available_seats": 36
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 321,
      "Kod": "TK58514",
      "available_seats": 26
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 164,
      "Kod": "TK00368",
      "available_seats": 15
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 160,
      "Kod": "TK65710",
      "available_seats": 44
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 196,
      "Kod": "TK31584",
      "available_seats": 33
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 84,
      "Kod": "TK33812",
      "available_seats": 51
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 324,
      "Kod": "TK89482",
      "available_seats": 0
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 236,
      "Kod": "TK14895",
      "available_seats": 51
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 300,
      "Kod": "TK17778",
      "available_seats": 20
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "17.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 159,
      "Kod": "TK74938",
      "available_seats": 1
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 243,
      "Kod": "TK85590",
      "available_seats": 39
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 214,
      "Kod": "TK27800",
      "available_seats": 20
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 185,
      "Kod": "TK16706",
      "available_seats": 51
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 433,
      "Kod": "TK02989",
      "available_seats": 31
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 240,
      "Kod": "TK10907",
      "available_seats": 36
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 247,
      "Kod": "TK95232",
      "available_seats": 5
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 383,
      "Kod": "TK37653",
      "available_seats": 48
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 280,
      "Kod": "TK07811",
      "available_seats": 59
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 425,
      "Kod": "TK98074",
      "available_seats": 13
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 276,
      "Kod": "TK14292",
      "available_seats": 45
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 306,
      "Kod": "TK98565",
      "available_seats": 30
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 208,
      "Kod": "TK99960",
      "available_seats": 17
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 414,
      "Kod": "TK51310",
      "available_seats": 40
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 343,
      "Kod": "TK25115",
      "available_seats": 44
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 161,
      "Kod": "TK14597",
      "available_seats": 29
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 499,
      "Kod": "TK21036",
      "available_seats": 57
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 390,
      "Kod": "TK35993",
      "available_seats": 49
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 391,
      "Kod": "TK17343",
      "available_seats": 41
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 85,
      "Kod": "TK83664",
      "available_seats": 60
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "18.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 435,
      "Kod": "TK28869",
      "available_seats": 25
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 274,
      "Kod": "TK99384",
      "available_seats": 1
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 417,
      "Kod": "TK66850",
      "available_seats": 39
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 402,
      "Kod": "TK83620",
      "available_seats": 21
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 170,
      "Kod": "TK42941",
      "available_seats": 5
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 479,
      "Kod": "TK71747",
      "available_seats": 24
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 160,
      "Kod": "TK02701",
      "available_seats": 13
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 375,
      "Kod": "TK59039",
      "available_seats": 42
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 297,
      "Kod": "TK17377",
      "available_seats": 52
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 434,
      "Kod": "TK85873",
      "available_seats": 22
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 159,
      "Kod": "TK98116",
      "available_seats": 59
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 186,
      "Kod": "TK75408",
      "available_seats": 15
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 204,
      "Kod": "TK99324",
      "available_seats": 5
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 449,
      "Kod": "TK37079",
      "available_seats": 17
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 185,
      "Kod": "TK55949",
      "available_seats": 13
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 245,
      "Kod": "TK29756",
      "available_seats": 20
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 226,
      "Kod": "TK74607",
      "available_seats": 12
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 130,
      "Kod": "TK99356",
      "available_seats": 32
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 382,
      "Kod": "TK69750",
      "available_seats": 40
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 290,
      "Kod": "TK26050",
      "available_seats": 8
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "19.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 477,
      "Kod": "TK46936",
      "available_seats": 46
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 441,
      "Kod": "TK59323",
      "available_seats": 38
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 229,
      "Kod": "TK35316",
      "available_seats": 5
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 218,
      "Kod": "TK74128",
      "available_seats": 49
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 274,
      "Kod": "TK65213",
      "available_seats": 56
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 258,
      "Kod": "TK52280",
      "available_seats": 37
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 371,
      "Kod": "TK01400",
      "available_seats": 17
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 499,
      "Kod": "TK19889",
      "available_seats": 42
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 413,
      "Kod": "TK45206",
      "available_seats": 29
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 277,
      "Kod": "TK52078",
      "available_seats": 19
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 483,
      "Kod": "TK61427",
      "available_seats": 59
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 482,
      "Kod": "TK67834",
      "available_seats": 10
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 382,
      "Kod": "TK97882",
      "available_seats": 8
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 141,
      "Kod": "TK15697",
      "available_seats": 12
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 445,
      "Kod": "TK68392",
      "available_seats": 50
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 435,
      "Kod": "TK24016",
      "available_seats": 49
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 152,
      "Kod": "TK63312",
      "available_seats": 4
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 322,
      "Kod": "TK84118",
      "available_seats": 32
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 290,
      "Kod": "TK60083",
      "available_seats": 12
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 384,
      "Kod": "TK09052",
      "available_seats": 43
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "20.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 109,
      "Kod": "TK21337",
      "available_seats": 42
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 409,
      "Kod": "TK09373",
      "available_seats": 49
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 341,
      "Kod": "TK32070",
      "available_seats": 49
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 209,
      "Kod": "TK81326",
      "available_seats": 50
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 93,
      "Kod": "TK64879",
      "available_seats": 14
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 179,
      "Kod": "TK16513",
      "available_seats": 33
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 489,
      "Kod": "TK50763",
      "available_seats": 20
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 356,
      "Kod": "TK29447",
      "available_seats": 51
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 274,
      "Kod": "TK56756",
      "available_seats": 24
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "1:00",
      "Fiyat": 177,
      "Kod": "TK99586",
      "available_seats": 44
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 334,
      "Kod": "TK20147",
      "available_seats": 60
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 343,
      "Kod": "TK71285",
      "available_seats": 4
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 138,
      "Kod": "TK93670",
      "available_seats": 3
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 152,
      "Kod": "TK13661",
      "available_seats": 29
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 401,
      "Kod": "TK62014",
      "available_seats": 3
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 493,
      "Kod": "TK66586",
      "available_seats": 18
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 116,
      "Kod": "TK77084",
      "available_seats": 31
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 192,
      "Kod": "TK51555",
      "available_seats": 7
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 89,
      "Kod": "TK24276",
      "available_seats": 13
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 189,
      "Kod": "TK33848",
      "available_seats": 58
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "21.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 445,
      "Kod": "TK05472",
      "available_seats": 40
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 176,
      "Kod": "TK42662",
      "available_seats": 33
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 263,
      "Kod": "TK52877",
      "available_seats": 17
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 396,
      "Kod": "TK72068",
      "available_seats": 3
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 499,
      "Kod": "TK78040",
      "available_seats": 36
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 250,
      "Kod": "TK00871",
      "available_seats": 15
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 185,
      "Kod": "TK95558",
      "available_seats": 42
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 104,
      "Kod": "TK11349",
      "available_seats": 45
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 257,
      "Kod": "TK50512",
      "available_seats": 31
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "1:00",
      "Fiyat": 418,
      "Kod": "TK42136",
      "available_seats": 24
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 146,
      "Kod": "TK48110",
      "available_seats": 5
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 444,
      "Kod": "TK28690",
      "available_seats": 53
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 424,
      "Kod": "TK13123",
      "available_seats": 53
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 176,
      "Kod": "TK70677",
      "available_seats": 50
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 313,
      "Kod": "TK45847",
      "available_seats": 41
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 404,
      "Kod": "TK09560",
      "available_seats": 58
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 118,
      "Kod": "TK77578",
      "available_seats": 25
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 438,
      "Kod": "TK18105",
      "available_seats": 56
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 167,
      "Kod": "TK19871",
      "available_seats": 53
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 480,
      "Kod": "TK78951",
      "available_seats": 15
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "22.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 422,
      "Kod": "TK83472",
      "available_seats": 16
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 333,
      "Kod": "TK18044",
      "available_seats": 44
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 240,
      "Kod": "TK25521",
      "available_seats": 13
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 274,
      "Kod": "TK64453",
      "available_seats": 28
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 455,
      "Kod": "TK03353",
      "available_seats": 18
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 177,
      "Kod": "TK48387",
      "available_seats": 31
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 231,
      "Kod": "TK95758",
      "available_seats": 44
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 463,
      "Kod": "TK86132",
      "available_seats": 47
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 442,
      "Kod": "TK08453",
      "available_seats": 34
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 364,
      "Kod": "TK33009",
      "available_seats": 41
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 484,
      "Kod": "TK09705",
      "available_seats": 31
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 279,
      "Kod": "TK68240",
      "available_seats": 0
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 383,
      "Kod": "TK59091",
      "available_seats": 12
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 291,
      "Kod": "TK55949",
      "available_seats": 54
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 152,
      "Kod": "TK92885",
      "available_seats": 49
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 213,
      "Kod": "TK56375",
      "available_seats": 57
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 247,
      "Kod": "TK29903",
      "available_seats": 57
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 105,
      "Kod": "TK98624",
      "available_seats": 18
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 102,
      "Kod": "TK26918",
      "available_seats": 32
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 163,
      "Kod": "TK59943",
      "available_seats": 48
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "23.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 463,
      "Kod": "TK78539",
      "available_seats": 6
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 225,
      "Kod": "TK69760",
      "available_seats": 11
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 111,
      "Kod": "TK37538",
      "available_seats": 29
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 168,
      "Kod": "TK87403",
      "available_seats": 48
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 274,
      "Kod": "TK27962",
      "available_seats": 51
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 246,
      "Kod": "TK30580",
      "available_seats": 17
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 457,
      "Kod": "TK90902",
      "available_seats": 42
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 174,
      "Kod": "TK06085",
      "available_seats": 41
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 475,
      "Kod": "TK03054",
      "available_seats": 50
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 151,
      "Kod": "TK54103",
      "available_seats": 31
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 355,
      "Kod": "TK47117",
      "available_seats": 22
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 192,
      "Kod": "TK40137",
      "available_seats": 34
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 137,
      "Kod": "TK93040",
      "available_seats": 39
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 259,
      "Kod": "TK34045",
      "available_seats": 19
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 130,
      "Kod": "TK72600",
      "available_seats": 5
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 258,
      "Kod": "TK97150",
      "available_seats": 6
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 500,
      "Kod": "TK22420",
      "available_seats": 5
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 353,
      "Kod": "TK57426",
      "available_seats": 51
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 318,
      "Kod": "TK26229",
      "available_seats": 30
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "8:00",
      "Fiyat": 236,
      "Kod": "TK39878",
      "available_seats": 15
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "24.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 226,
      "Kod": "TK43389",
      "available_seats": 53
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 192,
      "Kod": "TK75860",
      "available_seats": 28
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 81,
      "Kod": "TK99186",
      "available_seats": 47
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 164,
      "Kod": "TK64844",
      "available_seats": 8
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 262,
      "Kod": "TK28717",
      "available_seats": 14
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 116,
      "Kod": "TK43262",
      "available_seats": 43
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 80,
      "Kod": "TK24341",
      "available_seats": 56
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 299,
      "Kod": "TK03273",
      "available_seats": 2
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 215,
      "Kod": "TK37764",
      "available_seats": 15
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 133,
      "Kod": "TK29346",
      "available_seats": 51
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 483,
      "Kod": "TK03387",
      "available_seats": 27
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 346,
      "Kod": "TK62596",
      "available_seats": 42
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 173,
      "Kod": "TK17496",
      "available_seats": 37
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 437,
      "Kod": "TK65818",
      "available_seats": 24
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 217,
      "Kod": "TK73697",
      "available_seats": 52
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 131,
      "Kod": "TK06175",
      "available_seats": 34
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 443,
      "Kod": "TK98044",
      "available_seats": 26
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 106,
      "Kod": "TK10107",
      "available_seats": 53
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 338,
      "Kod": "TK90961",
      "available_seats": 28
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 298,
      "Kod": "TK21415",
      "available_seats": 19
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "25.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 245,
      "Kod": "TK85878",
      "available_seats": 26
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 475,
      "Kod": "TK43284",
      "available_seats": 23
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 464,
      "Kod": "TK39085",
      "available_seats": 20
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 446,
      "Kod": "TK65768",
      "available_seats": 43
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 232,
      "Kod": "TK70672",
      "available_seats": 56
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 431,
      "Kod": "TK92822",
      "available_seats": 57
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 233,
      "Kod": "TK80475",
      "available_seats": 33
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 443,
      "Kod": "TK34537",
      "available_seats": 57
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 226,
      "Kod": "TK60508",
      "available_seats": 47
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 148,
      "Kod": "TK99478",
      "available_seats": 20
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 307,
      "Kod": "TK08743",
      "available_seats": 0
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 494,
      "Kod": "TK68867",
      "available_seats": 50
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 443,
      "Kod": "TK32678",
      "available_seats": 43
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 394,
      "Kod": "TK68111",
      "available_seats": 51
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 220,
      "Kod": "TK31942",
      "available_seats": 27
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 211,
      "Kod": "TK98566",
      "available_seats": 57
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 151,
      "Kod": "TK52643",
      "available_seats": 48
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 478,
      "Kod": "TK11988",
      "available_seats": 5
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 483,
      "Kod": "TK94085",
      "available_seats": 43
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 99,
      "Kod": "TK38394",
      "available_seats": 38
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "26.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 190,
      "Kod": "TK30694",
      "available_seats": 20
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Los Angeles Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 163,
      "Kod": "TK58466",
      "available_seats": 52
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 127,
      "Kod": "TK29946",
      "available_seats": 2
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 155,
      "Kod": "TK92235",
      "available_seats": 35
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 109,
      "Kod": "TK15468",
      "available_seats": 7
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 330,
      "Kod": "TK34366",
      "available_seats": 57
    },
    {
      "Nereden": "Bremen Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 479,
      "Kod": "TK91981",
      "available_seats": 43
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 441,
      "Kod": "TK46652",
      "available_seats": 10
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 218,
      "Kod": "TK97581",
      "available_seats": 50
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 220,
      "Kod": "TK74336",
      "available_seats": 26
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 96,
      "Kod": "TK45584",
      "available_seats": 49
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "7:00",
      "Fiyat": 217,
      "Kod": "TK58963",
      "available_seats": 32
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "22:00",
      "Fiyat": 204,
      "Kod": "TK46481",
      "available_seats": 4
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 182,
      "Kod": "TK64092",
      "available_seats": 8
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 91,
      "Kod": "TK54301",
      "available_seats": 36
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 130,
      "Kod": "TK53499",
      "available_seats": 49
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 376,
      "Kod": "TK47679",
      "available_seats": 34
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 430,
      "Kod": "TK39241",
      "available_seats": 58
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 293,
      "Kod": "TK90964",
      "available_seats": 46
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 155,
      "Kod": "TK41043",
      "available_seats": 31
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "27.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 355,
      "Kod": "TK63312",
      "available_seats": 38
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 88,
      "Kod": "TK51575",
      "available_seats": 43
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 331,
      "Kod": "TK05389",
      "available_seats": 27
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "9:00",
      "Fiyat": 146,
      "Kod": "TK18646",
      "available_seats": 32
    },
    {
      "Nereden": "İstanbul Atatürk Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "19:00",
      "Fiyat": 352,
      "Kod": "TK91807",
      "available_seats": 0
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 305,
      "Kod": "TK25536",
      "available_seats": 40
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 137,
      "Kod": "TK29151",
      "available_seats": 0
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 182,
      "Kod": "TK64795",
      "available_seats": 40
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 417,
      "Kod": "TK21172",
      "available_seats": 44
    },
    {
      "Nereden": "Sabiha Gökçen Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "21:00",
      "Fiyat": 200,
      "Kod": "TK02277",
      "available_seats": 9
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 243,
      "Kod": "TK39670",
      "available_seats": 4
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "10:00",
      "Fiyat": 324,
      "Kod": "TK64690",
      "available_seats": 6
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 208,
      "Kod": "TK16972",
      "available_seats": 27
    },
    {
      "Nereden": "Dortmund Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "15:00",
      "Fiyat": 498,
      "Kod": "TK35165",
      "available_seats": 45
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 106,
      "Kod": "TK52656",
      "available_seats": 47
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 403,
      "Kod": "TK96639",
      "available_seats": 56
    },
    {
      "Nereden": "Duesseldorf Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "1:00",
      "Fiyat": 137,
      "Kod": "TK91359",
      "available_seats": 10
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Şakirpaşa Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 304,
      "Kod": "TK37426",
      "available_seats": 42
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "İstanbul Atatürk Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 376,
      "Kod": "TK83029",
      "available_seats": 9
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "24:00",
      "Fiyat": 306,
      "Kod": "TK73758",
      "available_seats": 11
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "28.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 144,
      "Kod": "TK27668",
      "available_seats": 33
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "3:00",
      "Fiyat": 382,
      "Kod": "TK95769",
      "available_seats": 55
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Dortmund Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "20:00",
      "Fiyat": 174,
      "Kod": "TK44199",
      "available_seats": 12
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 297,
      "Kod": "TK99987",
      "available_seats": 58
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Antalya Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 400,
      "Kod": "TK17047",
      "available_seats": 60
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 219,
      "Kod": "TK81473",
      "available_seats": 9
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "6:00",
      "Fiyat": 349,
      "Kod": "TK33921",
      "available_seats": 2
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "4:00",
      "Fiyat": 199,
      "Kod": "TK24548",
      "available_seats": 16
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 106,
      "Kod": "TK23254",
      "available_seats": 55
    },
    {
      "Nereden": "Makedonia Havalimanı",
      "Nereye": "John F Kennedy Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 247,
      "Kod": "TK92930",
      "available_seats": 18
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 388,
      "Kod": "TK02525",
      "available_seats": 2
    },
    {
      "Nereden": "Los Angeles Havalimanı",
      "Nereye": "Sabiha Gökçen Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "5:00",
      "Fiyat": 186,
      "Kod": "TK40802",
      "available_seats": 19
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Duesseldorf Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "16:00",
      "Fiyat": 223,
      "Kod": "TK74610",
      "available_seats": 34
    },
    {
      "Nereden": "Şakirpaşa Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "17:00",
      "Fiyat": 395,
      "Kod": "TK66920",
      "available_seats": 10
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "Esenboğa Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "11:00",
      "Fiyat": 303,
      "Kod": "TK88075",
      "available_seats": 43
    },
    {
      "Nereden": "Madinah Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "18:00",
      "Fiyat": 377,
      "Kod": "TK83135",
      "available_seats": 3
    },
    {
      "Nereden": "County Havalimanı",
      "Nereye": "Madinah Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "2:00",
      "Fiyat": 430,
      "Kod": "TK32903",
      "available_seats": 54
    },
    {
      "Nereden": "Antalya Havalimanı",
      "Nereye": "Adnan Menderes Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "13:00",
      "Fiyat": 210,
      "Kod": "TK10568",
      "available_seats": 22
    },
    {
      "Nereden": "John F Kennedy Havalimanı",
      "Nereye": "Bremen Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "23:00",
      "Fiyat": 411,
      "Kod": "TK50612",
      "available_seats": 29
    },
    {
      "Nereden": "Adnan Menderes Havalimanı",
      "Nereye": "County Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "14:00",
      "Fiyat": 442,
      "Kod": "TK70332",
      "available_seats": 31
    },
    {
      "Nereden": "Esenboğa Havalimanı",
      "Nereye": "Makedonia Havalimanı",
      "Gidis-Tarihi": "29.1.2019",
      "Kalkis": "12:00",
      "Fiyat": 408,
      "Kod": "TK90876",
      "available_seats": 16
    }
  ]


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
        text: airports2.airportName,
        handler: function() {
          self.selectedOption2 = this.text;
        }
      })
    });

    actionSheet.present();
  }

  sonucAction(gidis,gelis){
    console.log(this.selectedOption,this.selectedOption2)


    var filtredFlights=this.Seferler.filter(item=>item.Nereden==this.selectedOption && item.Nereye == this.selectedOption2 )
    //selectedOption'dan sonra && koyup arraydan gelen veriyi date timedan gelen gidise esitleyeceksin.
    if(filtredFlights.length==0){
      console.log("Hata")
    }
    else{
      console.table(filtredFlights)
      let profileModal = this.modalCtrl.create(FiltredResults, { filtred: filtredFlights });
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
              public modalCtrl:ModalController,
              public navParams:NavParams) {

  }
  filtredFlights = this.navParams.get("filtred")


}
