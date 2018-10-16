import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import L from "leaflet";


/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-modal-page',
  templateUrl: 'list-modal-page.html',
})
export class ListModalPage {

    map: L.Map;
  center: L.PointTuple;

  constructor(private navParams: NavParams, private view: ViewController) {
  }
  
 itemdata = this.navParams.get('data');
  
   ionViewDidLoad() {
	
    //console.log(data);
    console.log('ionViewDidLoad MapPage');
    this.center = this.itemdata[0].marker;
    this.leafletMap();
  }

  leafletMap(){
    this.map = L.map('mapId', {
      center: this.center,
      zoom: 5,
	  maxBounds:[[1, 1], [22, 17]],
	  attributionControl:false,
	  zoomControl:false 
    });

	var imageUrl = "../../assets/imgs/map.jpg",
    imageBounds = [[1, 1], [22, 17]];
L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
	


    var marker = new L.Marker(this.center);
    this.map.addLayer(marker);

		
  }
   
   



  closeModal() {
    const data = {
      name: 'John Doe',
      occupation: 'Milkman'
    };
    this.view.dismiss(data);
  }
}
