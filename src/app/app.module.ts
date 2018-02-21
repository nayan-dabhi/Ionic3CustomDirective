import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePageModule } from '../pages/home/home-module';
import { SettingsPageModule } from '../pages/settings/settings-module';
import { DirectivesModule } from '../directives/DirectivesModules';
import { ModalSelectModal } from '../directives/select-search/select-search';

@NgModule({
  declarations: [
    MyApp,
    ModalSelectModal
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    SettingsPageModule,
    DirectivesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalSelectModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
