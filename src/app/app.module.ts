import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { adsPage } from '../pages/ads/ads';
import { messagePage } from '../pages/message/message';
import { SectionPage } from '../pages/section/section';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DepartmentServiceProvider } from '../providers/departments-service'

@NgModule({
  declarations: [
    MyApp,
    SectionPage,
    adsPage,
    messagePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SectionPage,
    adsPage,
    messagePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DepartmentServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
