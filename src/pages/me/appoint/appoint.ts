import { AppointTime } from './appoint-time/appoint-time';
import { NavController, NavParams, App } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-appoint',
  templateUrl: 'appoint.html',
})
export class Appoint {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Appoint');
   // console.log(this.app.getActiveNav())
  }
  gotoback() {
    this.navCtrl.pop();
  }
  gotoPage(){
    this.navCtrl.push(AppointTime);
  }
}
