import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


import { AgendaPage } from '../pages/agenda/agenda';
import { Agenda2Page } from '../pages/agenda2/agenda2';


import { TradeshowPage } from '../pages/tradeshow/tradeshow';
import { KeynotePage } from '../pages/keynote/keynote';
import { FaqPage } from '../pages/faq/faq';


import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';

import { SponsorPage } from '../pages/sponsor/sponsor';

import { ContactPage } from '../pages/contact/contact';

import { PosterPage } from '../pages/poster/poster';

import { CorePage } from '../pages/core/core';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController ) {
    this.initializeApp();
	
	this.platform.ready().then(() => {
		
		  document.addEventListener('backbutton', () => {
                  this.presentAlert()
    }, false);
		
		
	  });
	
	
	
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },	  
	  { title: 'Agenda', component: AgendaPage },
	  { title: 'Tradeshow', component: TradeshowPage },
	  { title: 'Keynote Speakers', component: KeynotePage },
	  { title: 'F.A.Q.', component: FaqPage },
	  { title: 'Contact Us', component: ContactPage },
	  { title: 'Sponsor Information', component: SponsorPage}
	  
	
	  
    ];

  }

  
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
 presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Yo Yo Yo Yo',
    subTitle: 'back button pressed!',
    buttons: ['okay']
  });
  alert.present();
}



	

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
