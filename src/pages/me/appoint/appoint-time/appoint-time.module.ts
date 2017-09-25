import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointTime } from './appoint-time';

@NgModule({
  declarations: [
    AppointTime,
  ],
  imports: [
    IonicPageModule.forChild(AppointTime),
  ],
})
export class AppointTimeModule {}
