import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';


import { MapPage } from '../map/map';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-tradeshow',
  templateUrl: 'tradeshow.html'
})
export class TradeshowPage {

  constructor(public navCtrl: NavController,platform: Platform) {
	  
	     let backAction =  platform.registerBackButtonAction(() => {
        console.log("second");
        this.navCtrl.pop();
        backAction();
      },2)
	    
  }

      goToMapPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
	console.log("sdgdsGF")
    this.navCtrl.push(MapPage);
     }
  
      goToListPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
	console.log("sdgdsGF")
    this.navCtrl.push(ListPage);
     }
	 

 
}


