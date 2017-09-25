import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Userinfo } from './userinfo';

@NgModule({
  declarations: [
    Userinfo,
  ],
  imports: [
    IonicPageModule.forChild(Userinfo),
  ],
})
export class UserinfoModule {}
