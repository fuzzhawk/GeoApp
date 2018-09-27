import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PosterPage } from '../poster/poster';
import { CorePage } from '../core/core';
import { ForumPage } from '../forum/forum';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {

  constructor(public navCtrl: NavController) {}

        goToForumPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
	console.log("sdgdsGF")
    this.navCtrl.push(ForumPage);
     }
  
      goToCorePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
	console.log("sdgdsGF")
    this.navCtrl.push(CorePage);
     }
 
       goToPosterPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
	console.log("sdgdsGF")
    this.navCtrl.push(PosterPage);
     }

	 
}


