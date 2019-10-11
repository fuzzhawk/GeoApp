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
	
	this.platform.ready().then(
  () => {
this.platform.registerBackButtonAction(() => {
	this.presentAlert();
        //sometimes the best thing you can do is not think, not wonder, not imagine, not obsess. 
        //just breathe, and have faith that everything will work out for the best.
      },1);
	
  }
);
	
	
  }
  
 this.platform.registerBackButtonAction(() => {
	this.presentAlert();
        //sometimes the best thing you can do is not think, not wonder, not imagine, not obsess. 
        //just breathe, and have faith that everything will work out for the best.
      },1); 
  
  
  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Yo Yo Yo Yo',
    subTitle: 'back button pressed!',
    buttons: ['okay']
  });
  alert.present();
}





  
  
}


