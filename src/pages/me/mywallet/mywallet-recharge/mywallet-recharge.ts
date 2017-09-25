import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-mywallet-recharge',
  templateUrl: 'mywallet-recharge.html',
})
export class MywalletRecharge {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MywalletRecharge');
  }

}
