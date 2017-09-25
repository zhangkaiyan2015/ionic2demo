import { MywalletRecharge } from './mywallet-recharge/mywallet-recharge';
import { MywalletDetail } from './mywallet-detail/mywallet-detail';
import { MywalletWithdraw } from './mywallet-withdraw/mywallet-withdraw';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-mywallet',
  templateUrl: 'mywallet.html',
})
export class Mywallet {
  public isHiddenPro = true;
  public proAccount = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mywallet');
  }
  getProStatus() {
    if (this.proAccount === 0) {
      this.showAlert();
    } else {
      this.isHiddenPro = false;
    }
  }
  gotoPage(page) {
    switch (page) {
      case 'MywalletDetail':
        this.navCtrl.push(MywalletDetail);
        break;
      case 'MywalletRecharge':
        this.navCtrl.push(MywalletRecharge);
        break;
      case 'MywalletWithdraw':
        this.navCtrl.push(MywalletWithdraw);
        this.isHiddenPro = true;
        break;
      default:
        break;
    }
  }
  hidden() {
    this.isHiddenPro = true;
  }
  showAlert() {
    var that = this;
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: '您还未充值10元保证金，请先充值',
      buttons: [
        { text: '否' },
        {
          text: '是', handler() {
            console.log('调用支付接口')
          }
        }]
    });
    alert.present();
  }
}
