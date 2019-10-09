import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  selectedItem: any;
  icons: string[];
  items: any;
  searchQuery: string = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal : ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
	 this.initializeItems();
    this.selectedItem = navParams.get('item');


  }
  
  initializeItems() {
    this.items = [
[{"s": "Aurora Geosciences", "name": " Aurora Geosciences ", "booth": "1-1", "marker": [9.579084335882534,7.910156250000001 ] }],
[{"s": "Summit Camps", "name": " Summit Camps ", "booth": "1-2", "marker": [10.833305983642491,7.954101562500001 ] }],
[{"s": "Alkan Air", "name": " Alkan Air ", "booth": "1-3", "marker": [11.824341483849048,7.998046875000001 ] }],
[{"s": "Mercer Contracting", "name": " Mercer Contracting ", "booth": "1-4", "marker": [12.768946439455956,7.954101562500001 ] }],
[{"s": "Pelly Construction", "name": " Pelly Construction ", "booth": "1-5", "marker": [13.752724664396988,7.998046875000001 ] }],
[{"s": "Klondike Crane Inspections Casino Mining Corp","name": "Klondike Crane Inspections", "booth": "1-6", "marker": [15.792253570362446,8.041992187500002 ] }, {"name": " Casino Mining Corp", "booth": "1-6", "marker": [9, 5] }],
[{"s": "McCue Engineering", "name": " McCue Engineering ", "booth": "1-7", "marker": [16.636191878397664,7.954101562500001 ] }],
[{"s": "Selwyn Chihong Mining", "name": " Selwyn Chihong Mining ", "booth": "2-1", "marker": [10.31491928581316,9.096679687500002] }],
[{"s": "Air North", "name": " Air North ", "booth": "2-2", "marker": [11.30770770776545,9.096679687500002] }],
[{"s": "Equity Exploration Challenger","name": "Equity Exploration", "booth": "2-3", "marker": [12.211180191503997,9.096679687500002] }, {"name": " Challenger ", "booth": "2-3", "marker": [9, 5] }],
[{"s": "Dawson Regional Planning Commission", "name": " Dawson Regional Planning Commission ", "booth": "2-4", "marker": [13.111580118251661,9.096679687500002] }],
[{"s": "Yukon Women in Mining Tetra Tech","name": " Yukon Women in Mining ", "booth": "2-5", "marker": [14.987239525774259,9.096679687500002] }, {"name": " Tetra Tech ", "booth": "2-5", "marker": [9, 5] }],
[{"s": "Merit Consultants", "name": " Merit Consultants ", "booth": "2-6", "marker": [15.961329081596647,9.096679687500002] }],
[{"s": "Raven Rescue Golder Associates","name": " Raven Rescue ", "booth": "2-7", "marker": [16.88865978738161,9.096679687500002] }, {"name": " Golder Associates ", "booth": "2-7", "marker": [9, 5] }],
[{"s": "Bureau Veritas", "name": " Bureau Veritas ", "booth": "3-1", "marker": [10.31491928581316,9.799804687500002] }],
[{"s": "New Age Drilling", "name": " New Age Drilling ", "booth": "3-2", "marker": [11.26461221250444,9.799804687500002] }],
[{"s": "Multipower KBL Environmental","name": " Multipower  ", "booth": "3-3", "marker": [12.168225677390119,9.799804687500002] }, {"name": " KBL Environmental ", "booth": "3-3", "marker": [9, 5] }],
[{"s": "Trans North Helicopters	Alexco","name": " Trans North Helicopters  ", "booth": "3-4", "marker": [13.068776734357694,9.843750000000002] }, {"name": " Alexco ", "booth": "3-4", "marker": [9, 5] }],
[{"s": "Extreme Products Talik Industrial Services", "name": " Extreme Products/Talik Industrial Services ", "booth": "3-5", "marker": [14.987239525774259,9.843750000000002] }],
[{"s": "Strata Geo Data	Yukon College: CNIM","name": " Strata Geo Data ", "booth": "3-6", "marker": [15.919073517982426,9.843750000000002] }, {"name": " Yukon College: CNIM ", "booth": "3-6", "marker": [9, 5] }],
[{"s": "SLR Consulting Hardrock Diamond Drilling","name": " SLR Consulting ", "booth": "3-7", "marker": [16.846605106396304,9.843750000000002] }, {"name": " Hardrock Diamond Drilling ", "booth": "3-7", "marker": [9, 5] }],
[{"s": "BMC Minerals Tintina air","name": " BMC Minerals ", "booth": "4-1", "marker": [10.31491928581316,10.986328125000002] }, {"name": " Tintina air ", "booth": "4-1", "marker": [9, 5] }],
[{"s": "Fleming Security", "name": " Fleming Security ", "booth": "4-2", "marker": [11.221510260010541,10.986328125000002] }],
[{"s": "Alaska Marine Lines", "name": " Alaska Marine Lines ", "booth": "4-3", "marker": [12.211180191503997,10.986328125000002] }],
[{"s": "Small's Expediting", "name": " Small's Expediting ", "booth": "4-4", "marker": [13.197164523281993,10.986328125000002] }],
[{"s": "Horizon Helicopters", "name": " Horizon Helicopters ", "booth": "4-5", "marker": [14.987239525774259,10.986328125000002] }],
[{"s": "NexGen Metallic Minerals Corp","name": " NexGen ", "booth": "4-6", "marker": [15.961329081596647,10.986328125000002] }, {"name": " Metallic Minerals Corp ", "booth": "4-6", "marker": [9, 5] }],
[{"s": "ALS Global", "name": " ALS Global ", "booth": "4-7", "marker": [16.88865978738161,10.986328125000002] }],
[{"s": "AGAT Laboratories", "name": " AGAT Laboratories ", "booth": "5-1", "marker": [10.31491928581316,11.689453125000002] }],
[{"s": "Northspan Solvest","name": " Northspan ", "booth": "5-2", "marker": [11.26461221250444,11.689453125000002] }, {"name": " Solvest ", "booth": "5-2", "marker": [9, 5] }],
[{"s": "Driving Force Ferus","name": " Driving Force ", "booth": "5-3", "marker": [12.254127737657381,11.689453125000002] }, {"name": " Ferus ", "booth": "5-3", "marker": [9, 5] }],
[{"s": "Ecofor Associated Engineering","name": " Ecofor ", "booth": "5-4", "marker": [13.15437605541853,11.733398437500002] }, {"name": " Associated Engineering ", "booth": "5-4", "marker": [9, 5] }],
[{"s": "SGS", "name": " SGS ", "booth": "5-5", "marker": [15.029685756555674,11.689453125000002] }],
[{"s": "SHERP", "name": " SHERP ", "booth": "5-6", "marker": [16.003575733881327,11.689453125000002] }],
[{"s": "Canyon Equipment BluMetric Enviromental","name": " Canyon Equipment ", "booth": "5-7", "marker": [16.88865978738161,11.689453125000002] }, {"name": " BluMetric Enviromental ", "booth": "5-7", "marker": [9, 5] }],
[{"s": "Midnight Sun Drilling ALX Exploration Services","name": " Midnight Sun Drilling ", "booth": "6-1", "marker": [10.098670120603392,13.051757812500002] }, {"name": " ALX Exploration Services ", "booth": "6-1", "marker": [9, 5] }],
[{"s": "Yukon Government", "name": " Yukon Government ", "booth": "6-2", "marker": [10.962764256386821,13.051757812500002] }],
[{"s": "Yukon Government Yukon Surface Rights Board","name": " Yukon Government ", "booth": "6-3", "marker": [11.910353555774114,13.051757812500002] }, {"name": " Yukon Surface Rights Board ", "booth": "6-3", "marker": [9, 5] }],
[{"s": "REFLEX Hemmera","name": " REFLEX ", "booth": "6-4", "marker": [12.85464890558895,13.051757812500002] }, {"name": " Hemmera ", "booth": "6-4", "marker": [9, 5] }],
[{"s": "Total North Communications Icefield Tools","name": " Total North Communications ", "booth": "6-5", "marker": [13.752724664396988,13.051757812500002] }, {"name": " Icefield Tools ", "booth": "6-5", "marker": [9, 5] }],
[{"s": "Doosan Bobcat Macpherson", "name": " Doosan/Bobcat/Macpherson ", "booth": "6-6", "marker": [14.732386081418454,13.0078125] }],
[{"s": "Yukon Chamber of Mines", "name": " Yukon Chamber of Mines ", "booth": "7-1", "marker": [8.754794702435618,10.898437500000002] }],
[{"s": "Yukon First Nations Chamber of Commerce", "name": " Yukon First Nations Chamber of Commerce ", "booth": "7-2", "marker": [8.798225459016358,11.5576171875] }]
	];
}
  
  
    getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item[0].s.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  
  
  
  itemTapped(item) {
     console.log(item);
 const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    
    const myModal: Modal = this.modal.create('ListModalPage', { data: item }, myModalOptions);
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


