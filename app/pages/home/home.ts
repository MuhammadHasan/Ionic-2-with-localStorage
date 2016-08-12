import {Component} from '@angular/core';
import {NavController, Storage, LocalStorage} from 'ionic-angular';
import {LoginPage} from '../login/login';
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  local:any = new Storage(LocalStorage);

  constructor(public navCtrl: NavController) {

  }

  logout(){
    this.local.remove('login');
    this.goToLogin();
  }

  goToLogin(){
    this.navCtrl.pop(LoginPage);
  }

  
}
