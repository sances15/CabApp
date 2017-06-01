import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-ride-mates-modal',
  templateUrl: 'ride-mates-modal.html'
})
export class RideMatesModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RideMatesModalPage');
  }

  closeRideMates() {
    this.viewCtrl.dismiss();
  }
}
