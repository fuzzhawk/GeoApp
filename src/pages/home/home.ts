import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Platform } from 'ionic-angular';



import { NativeStorage } from '@ionic-native/native-storage';


import { AgendaPage } from '../agenda/agenda';
import { TradeshowPage } from '../tradeshow/tradeshow';
import { KeynotePage } from '../keynote/keynote';
import { FaqPage } from '../faq/faq';
import { SponsorPage } from '../sponsor/sponsor';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, platform: Platform) { 
  
          let backAction =  platform.registerBackButtonAction(() => {
        console.log("second");
        this.navCtrl.push(HomePage);
        backAction();
      },2)

  
  }
  
  

   
        goToAgendaPage() {  
		this.navCtrl.push(AgendaPage);  
		}
		
		goToTradeshowPage() {  
		this.navCtrl.push(TradeshowPage);  
		}
		
		goToKeynotePage() {  
		this.navCtrl.push(KeynotePage);  
		}
		
		goToFaqPage() {  
		this.navCtrl.push(FaqPage);  
		}
		
		goToSponsorPage() {  
		this.navCtrl.push(SponsorPage);  
		}
	
	
	
}



