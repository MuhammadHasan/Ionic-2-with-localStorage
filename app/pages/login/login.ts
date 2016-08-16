import { Component } from '@angular/core';
import { NavController, Storage, LocalStorage, ViewController, AlertController  } from 'ionic-angular';
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
  constructor(private navCtrl: NavController, private viewCtrl: ViewController, private alertController: AlertController) {
    //this.loginUserIfExist();
  }

  loginData = [{username : this.username ,password: this.password}];
  local_login = this.local.get('signup').then(data => { this.local_login = JSON.parse(data)});

  login(){
    if (this.username !== '' && this.password !== '') {
      //this.local_login = this.local.get('signup').then(data => { this.loginData = JSON.parse(data)});
      //console.log(local_login,this.loginData);
        var alert = true;
        for (var i = 0; i < this.local_login.length; i++) {
          if (this.local_login[i].username === this.username && this.local_login[i].password === this.password) {
            console.log(this.local_login[i].username + ' ' + this.local_login[i].password);
            this.loginData = [{username : this.username ,password: this.password}];
            this.local.set('login', JSON.stringify(this.loginData));
            this.goToHome();
            alert = false;
          }
        
        }
        if(alert == true){
          this.showAlert();
        }
          
    }
    //this.onPageWillEnter();
  }
  
  local_User = this.local.get('login').then(user => { this.local_User = JSON.parse(user)});;


  showAlert() {
    let alert = this.alertController.create({
      title: 'Invalid Data',
      subTitle: 'please type correct data!',
      buttons: ['OK']
    });
    alert.present();
  }

  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }
/*
  loginUserIfExist(){
    console.log(this.local_User)
    if(this.local_User !== null){
      this.goToHome();
    }
  }
  */
  //this.loginUserIfExist();
  //loginUserIfExist();
  
}