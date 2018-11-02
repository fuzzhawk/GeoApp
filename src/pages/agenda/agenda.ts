import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';



import { Agenda2Page } from '../agenda2/agenda2';


@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})

export class AgendaPage {
  selectedItem: any;
  satitems: Array<{n: string, b : string, s: string, e : string, t: string, p: string, d: string}>;
  sunitems: Array<{n: string, b : string, s: string, e : string, t: string, p: string, d: string}>; 
  monitems: Array<{n: string, b : string, s: string, e : string, t: string, p: string, d: string}>;
  tueitems: Array<{n: string, b : string, s: string, e : string, t: string, p: string, d: string}>;
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
	{"n": " ", "b": "0", "s":"8:00 am", "e":"5:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Finning" },
	{"n": " ", "b": "0", "s":"10:00 am", "e":"5:00pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": " ", "b": "0", "s":"10:00 am", "e":"2:00pm","p" : "0", "t":"Family Day at the Trade Show", "d" : "Sponsored by Golden Predator \nGold Panning Sponsored by Horizon Helicopters" },
	{"n": " ", "b": "0", "s":"8:00 am", "e":"9:00 am","p" : "1", "t":"Traditional Welcome & Opening Remarks", "d" : "Provided by All Orders of Government" },
    {"n": " ", "b": "0", "s":"9:00 am", "e":"10:00 am","p" : "1", "t":"Key Note Address: Yukon’s Mining Industry: \nOn the front lines of Reconciliation with First Nations", "d" : "Dr. Ken Coates, Canadian Research Chair in Regional Innovation, \nUniversity of Saskatchewan \nSponsored by Minto Explorations Ltd." },
	{"n": " ", "b": "1", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Tintina Consultants" },
	{"n": " ", "b": "0", "s":"10:30 am", "e":"11:30 am","p" : "1", "t":"Innovations in First Nations Partnerships: Elders in Residence Program", "d" : "Janet Lee Sheriff, CEO, Golden Predator Mining Corp \nMary Caesar, Liard First Nation Elder" },
    {"n": " ", "b": "0", "s":"11:30 am", "e":"1:00 pm","p" : "1", "t":"YUKON WOMEN IN MINING FUNDRAISER LUNCHEON & AGM", "d" : "" },
    {"n": " ", "b": "0", "s":"1:00 pm", "e":"2:00 pm","p" : "1", "t":"Key Note Address: Rex Murphy", "d" : "Sponsored by SGS Canada" },
    {"n": " ", "b": "0", "s":"2:00 pm", "e":"3:00 pm","p" : "1", "t":"Canadian Minerals and Metals Plan", "d" : "Ian Green, Natural Resources Canada \nChristian Martel-Flemming, Natural Resources Canada" },
    {"n": " ", "b": "1", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by ALS Global" },
    {"n": " ", "b": "0", "s":"3:30 pm", "e":"4:30 pm","p" : "1", "t":"Alaska Native Corporations: Leveraging Partnerships for Mineral Development", "d" : "NANA Regional Corporation\nLance Miller, VP - Natural Resources \nLarry Hannah, Senior Director - Natural Resources \nSponsored by Total North Communications \nSESSION MODERATOR: \nYukon First Nations Chamber of Commerce" },
	{"n": " ", "b": "0", "s":"5:00 pm", "e":"7:00pm","p" : "2", "t":"Opening Reception", "d" : "Sponsored by Archer Cathro & Associates \nEntertainment Supported by Nuna Group of Companies" }
	];
	
	this.sunitems = [
	{"n": " ", "b": "0", "s":"8:00 am", "e":"5:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Fireweed Zinc Corp" },
	{"n": " ", "b": "0", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": " ", "b": "0", "s":"3:30 pm", "e":"5:00 pm","p" : "0", "t":"YGS Poster Display and Core Shack Happy Hour", "d" : "Sponsored by BMC Minerals  \nSupported by Aurora Geosciences" },
	{"n": " ", "b": "0", "s":"8:30 am", "e":"9:00 am","p" : "1", "t":"Welcome Remarks", "d" : "Sue Craig, President, Yukon Chamber of Mines \n Anne Turner, Executive Director, Yukon Mining Alliance \n Hon. Ranj Pillai, Minister of Economic Development, Government of Yukon" },
    {"n": " ", "b": "0", "s":"9:00 am", "e":"9:45 am","p" : "1", "t":"Keynote Address: Canada's Mineral Industry Competitiveness: An Overview ", "d" : "Glenn Mullan\nPresident, Prospector’s and Developer’s Association of Canada \nSponsored by: Coeur Mining" },
	{"n": " ", "b": "0", "s":"9:45 am", "e":"10:00 am","p" : "1", "t":"Corporate Update: Fireweed Zinc Corp", "d" : "Brandon MacDonald, President & CEO" },
	{"n": " ", "b": "1", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Coeur Mining" },
	{"n": " ", "b": "0", "s":"10:30 am", "e":"10:45 am","p" : "1", "t":"Corporate Update: Golden Predator Corp", "d" : "Janet Lee-Sheriff, CEO" },
    {"n": " ", "b": "0", "s":"10:45 am", "e":"11:00 am","p" : "1", "t":"Corporate Update: Western Copper and Gold Corp", "d" : "Paul West Sells, President & CEO" },
	{"n": " ", "b": "0", "s":"11:00 am", "e":"11:30 am","p" : "1", "t":"Junior Explorers Roundtable Highlights", "d" : "Rockhaven Resources - Matt Turner, President & CEO \nCopper North Mining Corp. - \nDoug Ramsey, VP Sustainability & Environmental Affairs \n\nSESSION MODERATOR: \nGary Baschuk, Managing Director, Mining & Senior Geologist, Peartree Canada" },
	{"n": " ", "b": "1", "s":"11:30 am", "e":"1:00 pm","p" : "1", "t":"BEEF AND BUN LUNCHEON (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Alexco Resource Corp" },
	{"n": " ", "b": "0", "s":"1:00 pm", "e":"1:30 pm","p" : "1", "t":"Keynote: Invest Yukon: The Millenial Investor & Yukon’s Digital Strategy", "d" : "Anne Turner, Yukon Mining Alliance \nSponsored by Cobalt Construction " },
	{"n": " ", "b": "0", "s":"1:30 pm", "e":"1:45 pm","p" : "1", "t":"Corporate Update: Nickel Creek Platinum", "d" : "Diane Garrett, President & CEO" },
    {"n": " ", "b": "0", "s":"1:45 pm", "e":"2:00 pm","p" : "1", "t":"Corporate Update: Alexco Resource Corp", "d" : "Clynt Nauman, CEO" },	
    {"n": " ", "b": "0", "s":"2:00 pm", "e":"2:15 pm","p" : "1", "t":"Corporate Update: White Gold Corp", "d" : "David Schmidt, CFO" },	
    {"n": " ", "b": "0", "s":"2:15 pm", "e":"3:00 pm","p" : "1", "t":"Junior Explorers Roundtable Highlights", "d" : "Metallic Minerals Corp. - Greg Johnson, President & CEO \nStrategic Metals Ltd. - Doug Eaton, President & CEO \nGo Cobalt Mining - Scott Sheldon, Director & CEO \nSESSION MODERATOR: \nJames Kwantes, Editor, Resource Opportunities" },	
    {"n": " ", "b": "1", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by ALS Global" },	
    {"n": " ", "b": "0", "s":"3:30 pm", "e":"4:00 pm","p" : "1", "t":"Junior Explorers Roundtable Highlights", "d" : "Banyan Gold Corp - Tara Christie, President & CEO \nKlondike Gold Corp - Peter Tallman, President & CEO \nVictoria Gold Corp - John McConnell, President & CEO" },	
    {"n": " ", "b": "0", "s":"4:00 pm", "e":"4:30 pm","p" : "1", "t":"Junior Explorers Roundtable Highlights", "d" : "ATAC Resources Ltd - Graham Downs, President & CEO \nK2 Gold Corp - Steve Swatton, President & CEO \nGroup Ten Metals - Greg Johnson, Executive Chairman & Director \nSESSION MODERATOR:\nByron King - Editor, Agora Financial" },	
    {"n": " ", "b": "0", "s":"4:30 pm", "e":"5:00 pm","p" : "1", "t":"Fireside Chat: Engaging Today’s Investors in an Age of Pot & Crypto", "d" : "Byron King - Editor, Agora Financial \nGary Baschuk - Managing Director, Mining & Senior Geologist, Peartree Canada \nJames Kwantes - Editor, Resource Opportunities \n\n SESSION MODERATOR: \nAnne Turner, Executive Director, Yukon Mining Alliance" },	
	{"n": " ", "b": "0", "s":"8:00 am", "e":"4:00 pm","p" : "2", "t":"Yukon Placer Forum", "d" : "" },
	{"n": " ", "b": "0", "s":"4:00 pm", "e":"5:30 pm","p" : "2", "t":"Klondike Placer Miners’ Association Reception", "d" : "" },
	{"n": " ", "b": "0", "s":"7:00 pm", "e":"late","p" : "3", "t":"Mine Bender", "d" : "Presented by Alkan Air Ltd., Total North Communications, \nSmall’s Expediting Services, Equity Exploration and ALX" }
	];
	
    this.monitems = [
	{"n": " ", "b": "0", "s":"8:00 am", "e":"5:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Klondike Crane Inspections" },
	{"n": " ", "b": "0", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": " ", "b": "0", "s":"9:30 am", "e":"3:00 pm","p" : "0", "t":"Yukon Student Tours", "d" : "Presented by the Yukon Geological Survey \nSponsored by Nuway Crushing \nSupported by Kluane Drilling" },
	{"n": " ", "b": "0", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"Yukon Geological Survey Poster and Core Display ", "d" : "" },
    {"n": " ", "b": "0", "s":"8:30 am", "e":"9:00 am","p" : "1", "t":"Opening Remarks", "d" : "Hon. Ranj Pillai, Minister of Energy, Mines & Resources" },
	{"n": " ", "b": "0", "s":"9:00 am", "e":"9:30 am","p" : "1", "t":"Yukon Hardrock Exploration & Mining Overview 2018", "d" : "Scott Casselman, Head of Mineral Services, Yukon Geological Survey" },
	{"n": " ", "b": "0", "s":"9:30 am", "e":"10:00 am","p" : "1", "t":"Yukon Placer Mining Overview 2018", "d" : "Jeff Bond, Head Surficial Geologist, Yukon Geological Survey" },
	{"n": " ", "b": "1", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Coeur Mining" },
    {"n": " ", "b": "0", "s":"10:30 am", "e":"10:50 am","p" : "1", "t":"Optimizing Fish Habitat Offsetting Plans for Streamlined Project Approvals in Northern Canada ", "d" : "Robin McKillop & Rick Palmer, Palmer Environmental" },
	{"n": " ", "b": "0", "s":"10:50 am", "e":"11:10 am","p" : "1", "t":"Geothermal Research in Yukon", "d" : "Tiffani Fraser, Petroleum Geologist, Yukon Geological Survey" },
	{"n": " ", "b": "0", "s":"11:10 am", "e":"11:30 am","p" : "1", "t":"3-D Geophysical Investigation of a middle Cretaceous to Paleocene regional crustal detachment in the Cordillera of Northern Canada and Alaska", "d" : "Dr. Nathan Hayward, Research Scientist - Geophysics, Geological Survey of Canada" },
	{"n": " ", "b": "1", "s":"11:30 am", "e":"1:00 pm","p" : "1", "t":"BEER AND SANDWICH LUNCHEON (Yukon Convention Centre - Trade Show Floor) ", "d" : "Sponsored by Associated Engineering" },
    {"n": " ", "b": "0", "s":"1:00 pm", "e":"1:20 pm","p" : "1", "t":"Structure of the Eastern Frances Lake Area (105H), Southeastern Yukon", "d" : "David Moynihan, Project Geologist, Yukon Geological Survey" },
	{"n": " ", "b": "0", "s":"1:20 pm", "e":"1:40 pm","p" : "1", "t":"Golden Culvert Project - 2018 Exploration Results and Update", "d" : "Kim Tyler, President & CEO, Stratabound Minerals Corp" },
	{"n": " ", "b": "0", "s":"1:40 pm", "e":"2:00 pm","p" : "1", "t":"Update on the Justin Gold Project - The Lost Ace", "d" : "Mike McCuaig, Project Manager, Aben Resources Ltd." },
	{"n": " ", "b": "0", "s":"2:00 pm", "e":"2:20 pm","p" : "1", "t":"3 Aces - Uncovering the Orogenic Model in the Hyland Gold Belt", "d" : "Rich Goldfarb, Director, Golden Predator Mining Corp" },
	{"n": " ", "b": "0", "s":"2:20 pm", "e":"2:40 pm","p" : "1", "t":"Rackla Gold Project - 2018 Exploration Update", "d" : "Julia Lane, Vice President Exploration, Atac Resources Ltd." },
	{"n": " ", "b": "0", "s":"2:40 pm", "e":"3:00 pm","p" : "1", "t":"Tom and Jason shale-hosted Zn-Pb-Ag deposits MacMillan Pass, Yukon", "d" : "Jack Milton, Chief Geologist, Fireweed Zinc Ltd" },
    {"n": " ", "b": "1", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by K&K Truck Rentals" },
    {"n": " ", "b": "0", "s":"10:30 am", "e":"11:30 am","p" : "2", "t":"Keynote Address: Innovating at the Speed of Trust", "d" : "Canada Mining Innovation Council \nCarl Weatherell, Executive Director and CEO" },
    {"n": " ", "b": "1", "s":"11:30 am", "e":"1:00 pm","p" : "2", "t":"BEER AND SANDWICH LUNCHEON (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Associated Engineering" },
    {"n": " ", "b": "0", "s":"1:00 pm", "e":"1:15 pm","p" : "2", "t":"Invest Yukon: Building an International Brand for Investement Attraction", "d" : "Anne Turner (Lewis), Executive Director, Yukon Mining Alliance" },
    {"n": " ", "b": "0", "s":"1:15 pm", "e":"1:30 pm","p" : "2", "t":"Video Release: Yukon Placer Mining #its in our communities", "d" : "Jonas Smith, Executive Director, Klondike Placer Miners Association" },
    {"n": " ", "b": "0", "s":"1:30 pm", "e":"1:45 pm","p" : "2", "t":"Yukon Mining Days: Diversity, Inclusion & Communities", "d" : "Anne Turner, President, Yukon Women in Mining" },
    {"n": " ", "b": "0", "s":"1:45 pm", "e":"2:15 pm","p" : "2", "t":"Minto Socio-Economic Program Report", "d" : "Jennifer Russell, Manager of Mineral Planning & Development, \nDepartment of Energy, Mines & Resources \nLois Craig, Selkirk First Nation \nRyan Hebert, Minto Explorations Ltd. " },
    {"n": " ", "b": "0", "s":"2:15 pm", "e":"3:00 pm","p" : "2", "t":"Is Government Fufilling it’s Duty To Consult?", "d" : "Stewart Muir, Executive Director, Resource Works" },
    {"n": " ", "b": "1", "s":"3:00 pm", "e":"3:30 pm","p" : "2", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by K&K Truck Rentals" },
    {"n": " ", "b": "0", "s":"3:30 pm", "e":"4:00 pm","p" : "2", "t":"Yukon’s Class 1 Notification System - What does it mean? How does it work?", "d" : "Bobby Milnes, Manager of Mining Lands, Department of Energy, Mines & Resources" },	
    {"n": " ", "b": "0", "s":"4:30 pm", "e":"6:00 pm","p" : "3", "t":"Yukon WIM Reception - Multipurpose Room", "d" : "Sponsored by Victoria Gold Corp & Casino Mining Corp" },
    {"n": " ", "b": "0", "s":"6:00 pm", "e":"7:00 pm","p" : "3", "t":"Champagne Reception - Longhouse", "d" : "Sponsored by Ecofor" },
    {"n": " ", "b": "0", "s":"7:00 pm", "e":"10:00 pm","p" : "3", "t":"YCM Awards Banquet - Longhouse", "d" : "Sponsored by Alkan Air Ltd. \nTable wine provided by Cobalt Construction \nCoat Check Supported By Solidus Geological Services " },
    {"n": " ", "b": "0", "s":"10:00 pm", "e":"late","p" : "3", "t":"Post Banquet Reception & Dance - Multipurpose Room - Live Music by Major Funk and the Employment", "d" : "Sponsored by Northwestel \nSupported by Yukon Brewing Company & Major Drilling" }
	];
	
	this.tueitems = [
	{"n": " ", "b": "0", "s":"8:00 am", "e":"12:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Puff-Wik Inc " },	
	{"n": " ", "b": "0", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": " ", "b": "0", "s":"9:30 am", "e":"2:00 pm","p" : "0", "t":"Yukon Student Tours", "d" : "Presented by the Yukon Geological Survey \nSponsored by Nuway Crushing \nSupported by Kluane Drilling" },
	{"n": " ", "b": "0", "s":"9:00 am", "e":"9:20 am","p" : "1", "t":"Geology and genesis of the Coffee gold deposit: implications for the tectonic and metallogenic evolution of the northern Cordillera and gold deposit models", "d" : "Kathryn MacWilliam, Senior Geoscientist, Goldcorp" },
	{"n": " ", "b": "0", "s":"9:20 am", "e":"9:40 am","p" : "1", "t":"Conjugate brittle NW-striking dextral and NE-striking sinistral faults, coincident with north-south shortening and clockwise block rotations, enabled mineralization in the White Gold district since Jurassic", "d" : "Mike Cooley, Structural Geologist, White Gold Corp." }, 
	{"n": " ", "b": "0", "s":"9:40 am", "e":"10:00 am","p" : "1", "t":"Metallogeny, geology, and gold mineralization in the Klondike District, Yukon", "d" : "Peter Tallman, President & CEO, Klondike Gold Corp." }, 
	{"n": " ", "b": "1", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Engage Digital Signage" }, 
	{"n": " ", "b": "0", "s":"10:30 am", "e":"10:50 am","p" : "1", "t":"Diatremes, Breccias and Passive Hosts. What lies beneath Triumph Gold’s Blue Sky Zone?", "d" : "Tony Barresi, Vice President Exploration, Triumph Gold Corp." }, 	
	{"n": " ", "b": "0", "s":"10:50 am", "e":"11:00 am","p" : "1", "t":"Community-based assessment of tailings disposal technology for the Casino mine", "d" : "Mary Mioska, Senior Environmental Manager, Casino Mining Corporation" },
	{"n": " ", "b": "0", "s":"11:10 am", "e":"11:30 pm","p" : "1", "t":"Formation of the Wernecke Breccia with focus on the Monster Property", "d" : "Jaap Verbaas, Vice President Exploration, Go Cobalt Mining Corp." }, 
	{"n": " ", "b": "0", "s":"11:30 am", "e":"1:30 pm","p" : "1", "t":"YUKON CHAMBER OF MINES LUNCHEON AND AGM (Coast High Country Inn – Ballroom A)", "d" : "Sponsored by Ferus" },
	{"n": " ", "b": "0", "s":"1:30 pm", "e":"1:50 pm","p" : "1", "t":"Early Mesozoic terrane paradox in the northern Cordillera: A GEM2 Perspective", "d" : "Alex Zagorevski, Research Scientist, Geological Survey of Canada" }, 
	{"n": " ", "b": "0", "s":"1:50 pm", "e":"2:10 pm","p" : "1", "t":"Middle to Triassic to Late Cretaceous evolution of the east Lake Laberge area, Yukon", "d" : "Esther Bordet, Project Geologist, Yukon Geological Survey" }, 
	{"n": " ", "b": "0", "s":"2:10 pm", "e":"2:30 pm","p" : "1", "t":"Mt. Hinton: a golden core to a silver district", "d" : "Heather Burrell, Geologial Consultant, Strategic Metals Ltd" }, 
	{"n": " ", "b": "0", "s":"2:30 pm", "e":"2:50 pm","p" : "1", "t":"Upper Devonian felsic volcanism at the Kudz Ze Kayah Zn-Pb-Cu VMS deposit, Finlayson Lake district, Yukon: Insights from high-precision CA-ID-TIMS U-Pb zircon geochronology", "d" : "Matthew Manor, PhD Candidate, Memorial University of Newfoundland" },
	{"n": " ", "b": "0", "s":"2:50 pm", "e":"3:10 pm","p" : "1", "t":"Northeast Glenlyon geology - Paleozoic stratigraphic revisions and improvements in structural detail provide better understanding of historical mineral occurences", "d" : "Rosie Cobbett, Project Geologist, Yukon Geological Survey" }, 
	{"n": " ", "b": "0", "s":"3:10 pm", "e":"3:30 pm","p" : "1", "t":"Intrustion Related, Sediment-Hosted Gold Mineralization: Perspectives from Hyland & Aurex-McQuesten Projects, Yukon", "d" : "James Thom, Senior Geologist & Field Manager, Banyan Gold Corp." }, 
	{"n": " ", "b": "1", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Yukon, North of Ordinary" }, 
	{"n": " ", "b": "0", "s":"8:00 am", "e":"8:40 am","p" : "2", "t":"Yukon Producers’ Group - People. Progress. Prosperity.", "d" : "Brad Thrall, Chair, Alexco Resource Corp. \nJennifer Byram, VP, Pelly Construction" }, 
	{"n": " ", "b": "0", "s":"8:40 am", "e":"9:00 am","p" : "2", "t":"Coeur Silvertip Mine: The Yukon Mine Positioned in B.C.", "d" : "\nSebastien Tolgyesi, Operations manager  \nWill Robinson, Sr. Exploration Ecologist" }, 	
	{"n": " ", "b": "0", "s":"9:00 am", "e":"9:20 am","p" : "2", "t":"Innovative Partners Fueling Yukon Mines", "d" : "Blaire Lancaster, VP, Business Development, Ferus Natural Gas \nSean Kinmonth, Chief Operating Officer, Chieftan Energy \nRon Daub Chief Executive Officer Vuntut Development Corp" },
	{"n": " ", "b": "0", "s":"9:20 am", "e":"9:40 am","p" : "2", "t":"Gearing Up - How Work Integrated Learning Can Help STEM-related Mining Labour Force", "d" : "Jennifer Wright, Senior Director, Employment & Diversity Initiatives, Mining Industry Human Resource Council (MiHR)" },
	{"n": " ", "b": "0", "s":"9:40 am", "e":"10:00 am","p" : "2", "t":"Developing and Engaging Indigenous Workers for the Canadian Mining Sector", "d" : "Pascale Larouche, Senior Program Manager, Mining Industry Human Resource Council (MIHR)" },
	{"n": " ", "b": "1", "s":"10:00 am", "e":"10:30 am","p" : "2", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Engage Digital Signage" },
	{"n": " ", "b": "0", "s":"10:30 am", "e":"10:50 am","p" : "2", "t":"Finding Common Ground: Regional Planning’s Contribution to Regulatory Certainty", "d" : "Pearl Callaghan, Chair, Yukon Land Use Planning Council \nRon Cruikshank, Director, Yukon Land Use Planning Council" },
	{"n": " ", "b": "0", "s":"10:50 am", "e":"11:10 am","p" : "2", "t":"Yukon Environmental and Socio-Economic Assessment Board: Key Priorities and the Development of a New Assessment and Management System", "d" : "Tim Smith, Executive Director, YESAB \nRob Yeomans, IT/Communications Manager, YESAB" },
	{"n": " ", "b": "0", "s":"11:10 am", "e":"11:30 am","p" : "2", "t":"Yukon Water Board", "d" : "Roger Lockwood, Director, Yukon Water Board" },
	{"n": " ", "b": "0", "s":"11:30 am", "e":"1:30 pm","p" : "2", "t":"YUKON CHAMBER OF MINES LUNCHEON AND AGM  (Coast High Country Inn – Ballroom A)", "d" : "Sponsored by Ferus" },
	{"n": " ", "b": "0", "s":"1:00 pm", "e":"1:30 pm","p" : "2", "t":"The Runway, Roadway and Soil Stabilization Solutions for Mining Operations", "d" : "Faun, Trackway USA \nRobert Kendall, Chairperson of the Alternate Runway Material Test Program" },
	{"n": " ", "b": "0", "s":"1:30 pm", "e":"2:00 pm","p" : "2", "t":"Why Faro Won’t Happen Again", "d" : "Eric Boye, Geoscientist, Core Geoscience Services" },
	{"n": " ", "b": "0", "s":"2:00 pm", "e":"3:00 pm","p" : "2", "t":"Exploring Business and Entreprenuership Opportunities through Yukon’s Mining Supply Chain", "d" : "Shelagh Rowles, Executive Director, Centre for Northern Innovation in Mining (CNIM) \nGinny Coyne, Coordinator, Centre for Northern Innovation in Mining (CNIM) \nSara Thompson, Program Enhancement Officer, Northern Energy Innovation/Cold Climate Innovation \n" },
	{"n": " ", "b": "1", "s":"3:00 pm", "e":"3:30 pm","p" : "2", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Yukon, North of Ordinary" },
	{"n": " ", "b": "0", "s":"3:30 pm", "e":"4:30 pm","p" : "2", "t":"Yukon University - An Oppportunity for Growth", "d" : "Karen Barnes, President & Chanceller, Yukon College \nWendy Tayler, Chair, YukonU Foundation \nTosh Southwick, Associate Vice President, Indigenous Engagement & Reconciliation \n" },
	{"n": " ", "b": "0", "s":"4:30 am", "e":"6:00 pm","p" : "3", "t":"Closing Reception", "d" : "Sponsored by Northern Vision Development LLP  \nEntertainment Sponsored by ATAC Resources" }
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


