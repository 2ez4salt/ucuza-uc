import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {

  constructor(public navCtrl: NavController) {}
  slides = [
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
    this.navCtrl.push(HomePage);
  }
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
}
