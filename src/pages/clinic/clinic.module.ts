import { ClinicDetailModule } from './../clinic/clinic-detail/clinic-detail.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Clinic } from './clinic';

@NgModule({
  declarations: [
    Clinic,
  ],
  imports: [
    ClinicDetailModule,
    IonicPageModule.forChild(Clinic),
  ],
})
export class ClinicModule {}
