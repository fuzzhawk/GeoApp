import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Day1Page } from '../day1/day1';
import { Day2Page } from '../day2/day2';

@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html'
})
export class ForumPage {

  constructor(public navCtrl: NavController) {}

  
        goToDay1Page() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
	console.log("sdgdsGF")
    this.navCtrl.push(Day1Page);
     }
  
      goToDay2Page() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
	console.log("sdgdsGF")
    this.navCtrl.push(Day2Page);
     }
	 


	 
}


