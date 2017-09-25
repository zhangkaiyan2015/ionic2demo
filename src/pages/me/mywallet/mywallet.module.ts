import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mywallet } from './mywallet';

@NgModule({
  declarations: [
    Mywallet,
  ],
  imports: [
    IonicPageModule.forChild(Mywallet),
  ],
})
export class MywalletModule {}
