import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Pages
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from "../pages/tutorial/tutorial";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any; //TODO: Localstorage işini çözdükten sonra aşağıdaki if'i ve bu satırı yorumdan çıkar. Bir alt satırı ise sil.
  rootPage:any = TutorialPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      /*if(this.storage.get()) {
            this.rootPage = TutorialPage;
        }else{
            this.rootPage = TabsPage;
        }*/
      splashScreen.hide();
    });
  }
}
