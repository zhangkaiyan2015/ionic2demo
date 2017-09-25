import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Idnumber } from './idnumber';

@NgModule({
  declarations: [
    Idnumber,
  ],
  imports: [
    IonicPageModule.forChild(Idnumber),
  ],
})
export class IdnumberModule {}
