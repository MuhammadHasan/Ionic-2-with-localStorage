import {Component} from '@angular/core';
import {Platform, ionicBootstrap, Storage, LocalStorage} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login';
import {SignupPage} from './pages/signup/signup';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  local:any = new Storage(LocalStorage);
  rootPage: any 
  //local_Users:any[];
  login_User = this.local.get('login');

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    if(this.login_User.__zone_symbol__value !== null){
      this.rootPage = HomePage;
    }else{
      this.rootPage = LoginPage;
    }
  }
}

ionicBootstrap(MyApp);
