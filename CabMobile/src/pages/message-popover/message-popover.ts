import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the MessagePopover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-message-popover',
  templateUrl: 'message-popover.html'
})
export class MessagePopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {}

  closeMessages() {
    this.viewCtrl.dismiss();
  }
}
