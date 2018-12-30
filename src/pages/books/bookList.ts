import { Component } from '@angular/core';
import { Item } from '../../models/Item';
import { LendBookPage } from './lendBook';
import { ItemsService } from '../../services/ItemsService';
import { ModalController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-book-list',
  templateUrl: 'bookList.html'
})
export class BookListPage {
  bookList: Item[];

  constructor(private modalCtrl: ModalController, 
              private itemService: ItemsService,
              private menuCtrl: MenuController) {

  }

  ionViewWillEnter() {
      this.bookList = this.itemService.bookList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}