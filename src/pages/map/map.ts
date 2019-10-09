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
	  attributionControl:false,
	  zoomControl:false 
    });
	


	var imageUrl = "../../assets/imgs/map.jpg",
    imageBounds = [[1, 1], [22, 17]];
L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
	
 this.map.on('click', function(e){
    var marker = new L.marker(e.latlng).addTo(this);
console.log(e.latlng.lat + ',' + e.latlng.lng );
});




  }
  

	 
}


