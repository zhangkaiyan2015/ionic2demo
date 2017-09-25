import { MoreModule } from './../pages/more/more.module';
import { DeviceModule } from './../pages/device/device.module';
import { ClinicModule } from './../pages/clinic/clinic.module';
import { MeModule } from './../pages/me/me.module';
import { More } from './../pages/more/more';
import { Device } from './../pages/device/device';
import { Clinic } from './../pages/clinic/clinic';
import { Me } from './../pages/me/me';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    MeModule,
    ClinicModule,
    DeviceModule,
    MoreModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'返回'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Me,
    Clinic,
    Device,
    More,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
