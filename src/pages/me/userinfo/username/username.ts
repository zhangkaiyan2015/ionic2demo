import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-username',
  templateUrl: 'username.html',
})
export class Username {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Username');
  }

}
