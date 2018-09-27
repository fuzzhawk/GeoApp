import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(public navCtrl: NavController) {}

  
  
  //goToOtherPage() {console.log("sdgdsGF"); }
  
  
    goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
	console.log("sdgdsGF")
    this.navCtrl.push(ListPage);
     }
	 
}


