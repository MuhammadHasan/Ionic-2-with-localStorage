import { Component } from '@angular/core';
import { NavController, Storage, LocalStorage } from 'ionic-angular';
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
  constructor(private navCtrl: NavController) {
    
  }
  //signupData:any[]=[];
  signupData:any[] = this.local.get('signup').then(data => { this.signupData = JSON.parse(data)});
  
  signup(){
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
      //this.signupData = this.local.get('signup').then(data => { this.signupData = data});
      console.log(this.signupData);
      this.signupData.push({username : this.username ,password: this.password});
      console.log(this.signupData);

      this.local.set('signup', JSON.stringify(this.signupData));
      console.log(this.local);
      this.goToLogin()
    }
    
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
/*
vm.signupData = JSON.parse(localStorage.getItem('signup'));

  vm.signup = function () {
    if(vm.signupData == null ) {

      vm.signupData = [];

      vm.signupData.push({firstName : vm.firstName ,secondName: vm.lastName ,Email: vm.email});
      console.log(vm.signupData);

      localStorage.setItem('signup', JSON.stringify(vm.signupData));
      console.log(localStorage);
      $state.go('login');
    }
    else {
      vm.signupData.push({firstName : vm.firstName ,secondName: vm.lastName ,Email: vm.email});
      console.log(vm.signupData);

      localStorage.setItem('signup', JSON.stringify(vm.signupData));
      console.log(localStorage);
      $state.go('login');
    }
  };
  */