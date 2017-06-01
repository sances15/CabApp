import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { MapModalPage } from '../map-modal/map-modal'
import { UpdateRideModalPage } from '../update-ride-modal/update-ride-modal'
import { RideMatesModalPage } from '../ride-mates-modal/ride-mates-modal'
import { MessagePopoverPage } from '../message-popover/message-popover'

import { CABApi } from '../../shared/shared';
import { LoadingMessage } from '../../shared/loading.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CABApi, LoadingMessage]
})
export class HomePage {
  scheduleData: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
              private cabApi: CABApi, private loading: LoadingMessage) {
 
  }

  ionViewWillEnter() {
    this.loading.showLoading('Loading schedules');
    this.cabApi.getUserSchedules()
        .then(
          data => {
            this.scheduleData = data;
            this.loading.hideLoading();
            // console.log(this.scheduleData)
          }
        );
  }

  showMapModal() {
    let mapModal = this.modalCtrl.create(MapModalPage);
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

  showActionModal(PageName) {
    let updateModal = this.modalCtrl.create(PageName);
    updateModal.present();
  }

  sendMessagesToAll(ev) {
    let messagePopover = this.modalCtrl.create(MessagePopoverPage);
    messagePopover.present();
  }
}
