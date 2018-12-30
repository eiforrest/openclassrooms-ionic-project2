import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { BookListPage } from '../pages/books/bookList';
import { CdListPage } from '../pages/CDs/cdList';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  settingsPage: any = SettingsPage;
  tabsPage: any = TabsPage;
  bookListPage: any = BookListPage;
  cdListPage:any = CdListPage;
  
  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}

