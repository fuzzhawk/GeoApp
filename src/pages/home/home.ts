import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';





import { NativeStorage } from '@ionic-native/native-storage';


import { AgendaPage } from '../agenda/agenda';
import { TradeshowPage } from '../tradeshow/tradeshow';
import { KeynotePage } from '../keynote/keynote';
import { FaqPage } from '../faq/faq';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) { }
  

   
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
	
	
	
}



