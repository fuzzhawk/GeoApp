import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';



import { Agenda2Page } from '../agenda2/agenda2';

import { PosterPage } from '../poster/poster';

import { CorePage } from '../core/core';



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
	this.sunplaces = [{"n":"YUKON CONVENTION CENTRE"},{"n":"BALLROOMS A & B - COAST, HIGH COUNTRY INN"},{"n":"BEST WESTERN GOLD RUSH INN"},{"n":"RECEPTION - MINER’S DAUGHTER RESTAURANT"} ]	
	this.monplaces = [{"n":"YUKON CONVENTION CENTRE"},{"n":"BALLROOM A - COAST, HIGH COUNTRY INN"},{"n":"BALLROOM B - COAST, HIGH COUNTRY INN"},{"n":" YUKON CHAMBER OF MINES GALA BANQUET - KWANLIN DÜN CULTURAL CENTRE"},{"n":"MULTIPURPOSE ROOM - KWANLIN DÜN CULTURAL CENTRE"} ]	
	this.tueplaces = [{"n":"YUKON CONVENTION CENTRE"},{"n":"BALLROOM A - COAST, HIGH COUNTRY INN"},{"n":"BALLROOM B - COAST, HIGH COUNTRY INN"},{"n":"CLOSING RECEPTION - YUKON CONVENTION CENTRE"} ]
 
  
    this.satitems = [
	{"n": " ", "b": "0", "s":"8:00 am", "e":"5:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Finning" },	
	{"n": " ", "b": "0", "s":"10:00 am", "e":"5:00pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": " ", "b": "0", "s":"10:00 am", "e":"2:00pm","p" : "0", "t":"Family Day at the Trade Show", "d" : "Sponsored by Golden Predator Mining\nGold Panning Sponsored by Horizon Helicopters \nGold Nugget Draw Sponsored by Stantec" },	
	{"n": " ", "b": "0", "s":"8:00 am", "e":"9:00 am","p" : "1", "t":"Traditional Welcome & Opening Remarks", "d" : "Provided by All Orders of Government" },
    {"n": " ", "b": "0", "s":"9:00 am", "e":"10:00 am","p" : "1", "t":"Key Note Address: Partnering for Success", "d" : "Dr. Matthew Coon Come \nFormer AFN Grand Chief, Newmont Goldcorp Board Member" },	
	{"n": " ", "b": "1", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by ALS Global " },
	{"n": " ", "b": "0", "s":"10:30 am", "e":"11:30 am","p" : "1", "t":"Keynote Address: Council of Yukon First Nations ", "d" : "" },
    {"n": " ", "b": "0", "s":"11:30 am", "e":"1:00 pm","p" : "1", "t":"YukonWIM AGM Keynote Luncheon", "d" : "The Importance of Organizational Culture in Addressing Gender Equality & Diversity \nJamile Cruz, Founder and CEO, I&D 101 (WIM Canada Board)" },
    {"n": " ", "b": "0", "s":"1:00 pm", "e":"2:00 pm","p" : "1", "t":"Key Note Address - Rethinking Activism", "d" : "Vivian Krause, Contributor, National Post \nSponsored by Ferus Natural Gas Fuels" },
	{"n": " ", "b": "0", "s":"2:00 pm", "e":"2:30 pm","p" : "1", "t":"Update on the A2A (Alaska to Alberta) Railway", "d" : "Dr. Mark Dockstator, Vice-chair Canada \nSponsored by Yukon Producer’s Group" },
    {"n": " ", "b": "0", "s":"2:30 pm", "e":"3:30 pm","p" : "1", "t":"The Tahltan Story - Achieving Self-Determination", "d" : "Chad Norman Day, President, Tahltan Central Government \nP. Jerry Asp, Founder & Former CEO, Tahltan Development Corporation" },	
    {"n": " ", "b": "1", "s":"3:30 pm", "e":"4:30 pm","p" : "1", "t":"TRADE SHOW HAPPY HOUR (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Nuna Logistics" },	
    {"n": " ", "b": "0", "s":"4:00 pm", "e":"5:00 pm","p" : "1", "t":"First Nation Joint Partnerships Panel Discussion", "d" : "Stanley Noel, Dena Nezziddi Development Corp. \nPaul Gruner, Chief Isaac Group of Companies \nZachary Fulton, Selkirk Development Corporation\n \nSession Moderator: \nAlbert Drapeau, Executive Director, \nYukon First nations Chamber of Commerce \nPanel Sponsored by Total North Communications" },
	{"n": " ", "b": "0", "s":"5:00 pm", "e":"7:00pm","p" : "2", "t":"Opening Reception", "d" : "Sponsored by Archer Cathro & Associates \nEntertainment Supported by ALS Global" }
	];
	
	this.sunitems = [
	{"n": " ", "b": "0", "s":"8:00 am", "e":"5:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Smalls Expediting" },
	{"n": " ", "b": "0", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": "core", "b": "0", "s":"3:30 pm", "e":"5:00 pm","p" : "0", "t":"YGS Poster Display and Core Shack Happy Hour", "d" : "Sponsored by BMC Minerals  \nSupported by Aurora Geosciences" },
	{"n": " ", "b": "0", "s":"8:30 am", "e":"9:00 am","p" : "1", "t":"Welcome Remarks", "d" : "Samson Hartland, Executive Director, Yukon Chamber of Mines \nAnne Turner, Executive Director, Yukon Mining Alliance \nHon. Ranj Pillai, Minister of Economic Development, Government of Yukon" },
    {"n": " ", "b": "0", "s":"9:00 am", "e":"9:40 am","p" : "1", "t":"Keynote address: Canada’s Mineral Industry Competiveness: An Overview", "d" : "Felix Lee, President, PDAC\nSponsored by: Minto Explorations" },
	{"n": " ", "b": "0", "s":"9:40 am", "e":"10:00 am","p" : "1", "t":"Corporate Update: Victoria Gold Corp.", "d" : "John McConnell, President & CEO " },
	{"n": " ", "b": "1", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Yukon Producer’s Group" },
	{"n": " ", "b": "0", "s":"10:30 am", "e":"10:45 am","p" : "1", "t":"Corporate Update: Alexco Resource Corp.", "d" : "Brad Thrall, President" },
    {"n": " ", "b": "0", "s":"10:45 am", "e":"11:00 am","p" : "1", "t":"Corporate Update:  ATAC Resources Ltd", "d" : "Graham Downs, President & CEO" },
	{"n": " ", "b": "0", "s":"11:00 am", "e":"11:30 am","p" : "1", "t":"Junior Explorers Roundtable Highlights", "d" : "Tara Christie, President & CEO, Banyan Gold Corp \nSteve Swatton, President & CEO,K2 Gold Corp \nPeter Tallman, President & CEO, Klondike Gold Corp -  \nTony Barresi, President, Triumph Gold Corp \nSESSION MODERATOR:\nByron King, Editor - Whiskey and Gunpowder, Agora Financial" },
	{"n": " ", "b": "1", "s":"11:30 am", "e":"1:00 pm","p" : "1", "t":"BEEF AND BUN LUNCHEON (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Alexco Resource Corp" },
	{"n": " ", "b": "0", "s":"1:00 pm", "e":"1:30 pm","p" : "1", "t":"Invest Yukon: Virtual Yukon & Social Media in Mining", "d" : "Anne Turner, Executive Director, Yukon Mining Alliance " },
	{"n": " ", "b": "0", "s":"1:30 pm", "e":"1:45 pm","p" : "1", "t":"Corporate Update: BMC Minerals", "d" : "Scott Donaldson, President & CEO" },
    {"n": " ", "b": "0", "s":"1:45 pm", "e":"2:00 pm","p" : "1", "t":"Fireweed Zinc Corp.", "d" : "Brandon Macdonald, President & CEO" },	
    {"n": " ", "b": "0", "s":"2:00 pm", "e":"2:15 pm","p" : "1", "t":"Corporate Update: CMC Metals", "d" : "Kevin Brewer, President & CEO " },	
	{"n": " ", "b": "0", "s":"2:15 pm", "e":"2:30 pm","p" : "1", "t":"Corporate Update: Pembridge Resources/Minto Explorations", "d" : "Nikolett Kovacs, Exploration Manager" },	
    {"n": " ", "b": "0", "s":"2:30 pm", "e":"3:00 pm","p" : "1", "t":"BASE Junior Explorers Roundtable Highlights", "d" : "Doug Eaton, President & CEO, Strategic Metals Ltd. \nMatt Turner, President & CEO, Rockhaven Resources Ltd. \n Scott Sheldon, Director & CEO, Go Metals Corp. \n \nSESSION MODERATOR:\nByron King, Editor, Agora Financial " },	
    {"n": " ", "b": "1", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Tintina Consulting" },	
    {"n": " ", "b": "0", "s":"3:30 pm", "e":"4:00 pm","p" : "1", "t":'Keynote Address: Markets to Miners "What Have You Done For Me Lately"', "d" : "Byron King, Editor - Whiskey and Gunpowder, Agora Financial" },	
    {"n": " ", "b": "0", "s":"4:00 pm", "e":"4:15 pm","p" : "1", "t":"Metallic Group of Companies: GCX, MMG, PGE", "d" : "Chris Ackerman, Corporate Development"  },	
    {"n": " ", "b": "0", "s":"4:15 pm", "e":"4:30 pm","p" : "1", "t":"Corporate Update: Western Copper & Gold Corp", "d" : "Paul West Sells, President & CEO " },	
	{"n": " ", "b": "0", "s":"4:30 pm", "e":"4:45 pm","p" : "1", "t":"Corporate Update: White Gold Corp", "d" : "Shawn Ryan, Senior Technical Advisor" },
	{"n": " ", "b": "0", "s":"4:45 pm", "e":"5:00 pm","p" : "1", "t":"Closing Remarks", "d" : "" },	
	{"n": " ", "b": "0", "s":"8:30 am", "e":"5:30 pm","p" : "2", "t":"Yukon Placer Forum", "d" : "" },
	{"n": " ", "b": "0", "s":"4:00 pm", "e":"5:30 pm","p" : "2", "t":"Klondike Placer Miners’ Association Reception", "d" : "" },
	{"n": " ", "b": "0", "s":"7:00 pm", "e":"late","p" : "3", "t":"Mine Bender", "d" : "Presented by Alkan Air Ltd., Total North Communications, \nSmall’s Expediting Services, Equity Exploration and \nALX Explorations & Mining Supplies " }
	];
	
    this.monitems = [
	{"n": " ", "b": "0", "s":"8:00 am", "e":"5:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by Casino Mining Corp." },
	{"n": " ", "b": "0", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "" },
	{"n": " ", "b": "0", "s":"9:30 am", "e":"3:00 pm","p" : "0", "t":"Yukon Student Tours", "d" : "Presented by the Yukon Geological Survey \nSponsored by Nuway Crushing \nSupported by Air North & Ferus Natural Gas Fuels\nTours supported by Yukon Women in Mining" },
	{"n": "core", "b": "0", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"YGS Poster Display and Core Shack", "d" : "Sponsored by BMC minerals" },	
    {"n": " ", "b": "0", "s":"8:30 am", "e":"9:00 am","p" : "1", "t":"Opening Remarks", "d" : "Hon. Ranj Pillai, Minister of Energy, Mines & Resources" },
	{"n": " ", "b": "0", "s":"9:00 am", "e":"9:30 am","p" : "1", "t":"Yukon Hardrock Exploration & Mining Overview 2019", "d" : "Scott Casselman, Head of Mineral Services, Yukon Geological Survey" },
	{"n": " ", "b": "0", "s":"9:30 am", "e":"10:00 am","p" : "1", "t":"Yukon Placer Mining Overview 2019", "d" : "Jeff Bond, Head Surficial Geologist, Yukon Geological Survey" },
	{"n": " ", "b": "1", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by ALS Global" },
    {"n": " ", "b": "0", "s":"10:30 am", "e":"10:50 am","p" : "1", "t":"First Direct Comparison of Calcite Slickenfibre U-Pb and Fault Gouge Illlite K-ar Dating Methods: Dating the Big Creek Fault system", "d" : "Dr. Dawn Kellett, Research Scientist, Geological Survey of Canada" },
	{"n": " ", "b": "0", "s":"10:50 am", "e":"11:10 am","p" : "1", "t":"High Grade Breccias and Porphyry Potential on the Freegold Mountain Property", "d" : "Tony Baressi, P.Geo, President & Director, Triumph Gold Corp." },	
	{"n": " ", "b": "0", "s":"11:10 am", "e":"11:30 am","p" : "1", "t":"Update and Results of the 2019 Drilling Campaign at the Casino Project", "d" : "Heather Seeley, Western Copper and Gold Corp." },
	{"n": " ", "b": "1", "s":"11:30 am", "e":"1:00 pm","p" : "1", "t":"BEER AND SANDWICH LUNCHEON (Yukon Convention Centre - Trade Show Floor) ", "d" : "Sponsored by Associated Engineering" },
    {"n": " ", "b": "0", "s":"1:00 pm", "e":"1:20 pm","p" : "1", "t":"Exploration for Geothermal Energy Resources Along the Denali Fault near Duke River, Yukon", "d" : "Jeff Witter, Principal Geoscientist, Innovate Geothermal/YGS" },
	{"n": " ", "b": "0", "s":"1:20 pm", "e":"1:40 pm","p" : "1", "t":"Update on the Palmer Project, Haines, Alaska", "d" : "Liz Cornejo, Vp Community & External Affairs,  Constantine Metal Resources Ltd." },
	{"n": " ", "b": "0", "s":"1:40 pm", "e":"2:00 pm","p" : "1", "t":"Lithostratigraphy, Replacement Style VMS Mineralization and Alteration at the Kudz Ze Kayah Deposit, Finlayson Lake District, Yukon", "d" : "Nikola Denisova, PhD, Memorial U, BMC Minerals" },
	{"n": " ", "b": "0", "s":"2:00 pm", "e":"2:20 pm","p" : "1", "t":"Improvements to Minfile and YGS Databases", "d" : "Brett Elliot, GIS Geologist/Spatial Data Adminstrator,  Yukon Geological Survey" },
	{"n": " ", "b": "0", "s":"2:20 pm", "e":"2:40 pm","p" : "1", "t":"New Exploration Approach on the JP Ross Property", "d" : "Shawn Ryan, President, Ryanwood Exploration" },
	{"n": " ", "b": "0", "s":"2:40 pm", "e":"3:00 pm","p" : "1", "t":"Structural Evolution and Timing of Gold Mineralization in the Klondike District, Yukon", "d" : "Peter Tallman, President & CEO, Klondike Gold Corp." },	
    {"n": " ", "b": "1", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by ALS Global " },
    {"n": " ", "b": "0", "s":"10:30 am", "e":"11:30 am","p" : "2", "t":"Yukon’s Mineral Development Strategy -  Partnering for Yukon’s Mineral Future ", "d" : "Angus Robertson, Chair, Yukon Mineral Development Strategy \nDoug Eaton, Member, Yukon Mineral Development Strategy " },
	{"n": " ", "b": "1", "s":"11:30 am", "e":"1:00 pm","p" : "2", "t":"BEER AND SANDWICH LUNCHEON (Yukon Convention Centre - Trade Show Floor) ", "d" : "Sponsored by Associated Engineering" },
    {"n": " ", "b": "0", "s":"1:00 pm", "e":"2:00 pm","p" : "2", "t":"Diversity & Inclusion in Yukon’s Mineral Development Industry ", "d" : "Anne Turner, Executive Director, Yukon Mining Alliance \nTara Christie, President & CEO Banyan Gold Corporation \nBrenda Barnes, Executive Director, Yukon Women in Technology & Trades \n \nSession Moderator: Jamile Cruz, D&I 101 & Women in Mining Canada Board Member " },
    {"n": " ", "b": "0", "s":"2:00 pm", "e":"2:20 pm","p" : "2", "t":"Klondike Placer Miners Association Update", "d" : "Brooke Rudolph, A/Executive Director, KPMA" },	
    {"n": " ", "b": "0", "s":"2:20 pm", "e":"2:40 pm","p" : "2", "t":"How to Access Government of Yukon Spatial Data & Web Services", "d" : "Ryan Gould, Geomatics Consultant, Geomatics Yukon \nNicole parry, Spatial Data adminstrator, Geomatics Yukon " },
	  {"n": " ", "b": "1", "s":"2:40 pm", "e":"3:00 pm","p" : "2", "t":"Drone Use in Mineral Exploration: Background & Applications", "d" : "Vanessa Bennett" },	
    {"n": " ", "b": "0", "s":"4:30 pm", "e":"6:00 pm","p" : "3", "t":"Yukon WIM Reception - Multipurpose Room", "d" : "" },
    {"n": " ", "b": "0", "s":"6:00 pm", "e":"","p" : "3", "t":"Champagne Reception - Lobby", "d" : "Sponsored by Small’s Expediting" },
    {"n": " ", "b": "0", "s":"7:00 pm", "e":"10:00 pm","p" : "3", "t":"Yukon Chamber of Mines Awards Banquet - Longhouse", "d" : "Sponsored by Alkan Air Ltd. \nCatered by Summit Camps" },
    {"n": " ", "b": "0", "s":"10:00 pm", "e":"late","p" : "4", "t":"Post Banquet Dance - Live Music by Major Funk & the Employment", "d" : "Sponsored by Nex Gen Mechanical Solutions \nSupported by Yukon Brewing Company" }
	];
	
	this.tueitems = [
	{"n": " ", "b": "0", "s":"8:00 am", "e":"12:00 pm","p" : "0", "t":"REGISTRATION OPEN", "d" : "Sponsored by ALX Explorations and Mining Supplies" },	
	{"n": " ", "b": "0", "s":"10:00 am", "e":"5:00 pm","p" : "0", "t":"TRADE SHOW OPEN", "d" : "Sponsored by Yukon Geological Survey" },
	{"n": " ", "b": "0", "s":"9:30 am", "e":"2:00 pm","p" : "0", "t":"Yukon Student Tours", "d" : "Presented by the Yukon Geological Survey \nSponsored by Nuway Crushing \nSupported by Air North & Ferus Natural Gas Fuels \nTours supported by Yukon Women in Mining" },
	{"n": " ", "b": "0", "s":"9:00 am", "e":"9:20 am","p" : "1", "t":"Preliminary Observations on the Bedrock Geology of the Rackla River Area, Wernecke Mountains (parts of NTS 106C/4 and 106C/5)", "d" : "Tyler Ambrose, Project Geologist, Yukon Geological Survey" },
	{"n": " ", "b": "0", "s":"9:20 am", "e":"9:40 am","p" : "1", "t":"Regional exploration on the Rau project", "d" : "Adam Coulter, Project Geologist, ATAC Resources" }, 
	{"n": " ", "b": "0", "s":"9:40 am", "e":"10:00 am","p" : "1", "t": "A New Method of Mineral Potential Mapping for Land Use Planning in Yukon: Potential Applications for Industry", "d" : "Warwick Bullen, Economic Geologist, Yukon Geological Survey" }, 
	{"n": " ", "b": "1", "s":"10:00 am", "e":"10:30 am","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Yukon Producers’ Group" },
	{"n": " ", "b": "0", "s":"10:30 am", "e":"10:50 am","p" : "1", "t":"Regional Tectonostratigraphic Framework, Selwyn Basin", "d" : "David Moynihan, Project Geologist, Yukon Geological Survey" }, 	
	{"n": " ", "b": "0", "s":"10:50 am", "e":"11:10 am","p" : "1", "t":"Mid to Late Devonian Volcanism and Zinc Mineralization at Boundary Zone: Upside from Ore Sorting at a New Zone for the MacMillan Pass Project", "d" : "Jack Milton, Chief Geologist, Fireweed Zinc Ltd" },
	{"n": " ", "b": "0", "s":"11:10 am", "e":"11:30 pm","p" : "1", "t":"Astro Gold Project, MacKenzie Mountains, NWT", "d" : "Stewart Harris, Evrim Resource Corp., Newmont-Goldcorp" }, 
	{"n": " ", "b": "0", "s":"11:30 am", "e":"1:30 pm","p" : "1", "t":"YUKON CHAMBER OF MINES 76TH ANNUAL GENERAL MEETING (Ballroom A - Coast, High Country Inn)", "d" : "11:45 AM Doors Open | Buffet Lunch  \n12:00 PM AGM starts" },
	{"n": " ", "b": "0", "s":"1:30 pm", "e":"1:50 pm","p" : "1", "t": "Synthesis of Targeted Geoscience Initiative: Research Results on Sediment-Hosted Base Metals Deposits ", "d" : "Michael Gadd, Research Scientist, Geolgical Survey of Canada" }, 
	{"n": " ", "b": "0", "s":"1:50 pm", "e":"2:10 pm","p" : "1", "t":"IOCG Alteration and Mineralization on the Monster Property", "d" : "Jaap Verbaas, VP Explorations, Go Metals Corp." }, 
	{"n": " ", "b": "0", "s":"2:10 pm", "e":"2:30 pm","p" : "1", "t":"High-Grade Gold Discovery at the  Mount Hinton Property, Central Yukon", "d" : "Steve Israel, Strategic Metals Ltd." }, 	
	{"n": " ", "b": "0", "s":"2:30 pm", "e":"2:50 pm","p" : "1", "t":"McQuesten: A New Geological Model to Unlock Value of Known Near Surface Gold Mineralization", "d" : "Tara Christie, President & CEO, Banyan Gold Corp" },	
	{"n": " ", "b": "0", "s":"2:50 pm", "e":"3:10 pm","p" : "1", "t":"Eagle Gold Mine", "d" : "Paul Gray, VP Exploration, Victoria Gold Corp." }, 
	{"n": " ", "b": "1", "s":"3:00 pm", "e":"3:30 pm","p" : "1", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Yukon Producers’ Group" }, 	
	{"n": " ", "b": "0", "s":"8:00 am", "e":"9:00 am","p" : "2", "t":"Centre for Northern Innovation in Mining Panel Yukon College: Northern Education and Research Opportunities in Yukon Mining 2020", "d" : "Dr. Karen Barnes, President, Yukon College \nShelagh Rowles, Executive Director, Centre for Northern Innovation in Mining \nGinny Coyne, Instructor/Coordinator, Life & Mining Career Coaching Program \nGuillaume Nielsen, Industrial Research Chair in Northern Mine Remediation \nDr. Joel Cubley, Instructor/Coordinator, Geological Technology Program\n \nSESSION MODERATOR: \nErin Holm, Marketing and Communications Coordinator, Yukon College" }, 
	{"n": " ", "b": "0", "s":"9:00 am", "e":"9:20 am","p" : "2", "t":"use of Regulated Professionals in Natural Resource Projects", "d" : "Christine Houghton, Chief Executive Officer, The College of Applied Biology" }, 
	{"n": " ", "b": "0", "s":"9:20 am", "e":"9:40 am","p" : "2", "t":"Jurisdicitional Regulatory Differences - a Yukon Advantage?", "d" : "Pat Tobler R.P.Bio., CPESC, Regional Director, Environmental Dynamics" },
	{"n": " ", "b": "0", "s":"9:40 am", "e":"10:00 am","p" : "2", "t":"Innovations in Environmental Data Collection", "d" : "Dr. Ric Horobin, Principal Hydrogeologist, SLR Consulting (Whitehorse)" },
		{"n": " ", "b": "1", "s":"10:00 am", "e":"10:30 am","p" : "2", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Yukon Producers’ Group" },
	{"n": " ", "b": "0", "s":"10:30 am", "e":"10:50 am","p" : "2", "t":"The Work of the Dawson Regional Planning Commission and the Future of Regional Planning in the Yukon", "d" : "Chair, Yukon Land Use planning Council \nRon Cruikshank, Director, Yukon Land Use Planning Council \nTim Van Hinte, Senior Planner, Dawson Regional Land Use planning Commission \nDebbie Nagano, Board member, Dawson Regional Land Use Planning Commission" },
	{"n": " ", "b": "0", "s":"10:50 am", "e":"11:10 am","p" : "2", "t":"YESAB - What is Pre-Submission Engagement?", "d" : "Laura Cabott, Chair, YESAB\nHeidi Rumscheidt, Policy Officer, YESAB" },
	{"n": " ", "b": "0", "s":"11:10 am", "e":"11:30 am","p" : "2", "t":"Exploring the Water Licensing Process", "d" : "Piers McDonald, Chair, Yukon Water Board \nRoger Lockwood, Director, Yukon Water Board " },
	{"n": " ", "b": "0", "s":"11:30 am", "e":"1:30 pm","p" : "2", "t":"YUKON CHAMBER OF MINES 76th ANNUAL GENERAL MEETING (Ballroom A - Coast, High Country Inn)", "d" : "11:45 AM Doors Open | Buffet Lunch  \n12:00 PM AGM " },
	{"n": " ", "b": "0", "s":"1:00 pm", "e":"1:30 pm","p" : "2", "t":"DEA - Efficient Environmental Assessment for Major Projects", "d" : "Scott Weston, Vice President, Business Development, Hemmera\nMichael Muller, Business Leader, Northern Projects, Hemmera" },
	{"n": " ", "b": "0", "s":"1:30 pm", "e":"2:30 pm","p" : "2", "t":"Innovations in Energy for Mining & Remote Communities", "d" : "Blaire Lancaster, Ferus Natural Gas Fuels \nJanne Wallenius, Lead Cold, Small Modular Reactors in Northern Applications \nJeanine Vany, EVP, Geosciences Eavor Technolgies Inc.\n \nSESSION MODERATOR:\nEdward Peart, Infrastructure Chair, Yukon Chamber of Mines" },
	{"n": " ", "b": "0", "s":"2:30 am", "e":"3:00 pm","p" : "2", "t":"Sharing Information on Geothermal Potential with Yukoners", "d" : "Leyla Weston, Outreach Geologist, YGS \nTiffany Fraser, Bedrock Geologist, YGS" },	
	{"n": " ", "b": "1", "s":"3:00 pm", "e":"3:30 pm","p" : "2", "t":"NUTRITION BREAK (Yukon Convention Centre - Trade Show Floor)", "d" : "Sponsored by Yukon Producers' Group" },
	{"n": " ", "b": "0", "s":"3:30 pm", "e":"4:30 pm","p" : "2", "t":"Partnerships in Transparency", "d" : "Dr. Janis Shandro, Kitselas First Nation \n \nSESSION MODERATOR: Deniz Yaylaci PHD, Project Manager, Transparency International Canada" },

	{"n": " ", "b": "0", "s":"4:30 am", "e":"6:00 pm","p" : "3", "t":"Closing Reception", "d" : "Sponsored by Northern Vision Development LLP \nEntertainment Sponsored by ATAC Resources" }
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
  
  
  	       goToPosterPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(PosterPage);
     }
	 
	   	       goToCorePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CorePage);
     }
    

	 
}


