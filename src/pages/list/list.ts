import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';










@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{name: string, booth: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal : ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
	{"name": " Aurora Geosciences ", "booth": "1-1", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": " Alkan Air ", "booth": "1-2", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": " Mercer Contracting ", "booth": "1-3", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": " Pelly Construction ", "booth": "1-4", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": " K2", "booth": "1-5", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": "Reflex ", "booth": "1-6", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": "Selwyn Chihong Mining ", "booth": "2-1", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": "Air North ", "booth": "2-2", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]}	
	];
    
  }
  
  
  itemTapped(item) {
     console.log(item);
 const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };


    const myModal: Modal = this.modal.create('ModalPage', { data: item }, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });



  }
}


