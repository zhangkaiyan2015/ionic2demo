import { Userinfo } from './userinfo/userinfo';
import { Myappoint } from './myappoint/myappoint';
import { Mywallet } from './mywallet/mywallet';
import { Appoint } from './appoint/appoint';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class Me {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Me');
  }
  gotoPage(page) {
    switch (page) {
      case 'Appoint':
        this.navCtrl.push(Appoint);
        break;
      case 'Mywallet':
        this.navCtrl.push(Mywallet);
        break;
      case 'Myappoint':
        this.navCtrl.push(Myappoint);
        break;
      case 'Userinfo':
        this.navCtrl.push(Userinfo);
        break;
      default:
        break;
    }

  }
}
