import { Myappoint } from './../../myappoint/myappoint';
import { NavController, NavParams, App } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-appoint-success',
  templateUrl: 'appoint-success.html',
})
export class AppointSuccess {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointSuccess');
  }
  gotoPage() {
    // this.navCtrl.push(Myappoint);
  //  this.app.getRootNav().setRoot(Myappoint);
    this.navCtrl.push(Myappoint);
  }
}
