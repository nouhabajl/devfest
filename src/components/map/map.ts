import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare var google;
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  map: any;
  title = "Arrival";
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('search-input') mapSearch: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, params: NavParams) {
    this.title = params.get("title");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.loadMap();
  }
  loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }
  openMap(){
    
  }
  goBack() {
    this.navCtrl.pop();
    }
}
