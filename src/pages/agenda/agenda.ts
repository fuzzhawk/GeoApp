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
	{"n": " ", "s":"8:00 am", "e":"5:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Finning" },
	{"n": " ", "s":"10:00 am", "e":"5:00pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": " ", "s":"10:00 am", "e":"2:00pm","p" : "0", "t":"Family Day at the Trade Show", "d" : "Sponsored by Golden Predator \n Gold Panning Sponsored by Horizon Helicopters" },
	{"n": " ", "s":"8:00 am", "e":"9:00 am","p" : "1", "t":"Traditional Welcome & Opening Remarks", "d" : "Provided by All Orders of Government" },
    {"n": " ", "s":"9:00 am", "e":"10:00 am","p" : "1", "t":"Key Note Address: Yukon’s Mining Industry: \n On the front lines of Reconciliation with First Nations", "d" : "Dr. Ken Coates, Canadian Research Chair in Regional Innovation, \n University of Saskatchewan \n Sponsored by Minto Explorations Ltd." },
	{"n": " ", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Tintina Consultants" },
	{"n": " ", "s":"10:30 am", "e":"11:30 am","p" : "1", "t":"Innovations in First Nations Partnerships: Elders in Residence Program", "d" : "Janet Lee Sheriff, CEO, Golden Predator Mining Corp \n Mary Caesar, Liard First Nation Elder" },
    {"n": " ", "s":"11:30 am", "e":"1:00 pm","p" : "1", "t":"YUKON WOMEN IN MINING FUNDRAISER LUNCHEON & AGM", "d" : "" },
    {"n": " ", "s":"1:00 pm", "e":"2:00 pm","p" : "1", "t":"Key Note Address: Rex Murphy", "d" : "Sponsored by SGS Canada" },
    {"n": " ", "s":"2:00 pm", "e":"3:00 pm","p" : "1", "t":"Canadian Minerals and Metals Plan", "d" : "Ian Green, Natural Resources Canada \n Christian Martel-Flemming, Natural Resources Canada" },
    {"n": " ", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by ALS Global" },
    {"n": " ", "s":"3:30 pm", "e":"4:30 pm","p" : "1", "t":"First Nation Joint Partnerships - A Case Study", "d" : "NANA Regional Development Corporation - Red Dog Mine \n Lance Miller, VP - Natural Resource \n Sponsored by Total North Communications \n SESSION MODERATOR: \n Yukon First Nations Chamber of Commerce" },
	{"n": " ", "s":"5:00 pm", "e":"7:00pm","p" : "2", "t":"Opening Reception", "d" : "Sponsored by Archer Cathro & Associates \nEntertainment Supported by Nuna Group of Companies" }
	];
	
	this.sunitems = [
	{"n": " ", "s":"8:00 am", "e":"5:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Fireweed Zinc Corp" },
	{"n": " ", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": " ", "s":"3:30 pm", "e":"5:00 pm","p" : "0", "t":"YGS Poster Display and Core Shack Happy Hour", "d" : "Sponsored by BMC Minerals  \n Supported by Aurora Geosciences" },
	{"n": " ", "s":"8:30 am", "e":"9:00 am","p" : "1", "t":"Welcome Remarks", "d" : "Samson Hartland, Executive Director, Yukon Chamber of Mines \n  Anne Turner, Executive Director, Yukon Mining Alliance \n  Hon. Ranj Pillai, Minister of Economic Development, Government of Yukon" },
    {"n": " ", "s":"9:00 am", "e":"9:45 am","p" : "1", "t":"Keynote Address: Glenn Mullan", "d" : "Canada's Mineral Industry Competitiveness: An Overview \n President, Prospector’s and Developer’s Association of Canada \n Sponsored by: Coeur Mining" },
	{"n": " ", "s":"9:45 am", "e":"10:00 am","p" : "1", "t":"Corporate Update: Fireweed Zinc Corp", "d" : "Brandon MacDonald, President & CEO" },
	{"n": " ", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Coeur Mining" },
	{"n": " ", "s":"10:30 am", "e":"10:45 am","p" : "1", "t":"Corporate Update: Golden Predator Corp", "d" : "Janet Lee-Sheriff, CEO" },
    {"n": " ", "s":"10:45 am", "e":"11:00 am","p" : "1", "t":"Corporate Update: Western Copper and Gold Corp", "d" : "Paul West Sells, President & CEO" },
	{"n": " ", "s":"11:00 am", "e":"11:30 am","p" : "1", "t":"Junior Explorers Roundtable Highlights", "d" : "Rockhaven Resources - Matt Turner, President & CEO \n Copper North Mining Corp. - \n Doug Ramsey, VP Sustainability & Environmental Affairs \n \n SESSION MODERATOR: \n Gary Baschuk, Managing Director, Mining & Senior Geologist, Peartree Canada" },
	{"n": " ", "s":"11:30 am", "e":"1:00 pm","p" : "1", "t":"BEEF AND BUN LUNCHEON (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Alexco Resource Corp" },
	{"n": " ", "s":"1:00 pm", "e":"1:30 pm","p" : "1", "t":"Keynote: Invest Yukon: The Millenial Investor & Yukon’s Digital Strategy", "d" : "Anne Turner, Yukon Mining Alliance \n Sponsored by Cobalt Construction " },
	{"n": " ", "s":"1:30 pm", "e":"1:45 pm","p" : "1", "t":"Corporate Update: Nickel Creek Platinum", "d" : "Diane Garrett, President & CEO" },
    {"n": " ", "s":"1:45 pm", "e":"2:00 pm","p" : "1", "t":"Corporate Update: Alexco Resource Corp", "d" : "Clynt Nauman, CEO" },	
    {"n": " ", "s":"2:00 pm", "e":"2:15 pm","p" : "1", "t":"Corporate Update: White Gold Corp", "d" : "David Schmidt, CFO" },	
    {"n": " ", "s":"2:15 pm", "e":"3:00 pm","p" : "1", "t":"Junior Explorers Roundtable Highlights", "d" : "Metallic Minerals Corp. - Greg Johnson, President & CEO \n Strategic Metals Ltd. - Doug Eaton, President & CEO \n Go Cobalt Mining - Scott Sheldon, Director & CEO \n SESSION MODERATOR: \n James Kwantes, Editor, Resource Opportunities" },	
    {"n": " ", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by ALS Global" },	
    {"n": " ", "s":"3:30 pm", "e":"4:00 pm","p" : "1", "t":"Junior Explorers Roundtable Highlights", "d" : "Banyan Gold Corp - Tara Christie, President & CEO \n Klondike Gold Corp - Peter Tallman, President & CEO \n Victoria Gold Corp - John McConnell, President & CEO" },	
    {"n": " ", "s":"4:00 pm", "e":"4:30 pm","p" : "1", "t":"Junior Explorers Roundtable Highlights", "d" : "ATAC Resources Ltd - Graham Downs, President & CEO \n K2 Gold Corp - Steve Swatton, President & CEO \n Group Ten Metals - Greg Johnson, Executive Chairman & Director \n SESSION MODERATOR:\n Byron King - Editor, Agora Financial" },	
    {"n": " ", "s":"4:30 pm", "e":"5:00 pm","p" : "1", "t":"Fireside Chat: Engaging Today’s Investors in an Age of Pot & Crypto", "d" : "Byron King - Editor, Agora Financial \n Gary Baschuk - Managing Director, Mining & Senior Geologist, Peartree Canada \n James Kwantes - Editor, Resource Opportunities \n \n  SESSION MODERATOR: \n Anne Turner, Executive Director, Yukon Mining Alliance" },	
	{"n": " ", "s":"8:00 am", "e":"4:00 pm","p" : "2", "t":"Yukon Placer Forum", "d" : "" },
	{"n": " ", "s":"4:00 pm", "e":"5:30 pm","p" : "2", "t":"Klondike Placer Miners’ Association Reception", "d" : "" },
	{"n": " ", "s":"7:00 pm", "e":"late","p" : "3", "t":"Mine Bender", "d" : "Presented by Alkan Air Ltd., Total North Communications, \n Small’s Expediting Services, Equity Exploration and ALX" }
	];
	
    this.monitems = [
	{"n": " ", "s":"8:00 am", "e":"5:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Klondike Crane Inspections" },
	{"n": " ", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": " ", "s":"9:30 am", "e":"3:00 pm","p" : "0", "t":"Yukon Student Tours", "d" : "Presented by the Yukon Geological Survey \n Sponsored by Nuway Crushing \n Supported by Kluane Drilling" },
	{"n": " ", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"Yukon Geological Survey Poster and Core Display ", "d" : "" },
    {"n": " ", "s":"8:30 am", "e":"9:00 am","p" : "1", "t":"Opening Remarks", "d" : "Hon. Ranj Pillai, Minister of Energy, Mines & Resources" },
	{"n": " ", "s":"9:00 am", "e":"9:30 am","p" : "1", "t":"Yukon Hardrock Exploration & Mining Overview 2018", "d" : "Scott Casselman, Head of Mineral Services, Yukon Geological Survey" },
	{"n": " ", "s":"9:30 am", "e":"10:00 am","p" : "1", "t":"Yukon Placer Mining Overview 2018", "d" : "Jeff Bond, Head Surficial Geologist, Yukon Geological Survey" },
	{"n": " ", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Coeur Mining" },
    {"n": " ", "s":"10:30 am", "e":"10:50 am","p" : "1", "t":"Optimizing Fish Habitat Offsetting Plans for Streamlined Project Approvals in Northern Canada ", "d" : "Robin McKillop & Rick Palmer, Palmer Environmental" },
	{"n": " ", "s":"10:50 am", "e":"11:10 am","p" : "1", "t":"Geothermal Research in Yukon", "d" : "Tiffani Fraser, Petroleum Geologist, Yukon Geological Survey" },
	{"n": " ", "s":"11:10 am", "e":"11:30 am","p" : "1", "t":"3-D Geophysical Investigation of a middle Cretaceous to Paleocene regional crustal detachment in the Cordillera of Northern Canada and Alaska", "d" : "Dr. Nathan Hayward, Research Scientist - Geophysics, Geological Survey of Canada" },
	{"n": " ", "s":"11:30 am", "e":"1:00 pm","p" : "1", "t":"BEER AND SANDWICH LUNCHEON (Yukon Convention Centre - Trade Show Floor) ", "d" : "Sponsored by Associated Engineering" },
    {"n": " ", "s":"1:00 pm", "e":"1:20 pm","p" : "1", "t":"Structure of the Eastern Frances Lake Area (105H), Southeastern Yukon", "d" : "David Moynihan, Project Geologist, Yukon Geological Survey" },
	{"n": " ", "s":"1:20 om", "e":"1:40 pm","p" : "1", "t":"Golden Culvert Project - 2018 Exploration Results and Update", "d" : "Kim Tyler, President & CEO, Stratabound Minerals Corp" },
	{"n": " ", "s":"1:40 pm", "e":"2:00 pm","p" : "1", "t":"Update on the Justin Gold Project - The Lost Ace", "d" : "Mike McCuaig, Project Manager, Aben Resources Ltd." },
	{"n": " ", "s":"2:00 pm", "e":"2:20 pm","p" : "1", "t":"3 Aces - Uncovering the Orogenic Model in the Hyland Gold Belt", "d" : "Rich Goldfarb, Director, Golden Predator Mining Corp" },
	{"n": " ", "s":"2:20 pm", "e":"2:40 pm","p" : "1", "t":"Rackla Gold Project - 2018 Exploration Update", "d" : "Julia Lane, Vice President Exploration, Atac Resources Ltd." },
	{"n": " ", "s":"2:40 pm", "e":"3:00 pm","p" : "1", "t":"Tom and Jason shale-hosted Zn-Pb-Ag deposits MacMillan Pass, Yukon", "d" : "Jack Milton, Chief Geologist, Fireweed Zinc Ltd" },
    {"n": " ", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by K&K Truck Rentals" },
    {"n": " ", "s":"10:30 am", "e":"11:30 am","p" : "2", "t":"Keynote Address: Innovating at the Speed of Trust", "d" : "Carl Weatherell, Executive Director and CEO, Canada Mining Innovation Council" },
    {"n": " ", "s":"11:30 am", "e":"1:00 pm","p" : "2", "t":"BEER AND SANDWICH LUNCHEON (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Associated Engineering" },
    {"n": " ", "s":"1:00 pm", "e":"1:15 pm","p" : "2", "t":"Invest Yukon: Building an International Brand for Investement Attraction", "d" : "Anne Turner (Lewis), Executive Director, Yukon Mining Alliance" },
    {"n": " ", "s":"1:15 pm", "e":"1:30 pm","p" : "2", "t":"Video Release: Yukon Placer Mining #its in our communities", "d" : "Jonas Smith, Executive Director, Klondike Placer Miners Association" },
    {"n": " ", "s":"1:30 pm", "e":"1:45 pm","p" : "2", "t":"Yukon Mining Days: Diversity, Inclusion & Communities", "d" : "Anne Turner, President, Yukon Women in Mining" },
    {"n": " ", "s":"1:45 pm", "e":"2:15 pm","p" : "2", "t":"Minto Socio-Economic Program Report", "d" : "Jennifer Russell, Manager of Mineral Planning & Development, \n Department of Energy, Mines & Resources \n Lois Craig, Selkirk First Nation \n Ryan Hebert, Minto Explorations Ltd. " },
    {"n": " ", "s":"2:15 pm", "e":"3:00 pm","p" : "2", "t":"Is Government Fufilling it’s Duty To Consult?", "d" : "Stewart Muir, Executive Director, Resource Works" },
    {"n": " ", "s":"3:00 pm", "e":"3:30 pm","p" : "2", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by K&K Truck Rentals" },
    {"n": " ", "s":"3:30 pm", "e":"4:00 pm","p" : "2", "t":"Yukon’s Class 1 Notification System - What does it mean? How does it work?", "d" : "Bobby Milnes, Manager of Mining Lands, Department of Energy, Mines & Resources" },	
    {"n": " ", "s":"4:30 pm", "e":"6:00 pm","p" : "3", "t":"Yukon WIM Reception - Multipurpose Room", "d" : "Sponsored by Victoria Gold Corp & Casino Mining Corp" },
    {"n": " ", "s":"6:00 pm", "e":"","p" : "3", "t":"Champagne Reception - Longhouse", "d" : "Sponsored by Ecofor" },
    {"n": " ", "s":"7:00 pm", "e":"10:00 pm","p" : "3", "t":"YCM Awards Banquet - Longhouse", "d" : "Sponsored by Alkan Air Ltd. \n Table wine provided by Cobalt Construction \n Coat Check Supported By Solidus Geological Services " },
    {"n": " ", "s":"10:00 pm", "e":"late","p" : "3", "t":"Post Banquet Reception & Dance - Multipurpose Room - Live Music by Major Funk and the Employment", "d" : "Sponsored by Northwestel \n Supported by Yukon Brewing Company & Major Drilling" }
	];
	
	this.tueitems = [
	{"n": " ", "s":"8:00 am", "e":"12:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Puff-Wik Inc " },	
	{"n": " ", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": " ", "s":"9:30 am", "e":"2:00 pm","p" : "0", "t":"Yukon Student Tours", "d" : "Presented by the Yukon Geological Survey \n Sponsored by Nuway Crushing \n Supported by Kluane Drilling" },
	{"n": " ", "s":"9:00 am", "e":"9:20 am","p" : "1", "t":"Geology and genesis of the Coffee gold deposit: implications for the tectonic and metallogenic evolution of the northern Cordillera and gold deposit models", "d" : "Kathryn MacWilliam, Senior Geoscientist, Goldcorp" },
	{"n": " ", "s":"9:20 am", "e":"9:40 am","p" : "1", "t":"Conjugate brittle NW-striking dextral and NE-striking sinistral faults, coincident with north-south shortening and clockwise block rotations, enabled mineralization in the White Gold district since Jurassic", "d" : "Mike Cooley, Structural Geologist, White Gold Corp." }, 
	{"n": " ", "s":"9:40 am", "e":"10:00 am","p" : "1", "t":"Metallogeny, geology, and gold mineralization in the Klondike District, Yukon", "d" : "Peter Tallman, President & CEO, Klondike Gold Corp." }, 
	{"n": " ", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Engage Digital Signage" }, 
	{"n": " ", "s":"10:30 am", "e":"10:50 am","p" : "1", "t":"Diatremes, Breccias and Passive Hosts. What lies beneath Triumph Gold’s Blue Sky Zone?", "d" : "Tony Barresi, Vice President Exploration, Triumph Gold Corp." }, 	
	{"n": " ", "s":"10:50 am", "e":"11:00 am","p" : "1", "t":"Community-based assessment of tailings disposal technology for the Casino mine", "d" : "Mary Mioska, Senior Environmental Manager, Casino Mining Corporation" },
	{"n": " ", "s":"11:10 am", "e":"11:30 pm","p" : "1", "t":"Formation of the Wernecke Breccia with focus on the Monster Property", "d" : "Jaap Verbaas, Vice President Exploration, Go Cobalt Mining Corp." }, 
	{"n": " ", "s":"11:30 am", "e":"1:30 pm","p" : "1", "t":"YUKON CHAMBER OF MINES LUNCHEON AND AGM (Coast High Country Inn – Ballroom A)", "d" : "Sponsored by Ferus" },
	{"n": " ", "s":"1:30 pm", "e":"1:50 pm","p" : "1", "t":"Early Mesozoic terrane paradox in the northern Cordillera: A GEM2 Perspective", "d" : "Alex Zagorevski, Research Scientist, Geological Survey of Canada" }, 
	{"n": " ", "s":"1:50 pm", "e":"2:10 pm","p" : "1", "t":"Middle to Triassic to Late Cretaceous evolution of the east Lake Laberge area, Yukon", "d" : "Esther Bordet, Project Geologist, Yukon Geological Survey" }, 
	{"n": " ", "s":"2:10 pm", "e":"2:30 pm","p" : "1", "t":"Mt. Hinton: a golden core to a silver district", "d" : "Heather Burrell, Geologial Consultant, Strategic Metals Ltd" }, 
	{"n": " ", "s":"2:30 pm", "e":"2:50 pm","p" : "1", "t":"Upper Devonian felsic volcanism at the Kudz Ze Kayah Zn-Pb-Cu VMS deposit, Finlayson Lake district, Yukon: Insights from high-precision CA-ID-TIMS U-Pb zircon geochronology", "d" : "Matthew Manor, PhD Candidate, Memorial University of Newfoundland" },
	{"n": " ", "s":"2:50 pm", "e":"3:10 pm","p" : "1", "t":"Northeast Glenlyon geology - Paleozoic stratigraphic revisions and improvements in structural detail provide better understanding of historical mineral occurences", "d" : "Rosie Cobbett, Project Geologist, Yukon Geological Survey" }, 
	{"n": " ", "s":"3:10 pm", "e":"3:30 pm","p" : "1", "t":"Intrustion Related, Sediment-Hosted Gold Mineralization: Perspectives from Hyland & Aurex-McQuesten Projects, Yukon", "d" : "James Thom, Senior Geologist & Field Manager, Banyan Gold Corp." }, 
	{"n": " ", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Yukon, North of Ordinary" }, 
	{"n": " ", "s":"8:00 am", "e":"8:40 am","p" : "2", "t":"Yukon Producers’ Group - People. Progress. Prosperity.", "d" : "Brad Thrall, Chair, Alexco Resource Corp. \n Jennifer Byram, VP, Pelly Construction" }, 
	{"n": " ", "s":"8:40 am", "e":"9:00 am","p" : "2", "t":"How To Permit A Multi-Jurisdictional Mine", "d" : "Coeur Mining" }, 	
	{"n": " ", "s":"9:00 am", "e":"9:20 am","p" : "2", "t":"Innovative Partners Fueling Yukon Mines", "d" : "Blaire Lancaster, VP, Business Development, Ferus Natural Gas \n Sean Kinmonth, Chief Operating Officer, Chieftan Energy \n Ron Daub Chief Executive Officer Vuntut Development Corp" },
	{"n": " ", "s":"9:20 am", "e":"9:40 am","p" : "2", "t":"Gearing Up - How Work Integrated Learning Can Help STEM-related Mining Labour Force", "d" : "Jennifer Wright, Senior Director, Employment & Diversity Initiatives, Mining Industry Human Resource Council (MiHR)" },
	{"n": " ", "s":"9:40 am", "e":"10:00 am","p" : "1", "t":"Developing and Engaging Indigenous Workers for the Canadian Mining Sector", "d" : "Pascale Larouche, Senior Program Manager, Mining Industry Human Resource Council" },
	{"n": " ", "s":"10:00 am", "e":"10:30 am","p" : "2", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Engage Digital Signage" },
	{"n": " ", "s":"10:30 am", "e":"10:50 am","p" : "2", "t":"Finding Common Ground: Regional Planning’s Contribution to Regulatory Certainty", "d" : "Pearl Callaghan, Chair, Yukon Land Use Planning Council \n Ron Cruikshank, Director, Yukon Land Use Planning Council" },
	{"n": " ", "s":"10:50 am", "e":"11:10 am","p" : "2", "t":"Yukon Environmental and Socio-Economic Assessment Board Registry Update", "d" : "Tim Smith, Executive Director, YESAB \n Rob Yeomans, IT/Communications Manager, YESAB" },
	{"n": " ", "s":"11:10 am", "e":"11:30 am","p" : "2", "t":"Yukon Water Board", "d" : "Roger Lockwood, Director, Yukon Water Board" },
	{"n": " ", "s":"11:30 am", "e":"1:30 pm","p" : "2", "t":"YUKON CHAMBER OF MINES LUNCHEON AND AGM  (Coast High Country Inn – Ballroom A)", "d" : "Sponsored by Ferus" },
	{"n": " ", "s":"1:00 pm", "e":"2:00 pm","p" : "2", "t":"Innovations in Transportation Infrastructure Panel Discussion", "d" : "The Runway, Roadway and Soil Stabilization Solutions for Mining Operations \n Robert Kendall, Chairperson of the Alternate Runway Material Test Program, Faun Trackway USA \n \n SESSION MODERATOR: \n Ed Peart - Yukon Chamber of Commerce " },
	{"n": " ", "s":"2:00 pm", "e":"3:00 pm","p" : "2", "t":"Exploring Business and Entreprenuership Opportunities through Yukon’s Mining Supply Chain", "d" : "Shelagh Rowles, Executive Director, Centre for Northern Innovation in Mining (CNIM) \n Ginny Coyne, Coordinator, Centre for Northern Innovation in Mining (CNIM) \n Sara Thompson, Program Enhancement Officer, Northern Energy Innovation/Cold Climate Innovation \n" },
	{"n": " ", "s":"3:00 pm", "e":"3:30 pm","p" : "2", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Yukon, North of Ordinary" },
	{"n": " ", "s":"3:30 pm", "e":"4:30 pm","p" : "2", "t":"Yukon University - An Oppportunity for Growth", "d" : "Karen Barnes, President & Chanceller, Yukon College \n Wendy Tayler, Chair, YukonU Foundation \n Tosh Southwick, Associate Vice President, Indigenous Engagement & Reconciliation \n" },
	{"n": " ", "s":"4:30 am", "e":"6:00 pm","p" : "3", "t":"Closing Reception", "d" : "Sponsored by Northern Vision Development LLP  \n Entertainment Sponsored by ATAC Resources" }
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


