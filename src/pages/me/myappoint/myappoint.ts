import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-myappoint',
  templateUrl: 'myappoint.html',
})
export class Myappoint {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Myappoint');
    this.navCtrl.remove(1,3)
  }

}
