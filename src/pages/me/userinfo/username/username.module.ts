import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Username } from './username';

@NgModule({
  declarations: [
    Username,
  ],
  imports: [
    IonicPageModule.forChild(Username),
  ],
})
export class UsernameModule {}
