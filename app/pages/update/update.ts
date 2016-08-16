import { Component } from '@angular/core';
import { NavController, NavParams, Storage, LocalStorage } from 'ionic-angular';
import {HomePage} from '../home/home'

/*
  Generated class for the UpdatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/update/update.html',
})
export class UpdatePage {
  
  local:any = new Storage(LocalStorage);
  updateData  ;
  updateId:number;
  
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.updateData = navParams.get('updateData');
    console.log(this.updateData);
    this.updateId = navParams.get('updateId');
    console.log(this.updateId); 
  }

  todoData = [this.local.get('todo').then(data => { this.todoData = JSON.parse(data)})];

  updateTodoData(itemName,itemDesp){
    var data = {itemName : itemName ,itemDesp: itemDesp };
    console.log(data);

    this.todoData.splice( this.updateId, 1, data );
    this.local.set('todo', JSON.stringify(this.todoData) );
    console.log(this.todoData);
    this.gotoHomepage();
  }
  gotoHomepage(){
    this.navCtrl.pop(HomePage);
  }
}