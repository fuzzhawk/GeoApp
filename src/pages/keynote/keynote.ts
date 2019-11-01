import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';



@Component({
  selector: 'page-keynote',
  templateUrl: 'keynote.html'
})

export class KeynotePage {
  selectedItem: any;
  icons: string[];
  items: Array<{name: string, t : string, time: string, place: string, src: string, bio: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal : ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

	
    this.items = [
	{"name": "Dr. Matthew Coon Come", "t" : "Former AFN Grand Chief,  Newmont Goldcorp Board Member","time":"9:00 am, Saturday", "place": "BALLROOMS A & B", "src": "../../assets/imgs/matthew.jpg", "bio": "Matthew Coon Come was the Grand Chief of the Grand Council of the Crees (Eeyou Istche) and the Chairperson of the Cree Regional Authority. He serves as a director of Labrador Iron Ore Mines Limited and, in the past, has also served as Executive Director of the Grand Council of the Crees (Eeyou Istchee), director of Aircreebec, Creeco (Cree Regional Economic Enterprises Company), the Cree Construction Company, Servinor, the James Bay Cree Cultural Education Centre, the Centre for Indigenous Environment Resources, Niskamoon Corporation, and the Cree School Board. \n \n Dr. Coon Come is the former Chief of Mistissini, National Chief of the Assembly of First Nations. Dr. Coon Come holds an Honorary Doctor of Laws from the University of Toronto and a Doctor of Laws Honoris Causta from Trent University." },
	
	{"name": "Jamile Cruz", "t" : "Founder and executive director of I&D 101","time":"11:20 am Saturday", "place": "BALLROOMS A & B", "src": "../../assets/imgs/jamile.jpg", "bio": "Jamile is the Founder and executive director of I&D 101, a consulting firm specializing in Inclusion and Diversity strategy development and implementation. She has spent over eighteen years with clients transforming businesses in high performing organizations, creating and implementing strategies to reduce operational costs and achieve their business goals. \n \n She has international experience across multiple industries including mining, engineering, telecommunications and management consulting, where she worked directly for Hatch, Vale and Accenture and advised Fortune 500 organizations. \n \n Jamile is now driven to share her knowledge and experience to create a greater social impact. She also serves as a board member of Women in Mining Canada, a leading organization for women in mining, which envisions an industry that fosters, promotes and empowers women. She holds a Project Management Professional designation, a Master’s Certificate in Project Management, and a Bachelor of Engineering degree." },
	
	{"name": "Felix Lee", "t" : "President of Prospectors and Developers Association of Canada","time":"9:00 am Sunday", "place": "BALLROOMS A & B", "src": "../../assets/imgs/felix.jpg", "bio": "Felix Lee is the 37th President of the Prospectors & Developers Association of Canada. \n \n An economic geologist with over 30 years of experience, Felix is a Director and Principal Consultant with CSA Global Canada, an international mining and geological consulting firm, where he manages the day-to-day operations of the firm’s Toronto office in conjunction with the firm’s twelve other offices worldwide. Prior to his current position, Felix was owner and president of Toronto-based mining and geological consultancy, A.C.A. Howe International Limited. \n \n As a consultant, much of Felix’s work has involved the provision of independent geological due diligence reports and mineral property valuation opinions to clients wishing to list their company on the stock exchanges, raise financing for their projects, or pursue M&A opportunities. Felix has worked with both major and junior exploration companies, managing and working on grass-roots to advanced-stage exploration projects in North America, Central Europe, South America, Central Asia, Asia, and Africa, involving a variety of deposit types and commodities.As a Director and Vice President with the PDAC, Felix has served on the Executive, Governance & Nominating, Human Resource Development, and Membership committees. Much of his 12 years with PDAC has focused on tackling the human resource challenges facing the industry and helping grow PDAC’s Student and Early Career Program, including PDAC’s Student-Industry Mineral Exploration Workshop (S-IMEW). He has valued the opportunity to work with many of Canada’s promising young geoscience students and new graduates and witnessing first-hand their knowledge and understanding of our industry grow. \n \n Felix is a registered Professional Geoscientist (P.Geo.) in the province of Ontario and a member of the Society of Economic Geologists. He received his B.Sc. in Geology from McMaster University, and earned his MBA at York University and Northwestern University." },
	
	{"name": "Vivian Krause", "t" : "Contributor to the Financial Post","time":"1:00 pm Saturday", "place": " BALLROOM B", "src": "../../assets/imgs/vivian.jpg", "bio": "" }
	];
    
  }
  
  
  itemTapped(item) {
     console.log(item);
 const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };


    const myModal: Modal = this.modal.create('KeynoteModalPage', { data: item }, myModalOptions);

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


