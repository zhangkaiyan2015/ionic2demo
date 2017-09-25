import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MywalletDetail } from './mywallet-detail';

@NgModule({
  declarations: [
    MywalletDetail,
  ],
  imports: [
    IonicPageModule.forChild(MywalletDetail),
  ],
})
export class MywalletDetailModule {}
