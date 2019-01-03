import { Component, ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//Pages
import { HomePage } from "../home/home";
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {
  @ViewChild(Slides) slides: Slides;

  key:string = 'tutorial';

  constructor(public navCtrl: NavController, private storage: Storage) {}
  allslides = [
    {
      title: "Ucuza Uç mobil uygulamasına hoşgeldiniz",
      description: "<b>Ucuza Uç</b> ile daha önce bulamadığınız kolaylık ile uçak bileti alabileceksiniz!",
      image: "../../assets/imgs/slideimg.jpg",
    },
    {
      title: "Size Özel!",
      description: "<b>Ucuza Uç</b> mobil uygulamasında sürekli aldığınız uçak bileti tespit edilmesi halinde size en uygun uçak bileti otomatik olarak gösterilir.",
      image: "../../assets/imgs/slideimg.jpg",
    },
    {
      title: "Bizden olsun",
      description: "<b>Ucuza Uç'u</b> sürekli kullanırsanız VIP müşterilerimizden olursunuz. VIP müşterilerimize özel fırsatlardan yararlanabilirsiniz!",
      image: "../../assets/imgs/slideimg.jpg",
    }
  ];
  goHome(){
    this.navCtrl.setRoot(HomePage);
    this.storage.get('tutorial').then((key) => {

    });
  }
  goLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
  goToSlide() {
    this.slides.slideTo(3, 500);
  }

  ionViewDidLoad(){
   /* this.storage.set('name', 'Max');

    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });*/
  }

}
