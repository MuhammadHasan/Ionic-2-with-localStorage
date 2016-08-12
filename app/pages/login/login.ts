import { Component } from '@angular/core';
import { NavController, Storage, LocalStorage } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {HomePage} from '../home/home';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  local:any = new Storage(LocalStorage);
  username;
  password;
  myvalue;
  constructor(private navCtrl: NavController) {

  }

  loginData = [{username : this.username ,password: this.password}];
  local_login = this.local.get('signup').then(data => { this.local_login = JSON.parse(data)});;
  login(){
    if (this.username !== '' && this.password !== '') {
      //this.local_login = this.local.get('signup').then(data => { this.loginData = JSON.parse(data)});
      //console.log(local_login,this.loginData);

        for (var i = 0; i < this.local_login.length; i++) {
          if (this.local_login[i].username === this.username && this.local_login[i].password === this.password) {
            console.log(this.local_login[i].username + ' ' + this.local_login[i].password);
            this.loginData = [{username : this.username ,password: this.password}];
            this.local.set('login', JSON.stringify(this.loginData));
            this.goToHome()
          }
          else {
            this.myvalue = true;
          }
        }
    }
  }
  goToSignup(){
    this.navCtrl.push(SignupPage);
  }
  goToHome(){
    this.navCtrl.push(HomePage);
  }

}