import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';



import { Agenda2Page } from '../agenda2/agenda2';


@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})

export class AgendaPage {
  selectedItem: any;
  satitems: Array<{n: string, s: string, e : string, t: string, p: string, d: string}>;
  sunitems: Array<{n: string, s: string, e : string, t: string, p: string, d: string}>; 
  monitems: Array<{n: string, s: string, e : string, t: string, p: string, d: string}>;
  tueitems: Array<{n: string, s: string, e : string, t: string, p: string, d: string}>;
  satplaces: Array<{n:string}>;
  sunplaces: Array<{n:string}>;
  monplaces: Array<{n:string}>;
  tueplaces: Array<{n:string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal : ModalController) {

    this.satplaces = [{"n":"YUKON CONVENTION CENTRE"},{"n":"BALLROOMS A & B - COAST, HIGH COUNTRY INN"},{"n":"KWANLIN DÜN CULTURAL CENTRE, MULTIPURPOSE ROOM"} ]
	this.sunplaces = [{"n":"YUKON CONVENTION CENTRE"},{"n":"BALLROOMS A & B - COAST, HIGH COUNTRY INN"},{"n":"YUKON PLACER FORUM - BEST WESTERN GOLD RUSH INN"},{"n":"RECEPTION - MINER’S DAUGHTER RESTAURANT"} ]
	this.monplaces = [{"n":"YUKON CONVENTION CENTRE"},{"n":"BALLROOM A - COAST, HIGH COUNTRY INN"},{"n":"BALLROOM B - COAST, HIGH COUNTRY INN"},{"n":" YUKON CHAMBER OF MINES GALA BANQUET - KWANLIN DÜN CULTURAL CENTRE"} ]
	this.tueplaces = [{"n":"YUKON CONVENTION CENTRE"},{"n":"BALLROOM A - COAST, HIGH COUNTRY INN"},{"n":"BALLROOM B - COAST, HIGH COUNTRY INN"},{"n":"CLOSING RECEPTION - YUKON CONVENTION CENTRE"} ]
 
  
    this.satitems = [
	{"n": "November 17, 2018 06:45:00", "s":"8:00 am", "e":"5:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Finning" },
	{"n": "November 17, 2018 06:45:00", "s":"10:00 am", "e":"5:00pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": "November 17, 2018 06:45:00", "s":"10:00 am", "e":"2:00pm","p" : "0", "t":"Family Day at the Trade Show", "d" : "Sponsored by Golden Predator \n\n Gold Panning Sponsored by Horizon Helicopters" },
	{"n": "November 17, 2018 06:45:00", "s":"8:00 am", "e":"9:00 am","p" : "1", "t":"Traditional Welcome & Opening Remarks", "d" : "Provided by All Orders of Government" },
    {"n": "November 17, 2018 06:45:00", "s":"9:00 am", "e":"10:00 am","p" : "1", "t":"Key Note Address: Yukon’s Mining Industry: \n\n On the front lines of Reconciliation with First Nations", "d" : "Dr. Ken Coates, Canadian Research Chair in Regional Innovation, \n\n University of Saskatchewan \n\n Sponsored by Minto Explorations Ltd." },
	{"n": "November 17, 2018 06:45:00", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Tintina Consultants" },
	{"n": "November 17, 2018 06:45:00", "s":"10:30 am", "e":"11:30 am","p" : "1", "t":"Innovations in First Nations Partnerships: Elders in Residence Program", "d" : "Janet Lee Sheriff, CEO, Golden Predator Mining Corp \n Mary Caesar, Liard First Nation Elder" },
	{"n": "November 17, 2018 06:45:00", "s":"10:30 am", "e":"11:30 am","p" : "1", "t":"Developing and Engaging Indigenous Workers for the Canadian Mining Sector", "d" : "Pascale Larouche, Senior Program Manager, Mining Industry Human Resource Council" },
    {"n": "November 17, 2018 06:45:00", "s":"11:30 am", "e":"1:00 pm","p" : "1", "t":"YUKON WOMEN IN MINING FUNDRAISER LUNCHEON & AGM", "d" : "" },
    {"n": "November 17, 2018 06:45:00", "s":"1:00 pm", "e":"2:00 pm","p" : "1", "t":"Key Note Address: Rex Murphy", "d" : "Sponsored by SGS Canada" },
    {"n": "November 17, 2018 06:45:00", "s":"2:00 pm", "e":"3:00 pm","p" : "1", "t":"Canadian Mines and Metals Plan", "d" : "Ian Green, Natural Resources Canada \n Christian Martel-Flemming, Natural Resources Canada" },
    {"n": "November 17, 2018 06:45:00", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by ALS Global" },
    {"n": "November 17, 2018 06:45:00", "s":"3:30 pm", "e":"4:30 pm","p" : "1", "t":"First Nation Joint Partnerships - A Case Study", "d" : "NANA Regional Development Corporation - Red Dog Mine \n Lance Miller, VP - Natural Resource \n Sponsored by Total North Communications \n SESSION MODERTOR: \n Yukon First Nations Chamber of Commerce" },
	{"n": "November 17, 2018 06:45:00", "s":"5:00 pm", "e":"7:00pm","p" : "2", "t":"Opening Reception", "d" : "Sponsored by Archer Cathro & Associates \nEntertainment Supported by Nuna Group of Companies" }
	];
	
	this.sunitems = [
	{"n": "November 18, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "0", "t":"hey yo", "d" : "data" },
	{"n": "November 18, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "0", "t":"yo yo yo", "d" : "data" },
	{"n": "November 18, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "0", "t":"second thing", "d" : "data" },
	{"n": "November 18, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "1", "t":"second thing 2", "d" : "data" },
    {"n": "November 18, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "1", "t":"hey yo", "d" : "data" },
	{"n": "November 18, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "2", "t":"yo yo yo", "d" : "data" },
	{"n": "November 18, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "2", "t":"second thing", "d" : "data" },
	{"n": "November 18, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "3", "t":"second thing 2", "d" : "data" },
    {"n": "November 18, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "3", "t":"third thing", "d" : "data" }		
	];
	
    this.monitems = [
	{"n": "November 19, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "0", "t":"hey yo", "d" : "data" },
	{"n": "November 19, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "0", "t":"yo yo yo", "d" : "data" },
	{"n": "November 19, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "0", "t":"second thing", "d" : "data" },
	{"n": "November 19, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "1", "t":"second thing 2", "d" : "data" },
    {"n": "November 19, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "1", "t":"hey yo", "d" : "data" },
	{"n": "November 19, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "2", "t":"yo yo yo", "d" : "data" },
	{"n": "November 19, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "2", "t":"second thing", "d" : "data" },
	{"n": "November 19, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "3", "t":"second thing 2", "d" : "data" },
    {"n": "November 19, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "3", "t":"third thing", "d" : "data" }	
	];
	
	this.tueitems = [
	{"n": "November 20, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "0", "t":"hey yo", "d" : "data" },
	{"n": "November 20, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "0", "t":"yo yo yo", "d" : "data" },
	{"n": "November 20, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "0", "t":"second thing", "d" : "data" },
	{"n": "November 20, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "1", "t":"second thing 2", "d" : "data" },
    {"n": "November 20, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "1", "t":"hey yo", "d" : "data" },
	{"n": "November 20, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "2", "t":"yo yo yo", "d" : "data" },
	{"n": "November 20, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "2", "t":"second thing", "d" : "data" },
	{"n": "November 20, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "3", "t":"second thing 2", "d" : "data" },
    {"n": "November 20, 2018 06:45:00", "s":"starttime", "e":"endtime","p" : "3", "t":"third thing", "d" : "data" }		
	];
	
	
	
	
}
  
    itemTapped(item) {
     console.log(item);
 const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };


    const agModal: Modal = this.modal.create('AgendaModalPage', { data: item }, myModalOptions);

    agModal.present();

    agModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    agModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });



  }
  
  
      goToSatPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Agenda2Page,{dayParams : this.satitems, places : this.satplaces});
     }
	 
	   goToSunPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Agenda2Page,{dayParams : this.sunitems, places : this.sunplaces});
     }
	 
	       goToMonPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Agenda2Page,{dayParams : this.monitems, places : this.monplaces});
     }
	 
	       goToTuePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Agenda2Page,{dayParams : this.tueitems, places : this.tueplaces});
     }
  
    

	 
}


