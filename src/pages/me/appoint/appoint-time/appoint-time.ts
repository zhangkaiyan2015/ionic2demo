import { AppointSuccess } from './../appoint-success/appoint-success';
import { AppointDoctor } from './../appoint-doctor/appoint-doctor';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-appoint-time',
  templateUrl: 'appoint-time.html',
})
export class AppointTime {
  public isHiddenInfo = true;
  public isHiddenNum = true;
  public currentId: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointTime');
  }
  confirmAppoint(){
    this.navCtrl.push(AppointSuccess);
  }
  gotoPage() {
    this.navCtrl.push(AppointDoctor);
  }
  checkappoint(appointId){
    this.currentId = appointId;
    this.isHiddenNum = false;
  }
  hidden(){
    this.isHiddenInfo = true;
    this.isHiddenNum = true;
  }
}
