import { Component } from '@angular/core';
import { Item } from '../../models/Item';
import { ModalController, MenuController } from 'ionic-angular';
import { ItemsService } from '../../services/ItemsService';
import { LendCdPage } from './lendCd';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cdList.html'
})
export class CdListPage {
  cdList: Item[];

  constructor(private modalCtrl: ModalController, 
              private itemService: ItemsService,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
      this.cdList = this.itemService.cdList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}