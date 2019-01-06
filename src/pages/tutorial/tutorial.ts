import { Component, ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';

//Pages
import {LoginPage} from "../login/login";
import {TabsPage} from "../tabs/tabs";


@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {
  @ViewChild(Slides) slides: Slides;


  constructor(public navCtrl: NavController) {}
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
    localStorage.setItem('isTutorialFinished', 'true');
    this.navCtrl.setRoot(TabsPage);
  }
  goLogin(){
    localStorage.setItem('isTutorialFinished', 'true');
    this.navCtrl.setRoot(LoginPage);
  }
  goToSlide() {
    this.slides.slideTo(3, 500);
  }

}
