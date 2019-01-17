import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Items for buy',
      url: '/list',
      icon: 'basket'
    },
    {
      title: 'Add Items to sell',
      url: '/list',
      icon: 'md-add-circle'
    },
    {
      title: 'Advetise with US',
      url: '/list',
      icon: 'md-briefcase'
    },
    {
      title: 'Calculator',
      url: '/home',
      icon: 'md-calculator'
    },
    {
      title: 'Calender',
      url: '/home',
      icon: 'md-calendar'
    },
    {
      title: 'Share',
      url: '/home',
      icon: 'md-share'
    },
    {
      title: 'Setting',
      url: '/home',
      icon: 'settings'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'arrow-round-back'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
