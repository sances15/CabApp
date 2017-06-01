import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingMessage {
    loader: any;
    constructor(private loadingCtrl: LoadingController) { 

    } 

    showLoading(message) {
        this.loader = this.loadingCtrl.create({
            spinner: 'circles',
            content: message
        });
        this.loader.present();
    }

    hideLoading() {
        this.loader.dismiss();
    }
}