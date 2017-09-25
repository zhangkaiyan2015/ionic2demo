import { UsernameModule } from './../me/userinfo/username/username.module';
import { IdnumberModule } from './../me/userinfo/idnumber/idnumber.module';
import { TelephoneModule } from './../me/userinfo/telephone/telephone.module';
import { AddressEditModule } from './../me/userinfo/address/address-edit/address-edit.module';
import { AddressModule } from './../me/userinfo/address/address.module';
import { MywalletWithdrawModule } from './../me/mywallet/mywallet-withdraw/mywallet-withdraw.module';
import { MywalletRechargeModule } from './../me/mywallet/mywallet-recharge/mywallet-recharge.module';
import { MywalletDetailModule } from './../me/mywallet/mywallet-detail/mywallet-detail.module';
import { AppointSuccessModule } from './../me/appoint/appoint-success/appoint-success.module';
import { AppointTimeModule } from './../me/appoint/appoint-time/appoint-time.module';
import { AppointDoctorModule } from './../me/appoint/appoint-doctor/appoint-doctor.module';
import { UserinfoModule } from './../me/userinfo/userinfo.module';
import { MywalletModule } from './../me/mywallet/mywallet.module';
import { MyappointModule } from './../me/myappoint/myappoint.module';
import { AppointModule } from './../me/appoint/appoint.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Me } from './me';

@NgModule({
  declarations: [
    Me
  ],
  imports: [
    AppointModule,
    MyappointModule,
    MywalletModule,
    UserinfoModule,
    AppointDoctorModule,
    AppointTimeModule,
    AppointSuccessModule,
    MywalletDetailModule,
    MywalletRechargeModule,
    MywalletWithdrawModule,
    AddressModule,
    AddressEditModule,
    TelephoneModule,
    IdnumberModule,
    UsernameModule,
    IonicPageModule.forChild(Me),
  ],
})
export class MeModule {}
