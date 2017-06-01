import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the UpdateRideModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-update-ride-modal',
  templateUrl: 'update-ride-modal.html'
})
export class UpdateRideModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    // TODO data binding here
  }

  closeUpdate() {
    this.viewCtrl.dismiss();
  }
}
