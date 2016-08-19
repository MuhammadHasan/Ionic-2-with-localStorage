import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the QuestionsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
/*
@Pipe({
  name: 'Questiontype'
})
// The work of the pipe is handled in the tranform method with our pipe's class
class Questiontype implements PipeTransform {
  //QuestionData:any = null;

  transform(allQues: any,[arg]):any {
    return allQues.filter(if(QuestionsData.Questiontype === 'form'){});
  }
  
}*/

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}

@Pipe({name: 'filterQuestion'})
export class QuestionsType implements PipeTransform {
     transform(items: any[], field : string, value : string): any[] {  
        if (!items) return [];        
        return items.filter(it => it[field] == value);
    }
}


@Component({
  templateUrl: 'build/pages/questions/questions.html',
  pipes: [CapitalizePipe,QuestionsType]
})
export class QuestionsPage {

QuestionData:any = null;
typeone = false;
typetwo = false;

  constructor(private navCtrl: NavController, private http: Http) {
    //this.http.get('https://api.github.com/users')
    this.http.get('build/question.json')
        .map(res => (res.json()))
        .subscribe(users => {
          // we've got back the raw users, now generate the core schedule users
          // and save the users for later reference
          this.QuestionData = users;
          console.log(this.QuestionData);
          //resolve(this.DataMenu);
        });
  }

  Typeone(){
    this.typeone = true;
    this.typetwo = false;
    //this.QuestionData.Questionforms = 'form1';
  }

  Typetwo(){
    this.typetwo = true;
    this.typeone = false;
    //this.QuestionData.Questionforms = 'SCL';
  }

 /*
  Typetwo(){
    for(var i = 0 ; i <= this.QuestionData.length; i++){
      console.log(this.QuestionData[i].Questionforms);
      if(this.QuestionData[i].Questionforms === 'SCL'){
          console.log(this.QuestionData[i]);

      }
    }
    this.favoriteHero = true;
  }
  */
            
}
