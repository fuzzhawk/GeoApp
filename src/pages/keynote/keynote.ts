import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';










@Component({
  selector: 'page-keynote',
  templateUrl: 'keynote.html'
})

export class KeynotePage {
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
	{"name": " Rex Murphy ", "booth": "1-1", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": " Ken Coates ", "booth": "1-2", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": "  Glenn Mullan  ", "booth": "1-3", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": " Stewart Muir ", "booth": "1-4", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]},
	{"name": " Carl Weatherell", "booth": "1-5", "icon": this.icons[Math.floor(Math.random() * this.icons.length)]}	
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


