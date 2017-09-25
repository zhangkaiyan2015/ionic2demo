import { More } from './../more/more';
import { Device } from './../device/device';
import { Clinic } from './../clinic/clinic';
import { Me } from './../me/me';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Me;
  tab2Root = Clinic;
  tab3Root = Device;
  tab4Root = More;
  constructor() {

  }
}
