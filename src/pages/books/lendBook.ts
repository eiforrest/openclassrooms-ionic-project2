import { Component } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemsService } from '../../services/ItemsService';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lendBook.html'
})
export class LendBookPage {
  index: number;
  book: Item;
  
    constructor(public navParams: NavParams, 
                private viewCtrl: ViewController, 
                private itemsService: ItemsService) {
    }
  
    ngOnInit() {
      this.index = this.navParams.get('index');
      this.book = this.itemsService.bookList[this.index];
      console.log(this.book);
    }
  
    dismissModal(){
      this.viewCtrl.dismiss();
    }
}