import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { Toast } from '@ionic-native/toast';

import { CABApi } from '../../shared/shared';
import { LoadingMessage } from '../../shared/loading.service';

@Component({
  selector: 'page-map-modal',
  templateUrl: 'map-modal.html',
  providers: [CABApi, LoadingMessage]
})
export class MapModalPage {
  @ViewChild("map") mapElement: ElementRef;

  map: any;
  routeData: any;
  routeId: any;
  pickUpPoint: any;
  dropPoint: any;
  myLatLng: any;
  cabLatLng: any;
  estimatedTime: any;
  estimatedDistance: any;
  etaData: any;
  cabImage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public platform: Platform, private geolocation: Geolocation, private toast: Toast,
    private cabApi: CABApi, private loading: LoadingMessage) {

    this.routeId = navParams.get('routeId');
    this.pickUpPoint = navParams.get('pickUp');
    this.dropPoint = navParams.get('dropTo');
    this.cabImage = {
      url: 'assets/images/cab.png',
      scaledSize: new google.maps.Size(22, 32)
    };
  }

  ionViewWillEnter() {
    this.loading.showLoading('Loading locations');
    this.cabApi.getLocationDetails(this.routeId)
      .then(
      data => {
        this.routeData = data;
        this.loadMap();
      });
  }

  getMyLocation() {
    this.geolocation.getCurrentPosition().then((position) => {
      this.myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log('Cab location ', this.cabLatLng);
      console.log('My location ', this.myLatLng);
      this.getRideETA().then(response => {
        this.etaData = response;
        this.estimatedDistance = this.etaData.distance.text;
        this.estimatedTime = this.etaData.duration.text;
      });
    }, (error) => {
      this.toast.show('Unable to get your location ' + error.message, '5000', 'center').subscribe(
        toast => {
          console.log(error);
        }
      )
    });
    this.loading.hideLoading();
  }

  loadMap() {

    this.cabLatLng = new google.maps.LatLng(parseFloat(this.routeData.lastCheckInCordinates.latitude),
      parseFloat(this.routeData.lastCheckInCordinates.longitude));
    let mapOptions = {
      center: this.cabLatLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      position: this.cabLatLng,
      animation: google.maps.Animation.DROP,
      map: this.map
    });
    let infoWindow = new google.maps.InfoWindow({ content: this.routeData.name });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
    this.getMyLocation();
  }

  getRideETA() {
    let service = new google.maps.DistanceMatrixService();
    return new Promise(resolve => {
      service.getDistanceMatrix(
        {
          origins: [this.cabLatLng],
          destinations: [this.myLatLng],
          travelMode: google.maps.TravelMode.DRIVING
        }, (response, status) => {
          resolve(response.rows[0].elements[0]);
        });
    });
  }

  closeMap() {
    this.viewCtrl.dismiss();
  }

  checkInMyLocation() {

  }

}
