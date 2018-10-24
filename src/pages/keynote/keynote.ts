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
	{"name": "Rex Murphy", "t" : "","time":"1:00 pm", "place": "BALLROOMS A & B", "src": "../../assets/imgs/rex.jpg", "bio": "Canadians are treated to weekly commentary from Rex on CBC’s The National along with his Saturday column in the National Post. He’s also acted as an editorial contributor to CBC Radio’s Definitely Not the Opera. For over 20 years he was the host and moderator of CBC Radio’s Cross Country Checkup. The show brought over 1 million listeners and at times 15,000 callers wanting to join in discussions. \n \n As a keynote speaker, Rex radiates intelligence and trustworthiness. His endearing style brings forth a sarcastic intellect and deep insight into issues affecting individuals and businesses. \n \n Audiences can expect to be simultaneously informed and entertained by Rex’s provocative commentary. He knows what makes Canadians tick, and what drives our political and social affairs. Rex makes us important and reminds us we have culture beyond hockey. His thought-provoking, sometimes stinging commentary and original insights are delivered through a vocabulary to make Webster’s consider updating. \n \n A Rhodes Scholar, Rex was born and raised in St. John’s, Nfld., where he graduated from Memorial University. He went to Oxford University, along with former U.S. President Bill Clinton. Rex later ran twice in provincial elections and lost both times. Maybe he was too honest?" },
	
	{"name": "Ken Coates", "t" : "Canada Research Chair in Regional Innovation","time":"9:00 am", "place": "BALLROOMS A & B", "src": "../../assets/imgs/ken.jpg", "bio": "Ken Coates is Canada Research Chair in Regional Innovation at the Johnson-Shoyama Graduate School of Public Policy, University of Saskatchewan campus. Ken was raised in Whitehorse, Yukon, and has long-standing professional and personal interests in Aboriginal rights, northern development, northern Canadian history, science, technology and society, and Japan Studies.\n \n He received his BA (History) from UBC, MA (History) from Manitoba and PhD (History) from UBC. Ken has had the distinct pleasure of working at universities across Canada and internationally, starting at Brandon University and continuing at the University of Victoria, and the University of Northern British Columbia (where he was the Founding Vice-President Academic). He spent two years at the University of Waikato in Hamilton, New Zealand, an institution known globally for its work on Indigenous education. Ken returned to Canada in 1997 to take a position as Dean of Arts at the University of New Brunswick at Saint John. He then became Dean of Arts and Science at the University of Saskatchewan, later serving as Dean of Arts, University of Waterloo. He returned to Saskatchewan in 2012. \n \n Ken has written extensively on Aboriginal history, Indigenous-newcomer relations and post-secondary education. His first major work, Best Left as Indians, examined the history of the Yukon through the lens of Aboriginal-European contact. His subsequent work includes The Marshall Decision and Aboriginal Rights in the Maritimes, Land of the Midnight Sun: A History of the Yukon and shortly, a co-authored book called Treaty Peoples: Aboriginal People and the Future of Canada. He has published more than a dozen books with his regular co-author, Dr. W.R. Morrison, and has worked with Carin Holroyd on a series of projects related to science and technology in East Asia. Ken’s co-authored book, Campus Confidential, offered an accessible review of the accomplishments and challenges of the post-secondary system in Canada and is being followed up by a book aimed at high school students and their parents about post-graduate opportunities." },
	
	{"name": "Glenn Mullan", "t" : "President, Prospectors & Developers of Canada","time":"9:00 am", "place": "BALLROOMS A & B", "src": "../../assets/imgs/glenn.jpg", "bio": "Glenn Mullan is the 36th President of the Prospectors & Developers of Canada (PDAC). \n \n Over his +40-year career, Glenn has followed a traditional exploration and prospecting path. He began with contract geophysical surveys, where he caught the bug for being in the North and working in remote locations, then began prospecting and staking mining claims independently while completing his B.Sc. in Geology and Earth Sciences at Concordia University. He later conducted contract exploration geological services, mostly located in Northern Ontario and Québec. \n \n Glenn would go on to broker numerous prospector/vendor transactions with arms-length public companies, and form a public company in 1999 that evolved into Ni-Cu-PGE producer that currently employs more than 300 people in Northern Québec. Glenn has a broad spectrum of industry-related experience—across Canada and Africa—including early-stage acquisitions and exploration through PEA, BFS, permitting and mine development-stages, as well as CSR initiatives, financing and corporate development. That said, he much prefers early-stage grassroots exploration in remote locations and near his home base in Val-D’Or, Québec. \n \n Currently, Glenn serves as President and CEO of Golden Valley Mines Ltd, where his main area of interest continues to be grassroots early-stage exploration, primarily for base and precious metals in Canada and abroad. Glenn has been a PDAC member for over 40 years, serving on the Executive Committee, Awards Committee, CSR Committee and the Governance & Nominating Committee." },
	
	{"name": "Stewart Muir", "t" : "Executive Director, Resource Works","time":"2:15 pm", "place": " BALLROOM B", "src": "../../assets/imgs/stewart.jpg", "bio": "Resource Works communicates with British Columbians about the importance of the province's resource sectors to their personal well-being. It demonstrates how responsible development of British Columbia's resources creates jobs and incomes throughout the province, both directly and in directly, while maintaining a clean and healthy environment. \n \n And Resource Works explores the long-term economic future of British Columbia as a place that depends on the responsible development, extraction and transportation of the province's resources.   Muir is a historian and award-winning journalist with a passion for the natural legacies of British Columbia. A graduate of Simon Fraser University and the University of British Columbia, he was a director of The Nature Trust of British Columbia from 2006 until 2014. During a fellowship at the renowned Centre for the Study of European Expansion at Leiden University in The Netherlands, he studied economic botany and the long-term consequences of deforestation and climate change. \n \n Muir was a contributing author to The Sea Among Us: Life and History of The Strait of Georgia, an award-winning book edited by Richard Beamish and Sandy McFarlane. Published in November 2014, The Sea Among Us covers the natural and human history of a body of water that is of fundamental importance in every sense to all British Columbians. In April 2015, the title was awarded the BC Book Prize as \"the most outstanding work that contributes to an understanding of British Columbia.\"" },
	
	{"name": "Carl Weatherell", "t":"Executive Director, Canada Mining Innovation Council", "time":"10:30 am", "place": "BALLROOM B", "src": "../../assets/imgs/carl.jpg", "bio": "Carl Weatherell joined the Canada Mining Innovation Council (CMIC) as Executive Director and CEO in 2013. Carl is a change agent known for challenging the status quo, discovering new ways of doing things and taking ideas to execution. He is a natural connector often bringing together disparate and seemingly unrelated people, groups and organizations to create new partnerships. \n \n Carl has been described as a rebel and a heretic. He has over 27 years’ experience working at the interface of business, government and postsecondary institutions nationally and internationally. Carl has helped position organizations for success and has established, managed or facilitated the development of strategies with a number of organizations and over 13 different consortia comprised of 200 businesses, 30 government organizations and at least 180 different academic institutions. \n \n Carl obtained graduate and undergraduate degrees in chemistry from Carleton University and the University of Waterloo respectively. He holds one patent and has publications in five different technical domains: hydrometallurgical engineering, organometallic chemistry, analytical chemistry, environmental engineering and project management." }	
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


