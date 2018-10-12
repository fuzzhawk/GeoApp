import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgendaPage } from '../pages/agenda/agenda';
import { TradeshowPage } from '../pages/tradeshow/tradeshow';
import { KeynotePage } from '../pages/keynote/keynote';
import { FaqPage } from '../pages/faq/faq';


import { ContactPage } from '../pages/contact/contact';


import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';


import { Agenda2Page } from '../pages/agenda2/agenda2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativeStorage } from '@ionic-native/native-storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
	AgendaPage,
	TradeshowPage,
	KeynotePage,
	FaqPage,
	MapPage,
	ListPage,
	Agenda2Page,
	ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	AgendaPage,
	TradeshowPage,
	KeynotePage,
	FaqPage,
	MapPage,
	ListPage,
	Agenda2Page,
	ContactPage
  ],
  providers: [
    NativeStorage,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}