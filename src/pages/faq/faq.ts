import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';


@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})

export class FaqPage {
  selectedItem: any;
  icons: string[];
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal : ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

	
    this.items = [
	{"q": " Question 1? ","a":"answer 1!" },
	{"q": " Question 2? ","a":"answer 2!" },
	{"q": "  Question 3?  ","a":"answer 3!" },
	{"q": " Question 4? ","a":"answer 4!" },
	{"q": " Question 5?","a":"answer 5!" }	
	];
    
  }
  
  
  itemTapped(item) {
     console.log(item);
 const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };


    const myModal: Modal = this.modal.create('FaqModalPage', { data: item }, myModalOptions);

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


