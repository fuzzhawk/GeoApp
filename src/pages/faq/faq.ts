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
	{"q": "What are the dates of this year’s Geoscience Forum and Trade Show?","a":"Saturday November 16th – Tuesday November 19th" },
	{"q": "When will registration open?","a":"Online registration will be available until Thursday November 14th, at 4pm. On site registration will be available at the Yukon Convention Centre from Friday, November 15th at 2pm - Until Tuesday November 19th from 8am-12pm." },
	{"q": "How do delegates register?","a":"All registration will be available online at www.yukongeoscience.ca, or after Friday November 16th, onsite at the Yukon Convention Centre." },
	{"q": "Is there Wifi available during the 2019 Geoscience Forum & Trade Show? ","a":"Yes, for the Forum the Network is Geoscience Delegates and the Password is: \n\n Geoscience2018 \n \n For the Trade Show the Network is Geoscience Trade Show and the Password is: \n\n Tradeshow2019" },
	{"q": "Will on-site registration be available?","a":"Yes, it will be available all days of the conference at the Trade Show located in the Yukon Convention Center. An administration fee may apply. Register early online to avoid delays or potential disappointment." },
	{"q": "Can I renew my membership at the same time and receive the member’s Geoscience discount?","a":"Yes, in order to secure the discount rate for members on delegate registration we have made this option available online at www.yukongeoscience.ca" },
	{"q": "When will the Geoscience agenda be available?","a":"The Geoscience Agenda is available now on www.yukongeoscience.ca or on the Agenda page of this app." },
	{"q": "Is there a Trade Show Booth Waitlist?","a":"All Exhibitor booth spaces have been taken; however, companies interested in being on the Trade Show Booth Waitlist should contact Daniel Little at communications@yukonminers.ca ASAP." },
	{"q": "What Sponsorship Opportunities are there?","a":"If you are interested in sponsoring the 2019 Yukon Geoscience Forum & Trade Show please contact Daniel Little at 867-667-2090 or at communications@yukonminers.ca" },
	{"q": "Are there opportunities for volunteers?","a":"YCM has a number of volunteer opportunities available. Please contact us if you are interested in helping out! admin@yukonminers.ca" }
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


