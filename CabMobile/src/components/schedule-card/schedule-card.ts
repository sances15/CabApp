import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import * as moment from 'moment';

import { MapModalPage } from '../../pages/map-modal/map-modal'
import { UpdateRideModalPage } from '../../pages/update-ride-modal/update-ride-modal'
import { RideMatesModalPage } from '../../pages/ride-mates-modal/ride-mates-modal'

@Component({
  selector: 'schedule-card',
  templateUrl: 'schedule-card.html'
})
export class ScheduleCardComponent {

  tripData : any;
  @Input('cardData') scheduleData;

  constructor(public modalCtrl: ModalController) {
   
  }

  ngOnInit() {
    this.tripData = this.scheduleData;
    console.log(); 
  }

  showMapModal(routeId,pickUp,dropTo) {
    let mapModal = this.modalCtrl.create(MapModalPage, {
                                          routeId: routeId,
                                          pickUp: pickUp,
                                          dropTo: dropTo,
                                        });
    mapModal.present();
  }

  showUpdateRide() {
    let updateModal = this.modalCtrl.create(UpdateRideModalPage);
    updateModal.present();
  }

  showRideMates() {
    let updateModal = this.modalCtrl.create(RideMatesModalPage);
    updateModal.present();
  }

  getTripStatus(status) {    
    return (status == "completed") ? 'TRIP COMPLETED' : (status == "scheduled") ? 'SCHEDULED' : 
           (status == "unscheduled") ? 'UNSCHEDULED' : 'CANCELLED' ;      
  }

  showControls(status) {
    return (status == "completed") ? false : true ;     
  }

  formatScheduleTime(date) {
    return (moment(date).format('LT'));
  }

}
