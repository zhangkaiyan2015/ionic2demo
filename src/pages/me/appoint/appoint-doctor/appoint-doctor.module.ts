import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointDoctor } from './appoint-doctor';

@NgModule({
  declarations: [
    AppointDoctor,
  ],
  imports: [
    IonicPageModule.forChild(AppointDoctor),
  ],
})
export class AppointDoctorModule {}
