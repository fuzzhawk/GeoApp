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

import { ForumPage } from '../pages/forum/forum';
import { PosterPage } from '../pages/poster/poster';
import { CorePage } from '../pages/core/core';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';


import { Day1Page } from '../pages/day1/day1';
import { Day2Page } from '../pages/day2/day2';


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
	ForumPage,
	PosterPage,
	CorePage,
	MapPage,
	ListPage,
	Day1Page,
	Day2Page,
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
	ForumPage,
	PosterPage,
	CorePage,
	MapPage,
	ListPage,
	Day1Page,
	Day2Page,
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
