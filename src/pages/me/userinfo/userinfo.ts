import { Username } from './username/username';
import { Telephone } from './telephone/telephone';
import { Idnumber } from './idnumber/idnumber';
import { Address } from './address/address';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
})
export class Userinfo {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Userinfo');
  }
  gotoPage(page) {
    switch (page) {
      case 'Address':
        this.navCtrl.push(Address)
        break;
      case 'Idnumber':
        this.navCtrl.push(Idnumber)
        break;
      case 'Telephone':
        this.navCtrl.push(Telephone)
        break;
      case 'Username':
        this.navCtrl.push(Username)
        break;
      default:
        break;
    }
  }
}
