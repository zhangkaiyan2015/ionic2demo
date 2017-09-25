import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Appoint } from './appoint';

@NgModule({
  declarations: [
    Appoint,
  ],
  imports: [
    IonicPageModule.forChild(Appoint),
  ],
})
export class AppointModule {}
