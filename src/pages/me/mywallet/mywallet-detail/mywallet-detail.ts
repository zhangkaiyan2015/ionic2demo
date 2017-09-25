import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-mywallet-detail',
  templateUrl: 'mywallet-detail.html',
})
export class MywalletDetail {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MywalletDetail');
  }

}
