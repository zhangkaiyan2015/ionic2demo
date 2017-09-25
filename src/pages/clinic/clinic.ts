import { ClinicDetail } from './clinic-detail/clinic-detail';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-clinic',
  templateUrl: 'clinic.html',
})
export class Clinic {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Clinic');
  }
  gotoPage(){
    this.navCtrl.push(ClinicDetail,{
      clinicId:'10'
    });
  }
}
