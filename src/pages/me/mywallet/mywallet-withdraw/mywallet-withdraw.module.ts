import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MywalletWithdraw } from './mywallet-withdraw';

@NgModule({
  declarations: [
    MywalletWithdraw,
  ],
  imports: [
    IonicPageModule.forChild(MywalletWithdraw),
  ],
})
export class MywalletWithdrawModule {}
