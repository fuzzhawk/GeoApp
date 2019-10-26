import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';



@Component({
  selector: 'page-core',
  templateUrl: 'core.html'
})

export class CorePage {
  selectedItem: any;
  icons: string[];
  items: Array<{n: string, d : string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal : ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

	
    this.items = [
	{"n": "Frank Kiss (GSC GEM II program)", "d" : "High Resolution Aeromagnetic Survey Results from the Marsh Lake and Wolf Lake areas, Yukon (2018-2019)"},
	{"n": "Nathan Cleven (GSC)", "d" : "Detrital zircon age distribution correlations between Snowcap assemblage basement of the Yukon-Tanana terrane, Canadian Cordillera, and Proterozoic to Devonian stratigraphy of the Laurentian margin platformal strata:"},
	{"n": "Michael Gadd (GSC)", "d" : "Middle Devonian basin-scale polymetallic hyper-enriched black shale mineralizing event, north Yukon"},
	{"n": "D. Kellett and A. Zagorevski (GSC)", "d" : "New geo- and thermochronological insights into Jurassic accretion and syn-orogenic sedimentation in the Northern Canadian Cordillera"},
	{"n": "Jim Ryan, et al. (GSC)", "d" : "A review of the Pericratonic terranes of Yukon under the GEM program"},
	{"n": "Warwick Bullen (YGS)", "d" : "A New Method for Mineral Potential Mapping in the Yukon"},
	{"n": "Jerome De Pasquale (YGS)", "d" : "Yukon Metallotect Project"},
	{"n": "Tyler Ambrose (YGS)", "d" : "Preliminary bedrock geology of the Rackla River area, Wernecke Mountains (parts of NTS 106C/4 and 106C/5)"},
	{"n": "Panya Lipovsky (YGS), Fabrice Calmels and Louis-Philippe Roy (Yukon Research Centre)", "d" : "Surficial geology and permafrost investigations in the greater Whitehorse area: 2019 highlights"},
	{"n": "Emilie Stewart-Jones, Kisa Elmer, Brett Elliot and Panya Lipovsky (YGS)", "d" : "Database development to improve access to Yukon permafrost data"},
	{"n": "Kristen Kennedy, Jeff Bond, Panya Lipovsky (YGS)", "d" : "Applications of the digital surficial database"},
	{"n": "Dave Hildes (Aurora Geosciences Ltd, YGS)", "d" : "Yukon Assessment Reports - Mining the Geophysical Data"},
	{"n": "Lara Lewis, Nicole Eriks, Alex Sadurski", "d" : "Yukon Minfile Updates"},
	{"n": "Jeff Bond", "d" : "Placer Geology: placer industry overview and district highlights"},
	{"n": "Derek Torgeson", "d" : "YMEP update"},
	{"n": "Lara Lewis, Scott Casselman", "d" : "Yukon exploration overview"},
	{"n": "Carolyn Relf (YGS)", "d" : "Yukon Geological Survey 5-Year Plan"},
	
	
	
	];
    
  }
  
  
  itemTapped(item) {
     console.log(item);
 const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };


    const myModal: Modal = this.modal.create('PosterModalPage', { data: item }, myModalOptions);

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


