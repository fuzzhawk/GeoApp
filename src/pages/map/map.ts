import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import L from "leaflet";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

    map: L.Map;
  center: L.PointTuple;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.center = [10, 10];
    this.leafletMap();
  }

  leafletMap(){
    this.map = L.map('mapId', {
      center: this.center,
      zoom: 5,
	  maxBounds:[[1, 1], [22, 17]],
	  attributionControl:false
    });
	


	var imageUrl = "../../assets/imgs/map.jpg",
    imageBounds = [[1, 1], [22, 17]];
L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
	



  }
  

	 
}


