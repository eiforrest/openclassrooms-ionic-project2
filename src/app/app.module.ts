import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { CdListPage } from '../pages/CDs/cdList';
import { LendCdPage } from '../pages/CDs/lendCd';
import { BookListPage } from '../pages/books/bookList';
import { LendBookPage } from '../pages/books/lendBook';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemsService } from '../services/ItemsService';

@NgModule({
  declarations: [
    MyApp,
    CdListPage, 
    LendCdPage, 
    BookListPage, 
    LendBookPage, 
    SettingsPage, 
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CdListPage, 
    LendCdPage, 
    BookListPage, 
    LendBookPage, 
    SettingsPage, 
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
