import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressEdit } from './address-edit';

@NgModule({
  declarations: [
    AddressEdit,
  ],
  imports: [
    IonicPageModule.forChild(AddressEdit),
  ],
})
export class AddressEditModule {}
