import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-mywallet-withdraw',
  templateUrl: 'mywallet-withdraw.html',
})
export class MywalletWithdraw {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MywalletWithdraw');
  }

}
