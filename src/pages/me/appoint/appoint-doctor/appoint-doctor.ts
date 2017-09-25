import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-appoint-doctor',
  templateUrl: 'appoint-doctor.html',
})
export class AppointDoctor {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointDoctor');
  }

}
