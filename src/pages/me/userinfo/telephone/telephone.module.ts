import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Telephone } from './telephone';

@NgModule({
  declarations: [
    Telephone,
  ],
  imports: [
    IonicPageModule.forChild(Telephone),
  ],
})
export class TelephoneModule {}
