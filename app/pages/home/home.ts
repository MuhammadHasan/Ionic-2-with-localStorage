import {Component} from '@angular/core';
import {NavController, Storage, LocalStorage} from 'ionic-angular';
import {LoginPage} from '../login/login';

import {UpdatePage} from '../update/update';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  local:any = new Storage(LocalStorage);
  itemName;
  itemDesp;
  notes: any = [];

  constructor(public navCtrl: NavController) {

  }

  todoData = [this.local.get('todo').then(data => { this.todoData = JSON.parse(data)})];

  //todos = [this.local.get('todo').then(data => { this.todos = JSON.parse(data)})];
  addTodo(){
    if(this.itemName === '' && this.itemDesp === ''){
    
    }else{
      if(this.todoData == null ) {

      this.todoData = [];

      this.todoData.push({itemName: this.itemName, itemDesp: this.itemDesp});
      console.log(this.todoData);

      this.local.set('todo', JSON.stringify(this.todoData) );
      console.log(this.local);
    }else{

      this.todoData.push({itemName: this.itemName, itemDesp: this.itemDesp});
      console.log(this.todoData);

      this.local.set('todo', JSON.stringify(this.todoData) );
      console.log(this.local);
    }
    }
    this.local.get('todo').then(data => { this.todoData = JSON.parse(data)});
    console.log(this.todoData);
  }

  //todos = [this.local.get('todo').then(data => { this.todos = JSON.parse(data)})];
  //console.log(this.todos);

  deleteTodo(index: number){
    this.todoData.splice(index,1);
    this.local.set('todo', JSON.stringify(this.todoData) );
  }

  logout(){
    this.local.remove('login');
    this.goToLogin();
  }

  goToLogin(){
    this.navCtrl.pop(LoginPage);
  }

  gotoupdate(index: number){
    this.navCtrl.push(UpdatePage,{
      updateData: this.todoData[index],
      updateId: index
    });
  }
  
}
