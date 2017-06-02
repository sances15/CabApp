import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { MapModalPage } from '../pages/map-modal/map-modal'
import { UpdateRideModalPage } from '../pages/update-ride-modal/update-ride-modal'
import { RideMatesModalPage } from '../pages/ride-mates-modal/ride-mates-modal'

import { MessagePopoverPage } from '../pages/message-popover/message-popover'

import { ScheduleCardComponent } from '../components/schedule-card/schedule-card'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Toast } from '@ionic-native/toast';
import { HTTP } from '@ionic-native/http';

import { CABApi } from '../shared/shared';
import { LoadingMessage } from '../shared/loading.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    MapModalPage,
    UpdateRideModalPage,
    RideMatesModalPage,
    MessagePopoverPage,
    ScheduleCardComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    MapModalPage,
    UpdateRideModalPage,
    RideMatesModalPage,
    MessagePopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    Toast,    
    CABApi,
    LoadingMessage,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
