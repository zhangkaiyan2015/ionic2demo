import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-clinic-detail',
  templateUrl: 'clinic-detail.html',
})
export class ClinicDetail {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClinicDetail');
    console.log(this.navParams.get('clinicId'))
  }

}
