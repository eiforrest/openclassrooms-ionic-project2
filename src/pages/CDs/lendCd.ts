import { Component } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemsService } from '../../services/ItemsService';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lendCd.html'
})
export class LendCdPage {
    index: number;
    cd: Item;
  
    constructor(public navParams: NavParams, 
                private viewCtrl: ViewController, 
                private itemsService: ItemsService) {
    }
  
    ngOnInit() {
      this.index = this.navParams.get('index');
      this.cd = this.itemsService.cdList[this.index];
    }
  
    dismissModal(){
      this.viewCtrl.dismiss();
    }
  
}