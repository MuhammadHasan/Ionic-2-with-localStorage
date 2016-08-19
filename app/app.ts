import {Component,ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, Storage, LocalStorage, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login';
import {SignupPage} from './pages/signup/signup';
import {QuestionsPage} from './pages/questions/questions';

@Component({
  /*template: `<ion-nav [root]="rootPage"></ion-nav>*/
  template: `
  <ion-menu [content]="content">

  <ion-toolbar>
    <ion-title>Pages</ion-title>
  </ion-toolbar>

  <ion-content>
    <ion-list>
      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">
        {{p.title}}
      </button>
    </ion-list>
  </ion-content>

</ion-menu>

<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  local:any = new Storage(LocalStorage);
  rootPage: any 
  //local_Users:any[];
  login_User = this.local.get('login');
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform,private menu: MenuController) {
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
    this.pages = [
      // Comment out pages we deleted
      //{ title: 'Hello Ionic', component: HelloIonicPage },
      //{ title: 'My First List', component: ListPage }
      { title: 'Todo', component: LoginPage },
      { title: 'Questions', component: QuestionsPage }
    ];
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
