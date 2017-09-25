import { AddressEdit } from './address-edit/address-edit';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class Address {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Address');
  }
  gotoPage() {
    this.navCtrl.push(AddressEdit);
  }
}
