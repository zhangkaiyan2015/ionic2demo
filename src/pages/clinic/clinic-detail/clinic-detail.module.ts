import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClinicDetail } from './clinic-detail';

@NgModule({
  declarations: [
    ClinicDetail,
  ],
  imports: [
    IonicPageModule.forChild(ClinicDetail),
  ],
})
export class ClinicDetailModule {}
