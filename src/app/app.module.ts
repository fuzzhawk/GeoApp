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

import { SponsorPage } from '../pages/sponsor/sponsor';

import { PosterPage } from '../pages/poster/poster';

import { CorePage } from '../pages/core/core';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



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
	PosterPage,
	CorePage,
	ContactPage,
	SponsorPage
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
	ContactPage,
	PosterPage,
	CorePage,
	SponsorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
