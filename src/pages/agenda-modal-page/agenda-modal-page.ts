import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController,ViewController } from 'ionic-angular';


import { CorePage } from '../core/core';
import { PosterPage } from '../poster/poster';



/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-agenda-modal-page',
  templateUrl: 'agenda-modal-page.html',
})
export class AgendaModalPage {

  constructor(public navCtrl: NavController,private navParams: NavParams, private view: ViewController) {
  }
    icons: string[];
  itemdata = this.navParams.get('data');
  places = this.navParams.get('places');
  

  
   
   

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  closeModal() {
    const data = {
      name: 'John Doe',
      occupation: 'Milkman'
    };
    this.view.dismiss(data);
  }
  
  
	 goToCorePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CorePage);
     }
  	 goToPosterPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(PosterPage);
     }
  
}


