import { Component } from '@angular/core';
import { Platform, AlertController, NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';

@Component({
  selector: 'page-sponsor',
  templateUrl: 'sponsor.html'
})

export class SponsorPage {
  selectedItem: any;
  icons: string[];
  items: any;
  
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal : ModalController,private alertCtrl: AlertController, private platform: Platform) {
    // If we navigated to this page, we will have an item available as a nav param
	
	this.platform.ready().then(() => {
		
		  document.addEventListener('backbutton', () => {
                  this.presentAlert()
    }, false);
		
		
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





  
  
}


