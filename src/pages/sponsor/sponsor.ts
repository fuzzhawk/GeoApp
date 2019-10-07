import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';


@Component({
  selector: 'page-sponsor',
  templateUrl: 'sponsor.html'
})

export class SponsorPage {
  selectedItem: any;
  icons: string[];
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal : ModalController) {
    // If we navigated to this page, we will have an item available as a nav param

    
  }
  
  
}


