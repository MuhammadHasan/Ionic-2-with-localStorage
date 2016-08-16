import { Component } from '@angular/core';
import { NavController, Storage, LocalStorage, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {
  //signupData = JSON.parse(LocalStorage.get('signup'));
  local:any = new Storage(LocalStorage);
  username;
  password;
  constructor(private navCtrl: NavController , private alertController: AlertController) {
    
  }
  //signupData:any[]=[];
  signupData:any[] = this.local.get('signup').then(data => { this.signupData = JSON.parse(data)});
  
  signup(){
    if(this.username !== '' && this.password !== ''){
      if(this.signupData == null ) {
        //this.username = 
        this.signupData = [];

        this.signupData.push({username : this.username ,password: this.password});
        console.log(this.signupData);

        this.local.set('signup', JSON.stringify(this.signupData) );
        console.log(this.local);
        this.goToLogin()
      }
      else {
        for (var i = 0; i < this.signupData.length; i++) {
          if (this.signupData[i].username === this.username && this.signupData[i].password === this.password ||
              this.signupData[i].username === this.username) {
            this.showAlert()
            var alert = true;
          }/*
          if (this.signupData[i].username === this.username) {
            this.showAlert()
            alert = true;
          }*/
          else{
            alert = false;
          }
        }
        if(alert == false){
          //this.signupData = this.local.get('signup').then(data => { this.signupData = data});
          console.log(this.signupData);
          this.signupData.push({username : this.username ,password: this.password});
          console.log(this.signupData);

          this.local.set('signup', JSON.stringify(this.signupData));
          console.log(this.local);
          this.goToLogin()
        }
      }
      
      
    }
  }
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  showAlert() {
    let alert = this.alertController.create({
      title: 'User Already Exist',
      subTitle: 'please change username!',
      buttons: ['OK  ']
    });
    alert.present();
  }

}