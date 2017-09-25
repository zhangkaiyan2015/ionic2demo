import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Myappoint } from './myappoint';

@NgModule({
  declarations: [
    Myappoint,
  ],
  imports: [
    IonicPageModule.forChild(Myappoint),
  ],
})
export class MyappointModule {}
