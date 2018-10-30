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
	[{"s": "Aurora Geosciences", "name": " Aurora Geosciences ", "booth": "1-1", "marker": [9.481572085088517, 7.987060546875001 ] }],
	[{"s": "Alkan Air", "name": " Alkan Air ", "booth": "1-2", "marker": [12.071552663274506, 7.965087890625001 ] }],
	[{"s": "Mercer Contracting","name": " Mercer Contracting ", "booth": "1-3", "marker": [12.95102921601837, 7.976074218750001 ] }],
	[{"s": "Pelly Construction","name": " Pelly Construction ", "booth": "1-4", "marker": [13.78473654934022, 7.965087890625001 ] }],
	[{"s": "Klondike Crane Inspections  Casino Mining Corp","name": "Klondike Crane Inspections", "booth": "1-5", "marker": [15.961329081596647, 7.976074218750001 ] }, {"name": " Casino Mining Corp", "booth": "1-5", "marker": [9, 5] }],
	[{"s": "Imdex Limited","name": "Imdex Limited ", "booth": "1-6", "marker": [16.90968361555865, 7.954101562500001 ] }],
	[{"s": "Selwyn Chihong Mining","name": "Selwyn Chihong Mining ", "booth": "2-1", "marker": [10.260870794748941, 9.107666015625002 ] }],
	[{"s": "Air North","name": "Air North ", "booth": "2-2", "marker": [11.221510260010541, 9.107666015625002 ] }],
	[{"s": "Uniglobe Challenger","name": " Uniglobe", "booth": "2-3", "marker": [12.243391505623274, 9.107666015625002 ] }, {"name": "Challenger", "booth": "2-3", "marker": [9, 5] }],
	[{"s": "GOLDCORP","name": "GOLDCORP", "booth": "2-4", "marker": [13.15437605541853, 9.129638671875002 ] }],
	[{"s": "Yukon Women in Mining WIM Nickle Creek Platinum","name": "Yukon Women in Mining", "booth": "2-5", "marker": [14.944784875088372, 9.074707031250002 ] }, {"name": "Nickle Creek Platinum", "booth": "2-5", "marker": [9, 5] }],
	[{"s": "Great Slave Helicopters MIHR","name": "Great Slave Helicopters", "booth": "2-6", "marker": [15.940202412387029, 9.140625000000002 ] }, {"name": "MIHR", "booth": "2-6", "marker": [9, 5] }],
	[{"s": "Icefield Tools KBL Environmental","name": "Icefield Tools", "booth": "2-7", "marker": [16.825574258731486, 9.096679687500002 ] }, {"name": "KBL Environmental", "booth": "2-7", "marker": [9, 5] }],
	[{"s": "Bureau Veritas Minerals","name": "Bureau Veritas Minerals ", "booth": "3-1", "marker": [10.401377554543553, 9.744873046875002 ] }],
	[{"s": "New Age Drilling","name": "New Age Drilling", "booth": "3-2", "marker": [11.243062041947772, 9.788818359375002 ] }], 
	[{"s": "Multipower Tetra Tech","name": "Multipower", "booth": "3-3", "marker": [12.221917732187263, 9.799804687500002 ] }, {"name": "Tetra Tech", "booth": "3-3", "marker": [9, 5] }],
	[{"s": "Trans North Helicopters Alexco Resource Corp","name": "Trans North Helicopters", "booth": "3-4", "marker": [13.250639570043116, 9.854736328125002 ] }, {"name": "Alexco Resource Corp", "booth": "3-4", "marker": [9, 5] }],
	[{"s": "Talik Industrial Services ","name": "Talik Industrial Services", "booth": "3-5", "marker": [15.019074989409148, 9.810791015625 ] }], 
	[{"s": "Golden Predator Corp Yukon College: CNIM","name": "Golden Predator Corp", "booth": "3-6", "marker": [15.929638243169189, 9.821777343750002 ] }, {"name": "Yukon College: CNIM", "booth": "3-6", "marker": [9, 5] }],
	[{"s": "SLR Consulting","name": "SLR Consulting", "booth": "3-7", "marker": [16.941214960202657, 9.843750000000002 ] }, {"name": "Veolia Water Solutions & Technologies", "booth": "3-7", "marker": [9, 5] }],
    [{"s": "BMC Minerals Tintina Air","name": "BMC Minerals", "booth": "4-1", "marker": [10.31491928581316, 11.008300781250002 ] }, {"name": "Tintina Air", "booth": "4-1", "marker": [9, 5] }],
	[{"s": "Fleming Security","name": "Fleming Security", "booth": "4-2", "marker": [11.243062041947772, 11.008300781250002 ] }],
	[{"s": "Alaska Marine Lines","name": "Alaska Marine Lines", "booth": "4-3", "marker": [12.232654837013484, 10.986328125000002 ] }],
	[{"s": "Small's Expediting","name": "Small's Expediting", "booth": "4-4", "marker": [13.111580118251661, 11.008300781250002 ] }],
	[{"s": "Horizon Helicopters","name": "Horizon Helicopters", "booth": "4-5", "marker": [15.029685756555674, 10.975341796875002 ] }],
	[{"s": "McCue Engineering Contractors Metallic Minerals Corp","name": "McCue Engineering Contractors", "booth": "4-6", "marker": [15.961329081596647, 10.986328125000002 ] }, {"name": "Metallic Minerals Corp", "booth": "4-6", "marker": [9, 5] }],
	[{"s": "ALS Global","name": "ALS Global", "booth": "4-7", "marker": [16.99375545289456, 10.953369140625 ] }],
	[{"s": "AGAT Laboratories","name": "AGAT Laboratories", "booth": "5-1", "marker": [10.304110328329449, 11.722412109375002 ] }],
	[{"s": "Northspan Golder Associates","name": "Northspan", "booth": "5-2", "marker": [11.296934440596322, 11.71142578125 ] }, {"name": "Golder Associates", "booth": "5-2", "marker": [9, 5] }],
	[{"s": "Driving Force Ferus","name": "Driving Force", "booth": "5-3", "marker": [12.243391505623274, 11.722412109375002 ] }, {"name": "Ferus", "booth": "5-3", "marker": [9, 5] }],
	[{"s": "Ecofor Associated Engineering","name": "Ecofor", "booth": "5-4", "marker": [13.14367777049247, 11.755371093750002 ] }, {"name": "Associated Engineering", "booth": "5-4", "marker": [9, 5] }],
	[{"s": "SGS","name": "SGS", "booth": "5-5", "marker": [15.050905707724786, 11.700439453125 ] }],
	[{"s": "Summit Camps","name": "Summit Camps", "booth": "5-6", "marker": [15.971891580928983, 11.744384765625002 ] }],
	[{"s": "Equity Exploration BluMetric Enviromental","name": "Equity Exploration", "booth": "5-7", "marker": [16.93070509876554, 11.744384765625002 ] }, {"name": "BluMetric Enviromental", "booth": "5-7", "marker": [9, 5] }],
	[{"s": "Midnight Sun Drilling ALX Exploration Services","name": "Midnight Sun Drilling", "booth": "6-1", "marker": [10.001310360636941, 13.084716796875 ] }, {"name": "ALX Exploration Services", "booth": "6-1", "marker": [9, 5] }],
	[{"s": "Yukon Government YG","name": "Yukon Government", "booth": "6-2", "marker": [10.941191793456534, 13.106689453125002 ] }, {"name": "Yukon Government", "booth": "6-2", "marker": [9, 5] }],
	[{"s": "Yukon Government YG Yukon Surface Rights Board YSRB","name": "Yukon Government", "booth": "6-3", "marker": [11.910353555774114, 13.062744140625002 ] }, {"name": "Yukon Surface Rights Board", "booth": "6-3", "marker": [9, 5] }],
	[{"s": "Boart Longyear EDI Enviromental","name": "Boart Longyear", "booth": "6-4", "marker": [12.822513897983297, 13.084716796875 ] }, {"name": "EDI Enviromental", "booth": "6-4", "marker": [9, 5] }],
	[{"s": "Total North Communications Raven Rescue","name": "Total North Communications", "booth": "6-5", "marker": [13.848747147537152, 13.040771484375002 ] }, {"name": "Raven Rescue", "booth": "6-5", "marker": [9, 5] }],
	[{"s": "Doosan/Bobcat/Macpherson","name": "Doosan/Bobcat/Macpherson", "booth": "6-6", "marker": [14.689881366618774, 13.095703125 ] }],
	[{"s": "Yukon Chamber of Mines YCM","name": "Yukon Chamber of Mines", "booth": "7-1", "marker": [0, 0 ] }],
	[{"s": "First Nations Chamber of Commerce FNCC","name": "First Nations Chamber of Commerce", "booth": "7-2", "marker": [0, 0 ] }]];
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


