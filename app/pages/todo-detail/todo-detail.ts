import { Component } from '@angular/core';
import { NavController, NavParams, Storage, LocalStorage } from 'ionic-angular';
import {HomePage} from '../home/home'

/*
  Generated class for the TodoDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/todo-detail/todo-detail.html',
})
export class TodoDetailPage {
  local:any = new Storage(LocalStorage);
  tododetail  ;
  tododetail_Id:number;

  constructor(private navCtrl: NavController, private navParams:NavParams) {
    this.tododetail = navParams.get('tododetail');
    console.log(this.tododetail);
    this.tododetail_Id = navParams.get('tododetail_Id');
    console.log(this.tododetail_Id); 
  }

}
