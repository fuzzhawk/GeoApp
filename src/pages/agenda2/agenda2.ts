import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions} from 'ionic-angular';


@Component({
  selector: 'page-agenda2',
  templateUrl: 'agenda2.html'
})
export class Agenda2Page {
	
private dayParams : string ;
items: any;
places: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal : ModalController) {
	  
	  this.items = this.navParams.get('dayParams');
	  this.places = this.navParams.get('places');
	  
     console.log( this.dayParams);
	 
  }

      itemTapped(item) {
     console.log(item);
 const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };


    const agModal: Modal = this.modal.create('AgendaModalPage', { data: item, places:this.places }, myModalOptions);

    agModal.present();

    agModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    agModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });



  }

  

 
	 
}


