import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MywalletRecharge } from './mywallet-recharge';

@NgModule({
  declarations: [
    MywalletRecharge,
  ],
  imports: [
    IonicPageModule.forChild(MywalletRecharge),
  ],
})
export class MywalletRechargeModule {}
